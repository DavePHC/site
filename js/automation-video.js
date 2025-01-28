// Video change

//Parent video
let videoWrapper = document.getElementById("automation-video__video");
let desktopVideo
let desktopVideoSource
let mobileVideo
let mobileVideoSource
let isDesktopAlreadyLoaded = false;
let isMobileAlreadyDownloaded = false;
let isGreaterThanOrEqualTo700 = false;
let isLessThan700 = false;

if (document.documentElement.clientWidth >= 700) {
    isGreaterThanOrEqualTo700 = true;



    desktopVideo = document.createElement("video");
    desktopVideo.classList.add("video");

    desktopVideo.autoplay = true
    desktopVideo.muted = true
    desktopVideo.loop = true

    desktopVideoSource = document.createElement("source");
    // debugger
    desktopVideoSource.src = "/video/automation-video.mp4";
    desktopVideoSource.setAttribute("type", "video/mp4");

    desktopVideo.append(desktopVideoSource);




    videoWrapper.append(desktopVideo);
    // videoWrapper.innerHTML = desktopVideo;
    isDesktopAlreadyLoaded = true;
} else if (document.documentElement.clientWidth < 700) {
    isLessThan700 = true;



    mobileVideo = document.createElement("video")
    mobileVideo.classList.add("video");

    mobileVideo.autoplay = true;
    mobileVideo.muted = true;
    mobileVideo.loop = true;

    mobileVideoSource = document.createElement("source");
    // debugger
    mobileVideoSource.src = "/video/automation-video-small.mp4";
    mobileVideoSource.setAttribute("type", "video/mp4");

    mobileVideo.append(mobileVideoSource);




    videoWrapper.append(mobileVideo);
    // videoWrapper.innerHTML = mobileVideo;
    isMobileAlreadyDownloaded = true;
}

window.addEventListener("resize", () => {

    // let desktopVideoEvent = document.getElementById('desktopVideo');
    // let mobileVideoEvent = document.getElementById('mobileVideo');

    let currentClientWidth = document.documentElement.clientWidth;

    if (currentClientWidth >= 700) {
        if (isGreaterThanOrEqualTo700 === true) {
            console.log("и так больше, чем 700");
        } else if (isLessThan700 === true) {
            isLessThan700 = false;
            isGreaterThanOrEqualTo700 = true;
            if (isMobileAlreadyDownloaded === true) {
                // mobileVideo.hidden = true
                mobileVideo.style.display = "none";
                // desktopVideo.style.display = "none";
            }

            if (isDesktopAlreadyLoaded === true) {
                desktopVideo.style.display = "block";
            } else if (isDesktopAlreadyLoaded === false) {



                desktopVideo = document.createElement("video");
                desktopVideo.classList.add("video");

                desktopVideo.autoplay = true
                desktopVideo.muted = true
                desktopVideo.loop = true

                desktopVideoSource = document.createElement("source");
                // debugger
                desktopVideoSource.src = "/video/automation-video.mp4";
                desktopVideoSource.setAttribute("type", "video/mp4");

                desktopVideo.append(desktopVideoSource);



                videoWrapper.append(desktopVideo);
                isDesktopAlreadyLoaded = true
                // videoWrapper.innerHTML = desktopVideo;
            }
        }
    } else if (currentClientWidth < 700) {
        if (isGreaterThanOrEqualTo700 === true) {
            isGreaterThanOrEqualTo700 = false;
            isLessThan700 = true;
            if (isDesktopAlreadyLoaded === true) {
                desktopVideo.style.display = "none";
            }
            if (isMobileAlreadyDownloaded === true) {
                mobileVideo.style.display = "block";
            } else if (isMobileAlreadyDownloaded === false) {


                mobileVideo = document.createElement("video")
                mobileVideo.classList.add("video");

                mobileVideo.autoplay = true;
                mobileVideo.muted = true;
                mobileVideo.loop = true;

                mobileVideoSource = document.createElement("source");
                // debugger
                mobileVideoSource.src = "/video/automation-video-small.mp4";
                mobileVideoSource.setAttribute("type", "video/mp4");

                mobileVideo.append(mobileVideoSource);



                videoWrapper.append(mobileVideo);
                isMobileAlreadyDownloaded = true
                // videoWrapper.innerHTML = mobileVideo;
            }
        } else if (isLessThan700 === true) {

            console.log("и так меньше, чем 700");
        }
    }
});