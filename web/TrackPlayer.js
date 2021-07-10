import { DeviceEventEmitter } from "react-native";
import MediaSession from "./MediaSession";

export default class RNTrackPlayer {
    STATE_NONE = 0;
    STATE_STOPPED = 1;
    STATE_PAUSED = 2;
    STATE_PLAYING = 3;
    STATE_BUFFERING = 4;

    PLAYBACK_STATE = "playback-state";
    PLAYBACK_TRACK_CHANGED = "playback-track-changed";
    PLAYBACK_QUEUE_ENDED = "playback-queue-ended";
    PLAYBACK_ERROR = "playback-error";
    PLAYBACK_METADATA_RECEIVED = "playback-metadata-received";

    REMOTE_PLAY = "remote-play"
    REMOTE_PAUSE = "remote-pause"
    REMOTE_NEXT = "remote-next"
    REMOTE_PREVIOUS = "remote-previous"

    constructor() {
        this.emitter = DeviceEventEmitter;
        this.mediaSession = new MediaSession(
            () => this.emitter.emit(this.REMOTE_PLAY),
            () => this.emitter.emit(this.REMOTE_PAUSE),
            () => this.emitter.emit(this.REMOTE_NEXT),
            () => this.emitter.emit(this.REMOTE_PREVIOUS)
        );

        this.currentId = null;

        this.playlist = [];
        this.track = null;
        this.index = null;

        this.playEnded = false;

        this.audio = document.createElement("audio");
        
        this.audio.onended = e => {
            this.mediaSession.setPaused();
            if (this.playlist.length - 1 == this.index) {
                this.playEnded = true;
                this.audio.src = this.track.url;
                this.emitter.emit(this.PLAYBACK_STATE, { state: this.STATE_PAUSED});
                this.emitter.emit(
                    this.PLAYBACK_QUEUE_ENDED,
                    {
                        track: this.currentId,
                        position: this.audio.currentTime
                    }
                );
            } else {
                this.skipToNext(true);
            }
        };

        this.audio.oncanplay = e => {
            this.audio.play();

            if (this.playEnded) {
                this.playEnded = false;
                this.audio.pause();
            }
        };

        this.audio.onpause = e => {
            if (this.track != null) {
                this.emitter.emit(this.PLAYBACK_STATE, {state: this.STATE_PAUSED});
                this.mediaSession.setPaused();
            }
        };

        this.audio.onplay = e => {
            if (this.track != null) {
                this.emitter.emit(this.PLAYBACK_STATE, {state: this.STATE_PLAYING});
                this.mediaSession.setPlaying();
            }
        };
    }

    _emitNextTrack = id => {
        let position = this.audio.src != ''
            ? this.audio.currentTime
            : -0.01

        this.emitter.emit(
            this.PLAYBACK_TRACK_CHANGED,
            {nextTrack: id, position: position,track: this.currentId}
        );

        this.currentId = id;
    }


    play = () => {
        if (this.audio.src != '') {
            this.audio.play();
        }
    }

    pause = () => {
        if (this.audio.src != '') {
            this.audio.pause();
        }
    }

    remove = id => {
        let newList = [];
        for (let i = 0; i < this.playlist.length; i++) {
            if (this.playlist[i].id != id)
                newList.push(this.playlist[i]);
        }

        this.playlist = newList;
    }

    add = (track_list, afterId) => {
        if (afterId == undefined)
            afterId = null;

        if (afterId == null) {
            for (let i = 0; i < track_list.length; i++) {
                this.playlist.push(track_list[i]);
            }
        } else {
            let newList = [];
            for (let i = 0; i < this.playlist.length; i++) {
                if (this.playlist[i].id == afterId) {
                    for (let j = 0; j < track_list.length; j++) {
                        newList.push(track_list[j]);
                    }

                    newList.push(this.playlist[i]);

                } else {
                    newList.push(this.playlist[i]);

                }
            }

            this.playlist = newList;
        }
    }

    stop = () => {
        return new Promise((resolve, reject) => {
            if (this.audio.src != '') {
                this.audio.pause();
                this.emitter.emit(this.PLAYBACK_STATE, {state: this.STATE_STOPPED});
            }
            resolve();
        });
    }

