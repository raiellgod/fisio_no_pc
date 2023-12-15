const hoursEL = document.querySelector('#hours')
const minutesEL = document.querySelector('#minutes')
const seconddsEL = document.querySelector('#seconds')
const millisecondsEL = document.querySelector('#milliseconds')
const startBtn = document.querySelector('#startBtn')
const pauseBtn = document.querySelector ('#pauseBtn')
const resumeBtn = document.querySelector('#resumeBtn')
const resetBtn = document.querySelector ('#resetBtn')

let interval;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

startBtn.addEventListener("click", startTimer)

function startTimer(){
    interval = setInterval(()=>{

        if(!isPaused) {
            milliseconds += 10;
        }

        if(milliseconds === 1000) {
            seconds++;
            milliseconds = 0;
        }

        if(seconds === 60) {
            minutes++;
            seconds = 0;
        }

        minutesEL.textContent = formatTime(minutes)
        seconddsEL.textContent = formatTime(seconds)
        millisecondsEL.textContent = formatMilliseconds(milliseconds)

    }, 10);

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time){
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}

pauseBtn.addEventListener("click", pauseTimer)

function pauseTimer(){
    isPaused = true;
    pauseBtn.style.display = "none";
    resumeBtn.style.display ="block";
}

resumeBtn.addEventListener("click", resumeTimer)

function resumeTimer(){
    isPaused = false;
    resumeBtn.style.display ="none";
    pauseBtn.style.display = "block";
}

resetBtn.addEventListener("click", resetTimer)

function resetTimer(){
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "none";
    startBtn.style.display = "block";

    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    clearInterval(interval);

    minutesEL.textContent = "00";
    seconddsEL.textContent = "00";
    millisecondsEL.textContent = "000";
}






function startVideoFromCamera(){

    const specs = {video:{width:1280, height:720}}

    navigator.mediaDevices.getUserMedia(specs).then(stream=>{

        const videoElement = document.querySelector('#video')

        videoElement.srcObject = stream


    }).catch(error=>{console.log(error)})
}


window.addEventListener("DOMContentLoaded", startVideoFromCamera)