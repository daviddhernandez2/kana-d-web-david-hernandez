'use strict'
document.addEventListener('DOMContentLoaded',()=>{

    // ANIMATED
    let animated = document.querySelectorAll(".animated");
    function ScrollAptitudes(){
        let scrolltop = document.documentElement.scrollTop;
        for(var i=0; i < animated.length; i++){
            let heightAnimated = animated[i].offsetTop;
         if(heightAnimated - 500 < scrolltop){
             animated[i].style.opacity = 1;
                animated[i].classList.add("upEffect");
         }
     }
    }
    window.addEventListener('scroll',ScrollAptitudes)


    //Scroll Bar
    let appearBar = document.querySelectorAll(".appearBar")
    let line = document.querySelectorAll(".linejs");
    let number = document.querySelectorAll(".numberjs")

    function appearBarScrollAptitudes(){
        let scrolltop = document.documentElement.scrollTop;
        for(var i=0; i < appearBar.length; i++){
            let heightAnimated = appearBar[i].offsetTop;
            if(heightAnimated - 500 < scrolltop){
                line[0].classList.add("line90");
                line[1].classList.add("line80");
                line[2].classList.add("line80");
                line[3].classList.add("line70");
                line[4].classList.add("line50");
                line[5].classList.add("line50");
                line[6].classList.add("line50");
                line[7].classList.add("line90");
                line[8].classList.add("line90");
                line[9].classList.add("line90");
                line[10].classList.add("line80");
                line[11].classList.add("line50");
                line[12].classList.add("line40");
                line[13].classList.add("line40");
                line[14].classList.add("line90");
            }
        }
    }

    window.addEventListener('scroll',appearBarScrollAptitudes)
    
    //Appear Circles
    let appearCircles = document.querySelectorAll(".appearCircles")
    let circle = document.querySelectorAll(".circlejs");

    function appearBarScrollLanguages(){
        let scrolltop = document.documentElement.scrollTop;
        for(var i=0; i < appearCircles.length; i++){
            let heightAnimated = appearCircles[i].offsetTop;
            if(heightAnimated - 500 < scrolltop){
                circle[0].classList.add("spanish");
                circle[1].classList.add("english");
                circle[2].classList.add("french");
            }
        }
    }
    window.addEventListener('scroll', appearBarScrollLanguages)
    

})//LOAD


