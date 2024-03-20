const timer = document.querySelector('.timer');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const darkBtn = document.getElementById('dark');


let interval 
let timeleft = 1500


function updateTime() {
  let minutes = Math.floor(timeleft / 60);
  let seonds = timeleft % 60;
  let formatedTime = `${minutes.toString().padStart(2,'0')}  ${seonds.toString().padStart(2,'0')} `


  timer.innerHTML = formatedTime;
}


function startTimer() {
    interval = setInterval(()=> {
        timeleft--
        updateTime()
        if(timeleft === 0) {
            clearInterval()
            alert("Time's Up!")
            timeleft = 1500
            updateTime();
        }
    },1000)
}


function stopTimer() {
    clearInterval(interval)
}


function resetTimer() {
    clearInterval(interval)
    timeleft = 1500 
    updateTime()
}

getDark()



// Event Listeners

startBtn.addEventListener('click',startTimer) 
stopBtn.addEventListener('click',stopTimer)
resetBtn.addEventListener('click',resetTimer)
darkBtn.addEventListener('click',getDark)


function getDark() {
    document.querySelector('body').classList.toggle('dark')

    if(document.querySelector('body').classList.contains('dark')) {
        darkBtn.innerHTML = `<i class="fa-regular fa-sun"></i>`
    }else {
        darkBtn.innerHTML = `<i class="fa-regular fa-moon"></i>`
    }

    
}








