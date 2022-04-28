"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1616],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4753:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:1},s="Intro",c={unversionedId:"intro",id:"version-2.1/intro",title:"Intro",description:"A fully fledged audio module created for music apps. Provides audio playback, external media controls, background mode and more!",source:"@site/versioned_docs/version-2.1/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/doublesymmetry/react-native-track-player/tree/main/docs/versioned_docs/version-2.1/intro.md",tags:[],version:"2.1",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"app",next:{title:"Installation",permalink:"/docs/basics/installation"}},p={},u=[{value:"Features",id:"features",level:2},{value:"Example",id:"example",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"intro"},"Intro"),(0,o.kt)("p",null,"A fully fledged audio module created for music apps. Provides audio playback, external media controls, background mode and more!"),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Lightweight")," - Optimized to use the least amount of resources according to your needs"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Feels native")," - As everything is built together, it follows the same design principles as real music apps do"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Multi-platform")," - Supports Android, iOS and Windows"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Media Controls support")," - Provides events for controlling the app from a bluetooth device, the lockscreen, a notification, a smartwatch or even a car"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Local or network, files or streams")," - It doesn't matter where the media belongs, we've got you covered"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Adaptive bitrate streaming support")," - Support for DASH, HLS or SmoothStreaming"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Caching support")," - Cache media files to play them again without an internet connection"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Background support")," - Keep playing audio even after the app is in background"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Fully Customizable")," - Even the notification icons are customizable!"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Supports React Hooks \ud83c\udfa3")," - Includes React Hooks for common use-cases so you don't have to write them"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Casting support")," - Use in combination with ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/react-native-kit/react-native-track-casting"},"react-native-track-casting (WIP)")," to seamlessly switch to any Google Cast compatible device that supports custom media receivers")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"If you want to get started with this module, check the ",(0,o.kt)("a",{parentName:"p",href:"/docs/basics/installation"},"Installation")," & ",(0,o.kt)("a",{parentName:"p",href:"/docs/basics/getting-started"},"Getting Started")," page.\nIf you want detailed information about the API, check the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/functions/lifecycle"},"API Reference"),".\nYou can also look at our example project ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/doublesymmetry/react-native-track-player/tree/master/example"},"here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import TrackPlayer, { RepeatMode } from 'react-native-track-player';\n\n// Creates the player\nconst setup = async () => {\n  await TrackPlayer.setupPlayer({});\n\n  await TrackPlayer.add({\n    url: require('track.mp3'),\n    title: 'Track Title',\n    artist: 'Track Artist',\n    artwork: require('track.png')\n  });\n\n  TrackPlayer.setRepeatMode(RepeatMode.Queue);\n};\n")))}d.isMDXComponent=!0}}]);