    reset = () => {
        return new Promise((resolve, reject) => {
            if (this.audio.src != '')
                this.audio.pause();

            this.track = null;
            this.currentId = null;
            this.playlist = [];
            this.index = 0;
            this.emitter.emit(this.PLAYBACK_STATE, {state: this.STATE_NONE});
            resolve();
        });
        
    }

    destroy = () => {
        return this.reset();
    }

    skip = id => {
        return new Promise((resolve, reject) => {
            this.emitter.emit(this.PLAYBACK_STATE, {state: this.STATE_BUFFERING});

            for (let i = 0; i < this.playlist.length; i++) {
                if (this.playlist[i].id == id) {
                    if (this.playlist[i].url != null) {
                        this.index = i;
                        this.track = this.playlist[i];
                        this.audio.src = this.track.url;
                        
                        this._emitNextTrack(id);
                        this.mediaSession.setMetadata(this.track.title, this.track.artist, this.track.artwork);

                    } else {
                        this._emitNextTrack(id);
                        this.emitter.emit(this.PLAYBACK_ERROR, { reason: "url is missing" });
                    }

                    resolve();
                    break;
                }
            }
        });
    }

    skipToNext = async(wasPlaying) => {
        if (this.playlist != null) {
            if (this.playlist[this.index + 1].url == null) {
                this.emitter.emit(this.PLAYBACK_ERROR, { reason: "url is missing" });
            } else {
                this.skip(this.playlist[this.index + 1].id);
                if (!wasPlaying)
                    this.pause();
            }
        }
    }

    skipToPrevious = () => {
        if (this.playlist != null && this.index != 0)
            this.skip(this.playlist[this.index - 1].id);
    }

    removeUpcomingTracks = () => {
        return new Promise((resolve, reject) => {
            if (this.audio.src != '') {
                if (this.audio.fastSeek != undefined)
                    this.audio.fastSeek(seconds);
                else
                    this.audio.currentTime = seconds;
            }
            resolve(seconds);
        });
    }

    setVolume = volume => {
        this.audio.volume = volume;
    }

    setRate = rate => {
        this.audio.playbackRate = rate;
    }

    seekTo = seconds => {
        return new Promise((resolve, reject) => {
            if (this.audio.src != '') {
                if (this.audio.fastSeek != undefined)
                    this.audio.fastSeek(seconds);
                else
                    this.audio.currentTime = seconds;
            }
            resolve(seconds);
        });
    }

    getTrack = id => {
        return new Promise((resolve, reject) => {
            for (let i = 0; i < this.playlist.length; i++) {
                if (this.playlist[i].id == id)
                    resolve(this.playlist[i]);
            }
        });
    }

    getCurrentTrack = () => {
        return new Promise((resolve, reject) => {
            if (this.track != null)
                resolve(this.track.id);
            else
                resolve(null);
        });
    }

    getPosition = () => {
        return new Promise((resolve, reject) => {
            if (this.audio.src != '')
                resolve(this.audio.currentTime);
            else
                resolve(0); 
        });
    }

    getVolume = () => {
        return this.audio.volume;
    }

    getDuration = () => {
        return new Promise((resolve, reject) => {
            if (this.audio.src != '' && this.track != null)
                resolve(this.track.duration);
            else
                resolve(0);
        });
    }


    getBufferedPosition = () => {
        return new Promise((resolve, reject) => {
            if (this.audio.src != '')
                resolve(this.audio.buffered);
        });
    }

    getState = () => {
        return new Promise((resolve, reject) => {
            if (this.audio.src == '')
                resolve(this.STATE_NONE);
            else {
                if (this.audio.paused)
                    resolve(this.STATE_PAUSED);
                else
                    resolve(this.STATE_PLAYING);
            }
        });
    }

    getRate = () => {
        return new Promise((resolve, reject) => {
            if (this.audio.src != '')
                resolve(this.audio.defaultPlaybackRate);
            else
                resolve(null);
        });
    }

    getQueue = () => {
        return new Promise((resolve, reject) => {
            resolve(this.playlist);
        });
    }

    updateOptions = () => {}

    setupPlayer = () => {
        return new Promise((resolve, reject) => {
            resolve();
        });
    };
}

module.exports = {TrackPlayerModule: new RNTrackPlayer()};