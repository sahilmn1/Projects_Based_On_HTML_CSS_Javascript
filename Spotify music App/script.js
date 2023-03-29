console.log("Welcome to Sahil mn")

// initialize the variable

let songIndex =0;
let audioElement =new Audio('songs/1.mp3');
let MasterPlay = document.getElementById('masterPlay');
let myProgressBar =document.getElementById('myprogressBar');
let gif =document.getElementById('gif');
let MasterSongName =document.getElementById('MasterSongName');
let songItems =Array.from(document.getElementsByClassName('songItem'));

var songs =[ {songName: "wariyo - Mortals",  filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
   {songName: "Huma huma",         filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName: "invincible",        filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName: "my Heart",          filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName: "janjij- Heroes",    filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName: "Risk movies effect",filePath:"songs/6.mp3", coverPath:"covers/6.jpg"}
    // {songName: "jadoo salam e ishq",filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    // {songName: "noise make it",      filePath:"songs/8.mp3", coverPath:"covers/8.jpg"},
    // {songName: "just a song",      filePath:"songs/9.mp3", coverPath:"covers/9.jpg"},
    // {songName: "light in the year", filePath:"songs/10.mp3", coverPath:"covers/10.jpg"}
 
]

songItems.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src =songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText =songs[i].songName;
 
})
// audioElement.play();
// handling play and pause button
MasterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        MasterPlay.classList.remove('fa-play-circle');
        MasterPlay.classList.add('fa-pause-circle');
        gif.style.opacity =1;
     
    }
    else{
        audioElement.pause();
        MasterPlay.classList.remove('fa-pause-circle');
        MasterPlay.classList.add('fa-play-circle');
        gif.style.opacity =0;
       
    }
})

// Listen to the event

audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // update seekbaar

   let progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})

// const playPauseIcons = Array.from(document.getElementsByClassName('songItemPlay'));
// const makeAllPlays = ()=>{
// playPauseIcons.forEach((icon) => {
//   icon.addEventListener('click', () => {
//     if (audioElement.paused) {
//       audioElement.play();
//       icon.classList.remove('fa-play-circle');
//       icon.classList.add('fa-pause-circle');
//       gif.style.opacity = 1;
//     } else {
//       audioElement.pause();
//       icon.classList.remove('fa-pause-circle');
//       icon.classList.add('fa-play-circle');
//       gif.style.opacity = 0;
//     }
//   });
// });
// }

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
     
            element.classList.add('fa-play-circle');
            element.classList.remove('fa-pause-circle');
          
       
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
       
        index =parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src =`songs/${index+1}.mp3`;
        MasterSongName.innerText =songs[index].songName;
        audioElement.currentTime=0;
        audioElement.play();
        MasterPlay.classList.add('fa-pause-circle');
        MasterPlay.classList.remove('fa-play-circle');
        
        gif.style.opacity =1;
    })
})

document.getElementById('Next').addEventListener('click',()=>{
    if(songIndex>=5){
        songIndex =0;
    }
    else{
        songIndex += 1;
    }
    
  
    audioElement.src =`songs/${songIndex+1}.mp3`;
    MasterSongName.innerText =songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    MasterPlay.classList.add('fa-pause-circle');
    MasterPlay.classList.remove('fa-play-circle');

})
// for the previous button in the player
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex =0;
    }
    else{
        songIndex -= 1;
    }
    
   
    audioElement.src =`songs/${songIndex+1}.mp3`;
    MasterSongName.innerText =songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    MasterPlay.classList.add('fa-pause-circle');
    MasterPlay.classList.remove('fa-play-circle');

})