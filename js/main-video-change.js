// Video change

//Parent video
let videoTag = document.querySelector('.video');
let poster = document.querySelector('.video-poster-wrapper');
let videoSource;


let isDesktopAlreadyLoaded = false;
let isMobileAlreadyDownloaded = false;
let isGreaterThanOrEqualTo768 = false;
let isLessThan768 = false;

let updateVideoSource = () => {

    videoSource = document.createElement("source");
    videoSource.setAttribute('type', 'video/mp4');

    // if (videoTag.classList.contains('main-video')) {
    //     videoSource.src = '/video/desctop-video.mp4';
    // } else if (videoTag.classList.contains('automation-video')) {
    //     videoSource.src = '/video/automation-video.mp4';
    // } else if (videoTag.classList.contains('management-video')) {
    //     videoSource.src = '/video/management.mp4';
    // } else if (videoTag.classList.contains('virtualisation-video')) {
    //     videoSource.src = '/video/virtualisation.mp4';
    // } else {

    // }

    switch (true) {
        case videoTag.classList.contains('main-video'):
            videoSource.src = '/video/desctop-video.mp4';

            break;
        case videoTag.classList.contains('automation-video'):
            videoSource.src = '/video/automation-video.mp4';

            break;
        case videoTag.classList.contains('management-video'):
            //videoSource.src = '/video/management.mp4';
            videoSource.src = '/video/Management New.webm';

            break;
        case videoTag.classList.contains('virtualisation-video'):
            videoSource.src = '/video/virtualisation.mp4';

            break;

        default:

            break;
    }

    videoTag.append(videoSource);
    isDesktopAlreadyLoaded = true;

}

if (document.documentElement.clientWidth >= 768) {
    isGreaterThanOrEqualTo768 = true;

    updateVideoSource();


} else if (document.documentElement.clientWidth < 768) {

    // videoTag.hidden = true;

    isLessThan768 = true;

    poster.classList.add('video-poster-wrapper-show');


    isMobileAlreadyDownloaded = true;
}

window.addEventListener("resize", () => {

    let videoTag = document.querySelector('.video');
    let poster = document.querySelector('.video-poster-wrapper');

    let currentClientWidth = document.documentElement.clientWidth;

    if (currentClientWidth >= 768) {
        if (isGreaterThanOrEqualTo768 === true) {
            console.log("и так больше, чем 700");
        } else if (isLessThan768 === true) {
            isLessThan768 = false;
            isGreaterThanOrEqualTo768 = true;
            if (isMobileAlreadyDownloaded === true) {
                // mobileVideo.hidden = true
                poster.style.display = "none";
                // desktopVideo.style.display = "none";
            }

            if (isDesktopAlreadyLoaded === true) {
                videoTag.style.display = "block";
            } else if (isDesktopAlreadyLoaded === false) {

                videoTag.style.display = "block";
                updateVideoSource();

            }
        }
    } else if (currentClientWidth < 768) {
        if (isGreaterThanOrEqualTo768 === true) {
            isGreaterThanOrEqualTo768 = false;
            isLessThan768 = true;
            if (isDesktopAlreadyLoaded === true) {
                videoTag.style.display = "none";
            }
            if (isMobileAlreadyDownloaded === true) {
                poster.style.display = "block";
            } else if (isMobileAlreadyDownloaded === false) {


                poster.style.display = "block";

                isMobileAlreadyDownloaded = true
                // videoWrapper.innerHTML = mobileVideo;
            }
        } else if (isLessThan768 === true) {

            console.log("и так меньше, чем 700");
        }
    }
});