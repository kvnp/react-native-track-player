export default class MediaSession {
    constructor(play, pause, skipToNext, skipToPrevious) {
        if ("mediaSession" in navigator) {
            navigator.mediaSession.playbackState = "none";
            
            const handlers = [
                ['play', play],
                ['pause', pause],
                ['nexttrack', skipToNext],
                ['previoustrack', skipToPrevious]
            ];

            for (const [action, handler] of handlers) {
                try { navigator.mediaSession.setActionHandler(action, handler); }
                catch{ console.log(action + " is not supported yet"); }
            }
        }
    }

    setPlaying = () => {
        if ("mediaSession" in navigator)
            navigator.mediaSession.playbackState = "playing";
    }

    setPaused = () => {
        if ("mediaSession" in navigator)
            navigator.mediaSession.playbackState = "paused";
    }

    setMetadata = (title, artist, artwork) => {
        if ("mediaSession" in navigator) {
            navigator.mediaSession.metadata = new MediaMetadata({
                title: title,
                artist: artist,
                artwork: [
                    { src: artwork, type: 'image/png' },
                ]
            });
        }
    }
}