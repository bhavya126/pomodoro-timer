const startTime=25;
let seconds=startTime*60;
let myInterval;
let pauseState=false;;
let startState=false;
const minutesEL=document.getElementById("min");
const secondsEL=document.getElementById("sec");

function startResetTimer(){
    if(!startState){
        console.log("start function")
        seconds=startTime*60;
        myInterval=setInterval(countDown,1000);
        startState=true;
        document.getElementById("start-btn").innerHTML="Reset";
    }
    else{
        console.log("reset function")
        minutesEL.innerHTML=startTime;
        secondsEL.innerHTML='0'+0;
        clearInterval(myInterval);
        startState=false;
        document.getElementById("start-btn").innerHTML="Start";
        pauseState=false;
        document.getElementById("pause-btn").innerHTML="Pause";
    }
    
}

function pauseResumeTimer(){
    if(startState){
        if (!pauseState){
            console.log("paused")
            clearInterval(myInterval);
            pauseState=true;
            document.getElementById("pause-btn").innerHTML="Resume";
        }
        else{
            myInterval=setInterval(countDown,1000);
            pauseState=false;
            document.getElementById("pause-btn").innerHTML="Pause";
        }
    }
    else{
        alert("Start the timer to Pause/Resume");
    }
    
}


function countDown(){
    seconds--;
    const newMinutes=Math.floor(seconds/60);
    let newSceonds=seconds%60;

    newSceonds=newSceonds<10?'0'+newSceonds:newSceonds;

    minutesEL.innerHTML=newMinutes;
    secondsEL.innerHTML=newSceonds;
    

    if(newMinutes===0 && newSceonds==='00'){
        clearInterval(myInterval);
    }
    
}

