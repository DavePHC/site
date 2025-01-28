let videoTag = document.querySelector('.video');
let videoSource = document.createElement('source');
const startWidth = document.documentElement.clientWidth;


videoTag.append(videoSource);
videoSource.setAttribute('type', 'video/webm');


function updateVideoSource(type, widthValue) {
    // type: "initial" | "update"
    // widthValue: number

    videoTag.pause()

    if (type === "initial") {
        console.log(`i am ${type}`)
        console.log(`my width = ${widthValue}`)


        if (widthValue >= 768) {


            switch (true) {
                case videoTag.classList.contains('main-video'):
                    videoSource.src = '/video/desctop-video.webm';
                    videoTag.poster = '/img/automation-poster.webp';
                    break;
                case videoTag.classList.contains('automation-video'):
                    videoSource.src = '/video/automation-video.webm';
                    videoTag.poster = '/img/automation-poster.webp';

                    break;
                case videoTag.classList.contains('management-video'):
                    //videoSource.src = '/video/management.mp4';
                    videoSource.src = '/video/management-video.webm';
                    videoTag.poster = '/img/management-poster.webp';

                    break;
                case videoTag.classList.contains('virtualisation-video'):
                    videoSource.src = '/video/virtualisation-video.webm';
                    videoTag.poster = '/img/virtualisation-poster.webp';

                    break;

                default:

                    break;
            }
        } else {

            switch (true) {
                case videoTag.classList.contains('main-video'):
                    videoSource.src = '/video/desctop-video-mobile.webm';
                    videoTag.poster = '/img/mobile-main-offer.webp';
                    break;
                case videoTag.classList.contains('automation-video'):
                    videoSource.src = '/video/automation-video.webm';
                    videoTag.poster = '/img/automation-poster.webp';

                    break;
                case videoTag.classList.contains('management-video'):
                    videoSource.src = '/video/management-video.webm';
                    videoTag.poster = '/img/management-poster.webp';

                    break;
                case videoTag.classList.contains('virtualisation-video'):
                    videoSource.src = '/video/virtualisation-video-mobile.webm';
                    videoTag.poster = '/img/virtualisation-poster-mobile.webp';

                    break;

                default:

                    break;
            }
        }
    } else if (type === "update") {
        console.log(`i am ${type}`)
        console.log(`my width = ${widthValue}`)

        if (widthValue >= 768) {
            // if (document.documentElement.clientWidth >= 768) {

            switch (true) {
                case videoTag.classList.contains('main-video'):
                    videoSource.src = '/video/desctop-video.webm';
                    videoTag.poster = '/img/automation-poster.webp';
                    break;
                case videoTag.classList.contains('automation-video'):
                    videoSource.src = '/video/automation-video.webm';
                    videoTag.poster = '/img/automation-poster.webp';

                    break;
                case videoTag.classList.contains('management-video'):
                    //videoSource.src = '/video/management.mp4';
                    videoSource.src = '/video/management-video.webm';
                    videoTag.poster = '/img/management-poster.webp';

                    break;
                case videoTag.classList.contains('virtualisation-video'):
                    videoSource.src = '/video/virtualisation-video.webm';
                    videoTag.poster = '/img/virtualisation-poster.webp';

                    break;

                default:

                    break;
            }
        } else {

            switch (true) {
                case videoTag.classList.contains('main-video'):
                    videoSource.src = '/video/desctop-video-mobile.webm';
                    videoTag.poster = '/img/mobile-main-offer.webp';
                    break;
                case videoTag.classList.contains('automation-video'):
                    videoSource.src = '/video/automation-video.webm';
                    videoTag.poster = '/img/automation-poster.webp';

                    break;
                case videoTag.classList.contains('management-video'):
                    videoSource.src = '/video/management-video.webm';
                    videoTag.poster = '/img/management-poster.webp';

                    break;
                case videoTag.classList.contains('virtualisation-video'):
                    videoSource.src = '/video/virtualisation-video-mobile.webm';
                    videoTag.poster = '/img/virtualisation-poster-mobile.webp';

                    break;

                default:

                    break;
            }
        }

    }

    videoTag.load()


    videoTag.play()

};

updateVideoSource("initial", startWidth)

window.addEventListener('resize', () => {
    updateVideoSource("update", document.documentElement.clientWidth)
});


// })

// if (document.documentElement.clientWidth >= 768) {
//     isGreaterThanOrEqualTo768 = true;

//     updateVideoSource();


// } else if (document.documentElement.clientWidth < 768) {
//     // alert("это я")
//     // alert(videoSource);
//     // debugger
//     isLessThan768 = true;

//     // let updateVideoSource = () => {

//     // videoSource = document.createElement('source');
//     // videoSource.setAttribute("type", 'video/webm');

//     switch (true) {
//         case videoTag.classList.contains('main-video'):
//             videoSource.src = '/video/desctop-video-mobile.webm';
//             videoTag.poster = '/img/mobile-main-offer.webp';
//             break;
//         case videoTag.classList.contains('automation-video'):
//             videoSource.src = '/video/automation-video.webm';
//             videoTag.poster = '/img/automation-poster.webp'

//             break;
//         case videoTag.classList.contains('virtualisation-video'):
//             videoSource.src = '/video/virtualisation-video-mobile.webm';
//             videoTag.poster = '/img/virtualisation-poster-mobile.webp';

//             break;
//         case videoTag.classList.contains('management-video'):
//             //videoSource.src = '/video/management.mp4';
//             videoSource.src = '/video/management-video.webm';
//             videoTag.poster = '/img/management-poster.webp'

//             break;

//         default:

//             break;
//     }

//     isDesktopAlreadyLoaded = true;
//     videoTag.append(videoSource);

//     // }

//     // updateVideoSource();
//     // poster.classList.add('video-poster-wrapper-show');

//     isMobileAlreadyDownloaded = true;
// }

// updateVideoSource(document.documentElement.clientWidth)

// window.addEventListener("resize", () => {

//     let videoTag = document.querySelector('.video');

//     let currentClientWidth = document.documentElement.clientWidth;

//     if (currentClientWidth >= 768) {
//         if (isGreaterThanOrEqualTo768 === true) {
//             console.log("и так больше, чем 700");
//         } else if (isLessThan768 === true) {
//             isLessThan768 = false;
//             isGreaterThanOrEqualTo768 = true;
//             if (isMobileAlreadyDownloaded === true) {
//                 // mobileVideo.hidden = true
//                 updateVideoSource();
//                 // desktopVideo.style.display = "none";
//             }

//             if (isDesktopAlreadyLoaded === true) {
//                 updateVideoSource();
//             } else if (isDesktopAlreadyLoaded === false) {

//                 // videoTag.style.display = "block";
//                 updateVideoSource();

//             }
//         }
//     } else if (currentClientWidth < 768) {
//         if (isGreaterThanOrEqualTo768 === true) {
//             isGreaterThanOrEqualTo768 = false;
//             isLessThan768 = true;
//             if (isDesktopAlreadyLoaded === true) {
//                 updateVideoSource();
//             }
//             if (isMobileAlreadyDownloaded === true) {
//                 updateVideoSource();
//             } else if (isMobileAlreadyDownloaded === false) {


//                 updateVideoSource();

//                 isMobileAlreadyDownloaded = true
//                 // videoWrapper.innerHTML = mobileVideo;
//             }
//         } else if (isLessThan768 === true) {

//             console.log("и так меньше, чем 700");
//         }
//     }
// });