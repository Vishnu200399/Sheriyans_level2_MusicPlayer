var arr = [
    {songName:"Jale 2",url:"./songs/Jale 2.mp3",img:"./images/Jale.jpg"},
    {songName:"Pehle bhi main",url:"./songs/Pehle Bhi Main.mp3",img:"./images/animal.jpg"},
    {songName:"Ram siya ram",url:"./songs/Ram Siya Ram.mp3",img:"./images/ram.jpg"},
    {songName:"Arjan Valley",url:"./songs/Arjan Vailly Ne.mp3",img:"./images/animal.jpg"},
]

var allsongs = document.querySelector("#all-songs")
var poster = document.querySelector("#left")
var play = document.querySelector("#play")
var backward = document.querySelector("#backward")
var forward = document.querySelector("#forward")

var audio = new Audio()

var selectedSong = 0

function mainFunction(){
    var clutter = ""
     arr.forEach(function(elem,index){
    clutter += `
    <div class="song-card" id=${index}>
    <div class="part1">
     <img src=${elem.img} alt="">
    <h2>${elem.songName}</h2>
    </div>
    <h6>3:56</h6>
    </div>`
})

allsongs.innerHTML = clutter
audio.src = arr[selectedSong].url
poster.style.backgroundImage = `url(${arr[selectedSong].img})`

}
mainFunction()
allsongs.addEventListener("click",function(e){
    selectedSong = e.target.id
    play.innerHTML = `<i class = "ri-pause-mini-fill"></i>`
    mainFunction()
    mainFunction()
    audio.play()
})
var flag = 0

play.addEventListener("click",function(){
    if(flag == 0){
      play.innerHTML = `<i class = "ri-pause-mini-fill"></i>`
      mainFunction()
      audio.play() 
      flag = 1;
    }
    else
    {
       play.innerHTML = `<i class = "ri-play-mini-fill"></i>`
       mainFunction()
       audio.pause()
       flag = 0;
    }
})

forward.addEventListener("click",function(){
    selectedSong = (selectedSong + 1) % arr.length
    mainFunction()
    audio.play()
})

backward.addEventListener("click",function(){
    selectedSong = (selectedSong - 1 + arr.length) % arr.length
    mainFunction()
    audio.play()
})