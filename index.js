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
        millisecondsEL.textContent = milliseconds

    }, 10);

    
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}







function startVideoFromCamera(){

    const specs = {video:{width:1280, height:720}}

    navigator.mediaDevices.getUserMedia(specs).then(stream=>{

        const videoElement = document.querySelector('#video')

        videoElement.srcObject = stream


    }).catch(error=>{console.log(error)})
}


window.addEventListener("DOMContentLoaded", startVideoFromCamera)