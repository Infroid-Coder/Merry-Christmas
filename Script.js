function SantaDisplay() {
    let santa = document.getElementById("santa-img");
    let play = document.getElementById("play-div");
    let mc = document.getElementById("mc");
    santa.style.display = "inline-block";
    play.style.display = "none";
    santa.style.animationName = "santa";
    santa.style.animationDuration = "1s";
    mc.style.animationName = "merrychrist";
    mc.style.animationDuration = "1s";
    mc.style.display = "inline-block";
    document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4) , rgba(0, 0, 0, 0.4)) , url('Snowing.gif')";
    document.getElementById("musicspn").innerHTML = "<audio src='BG Music.mp3' autoplay>"
    
    setTimeout(function() {
        santa.style.display = "none";
    }, 1000);
    // setTimeout(function() {
    //     play.style.display = "block";
    //     mc.style.display = "none";
    //     document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.2) , rgba(0, 0, 0, 0.2)) , url('BG.webp')";
    // }, 10000);
}
