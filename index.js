var sec = "00";
var min = "25";

var getout = new Audio("getout.mp3");
var chillmusic = new Audio("chillmusic.mp3");
var clockrunning = false;

function initTimer() {
    console.log("timer initialized");
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;

    document.getElementById("muteButton").style.display = "none";
}

function resetTimer() {
    clearInterval(mInterval);
    clearInterval(sInterval);

    clockrunning = false;

    console.log("timer cleared");
    min = "25";
    sec = "00";

    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;

    document.getElementById("complete").innerHTML = "";
    document.getElementById("complete").classList.remove("display_finish");

    document.getElementById("muteButton").style.display = "none";

    chillmusic.pause();
    chillmusic.currentTime = 0;
    chillmusic.muted = false;

    getout.pause();
    getout.currentTime = 0;
}

function muteAudio() {
    if (chillmusic.muted == true) {
        chillmusic.muted = false;
        document.getElementById("muteButton").innerHTML = "Mute";

    } else {
        chillmusic.muted = true;
        document.getElementById("muteButton").innerHTML = "Unmute";
    }

}

function startTimer() {
    console.log("called start timer");

    if (clockrunning) {
        console.log("clock is running");
    } else {
        console.log("timer started!");
        chillmusic.play();
        document.getElementById("muteButton").style.display = "block";
        document.getElementById("muteButton").innerHTML = "Mute";

        min = 24;
        sec = 59;

        document.getElementById("minutes").innerHTML = min;
        document.getElementById("seconds").innerHTML = sec;

        clockrunning = true;

        mInterval = setInterval(mTimer, 60000);
        sInterval = setInterval(sTimer, 1000);

        function mTimer() {
            min = min - 1;
            if (min < 10) {
                min = "0" + min;
            }
            document.getElementById("minutes").innerHTML = min;
        }

        function sTimer() {
            sec = sec - 1;
            if (sec < 10) {
                sec = "0" + sec;
            }
            document.getElementById("seconds").innerHTML = sec;

            if (sec <= 0) {
                if (min <= 0) {
                    clearInterval(mInterval);
                    clearInterval(sInterval);

                    clockrunning = false;
                    chillmusic.pause();
                    chillmusic.currentTime = 0;

                    document.getElementById("complete").innerHTML = "Good work! Take a nice break :)";

                    document.getElementById("complete").classList.add("display_finish");
                    getout.play();
                }

                sec = 60;
            }
        }
    } //start clock

}