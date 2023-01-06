let homeScore = document.getElementById('homeScore-el')
let guestScore = document.getElementById('guestScore-el')


let homeScoreCount = 0;
let guestScoreCount = 0;

function homeAddOne(){
    homeScoreCount += 1;   
    homeScore.textContent = homeScoreCount;
}

function guestAddOne(){
    guestScoreCount += 1;   
    guestScore.textContent = guestScoreCount;     
}

function homeAddTwo(){
    homeScoreCount += 2;   
    homeScore.textContent = homeScoreCount;
}

function guestAddTwo(){
    guestScoreCount += 2;   
    guestScore.textContent = guestScoreCount;     
}

function homeAddThree(){
    homeScoreCount += 3;   
    homeScore.textContent = homeScoreCount;
}

function guestAddThree(){
    guestScoreCount += 3;   
    guestScore.textContent = guestScoreCount;     
}

function resetScore(){
    homeScoreCount = 0;
    guestScoreCount = 0;
    homeScore.textContent = homeScoreCount;
    guestScore.textContent = guestScoreCount;
}