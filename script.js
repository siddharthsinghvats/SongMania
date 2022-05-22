const main=document.getElementById("main-button");
const music= document.querySelector('audio');
const img = document.getElementById("image");
const next= document.getElementById("next");
const prev = document.getElementById("prev");
const nam = document.getElementById("name");
const singer=document.getElementById("singer");

let cur =0;



const songs = [
    {
        name:"Barish Ban Jana",
        url:"barish.mp3",
        singer:"Steben",
        imgUrl:"tape.jpg"
    },
    {
        name:"Bijli Bijli",
        url:"bijli.mp3",
        singer:"Harrdy Sandhu",
        imgUrl:"guitar.jpg"
    },
    {
        name:"Dil Galti Kar Baitha",
        url:"galti.mp3",
        singer:"Jubin Nautiyal",
        imgUrl:"headphone.jpg"
    },
    {
        name:"Your Power",
        url:"power.mp3",
        singer:"Billie Eilish",
        imgUrl:"cd.jpg"
    }
]
nam.innerText= songs[cur].name;
singer.innerText= songs[cur].singer;
music.setAttribute('src',songs[cur].url);

main.addEventListener('click',()=>{
    music.play();
    const title = main.getAttribute('title');
    console.log(title);
    if(title==='Pause'){
        main.setAttribute('title','Play');
        main.setAttribute('class',"fa fa-solid fa-play");
        music.pause();
        img.setAttribute('class','');
    }else{
        main.setAttribute('title','Pause');
        main.setAttribute('class',"fa fa-solid fa-pause");
        music.play();
        img.setAttribute('class','anime');

    }
})

next.addEventListener('click',()=>{
    cur++;
    if(cur===songs.length) cur=0;
    img.setAttribute('src',songs[cur].imgUrl)
    nam.innerText= songs[cur].name;
    singer.innerText= songs[cur].singer;
    music.setAttribute('src',songs[cur].url);
    music.play();

})

prev.addEventListener('click',()=>{
    cur--;
    if(cur<0) cur=songs.length-1;
    img.setAttribute('src',songs[cur].imgUrl)
    nam.innerText= songs[cur].name;

    singer.innerText= songs[cur].singer;
    music.setAttribute('src',songs[cur].url);
    music.play();

})

