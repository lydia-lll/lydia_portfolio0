$(document).ready(function(){

    const smallCups = document.querySelectorAll('.cup-small')
    const liters = document.getElementById('liters')
    const percentage = document.getElementById('percentage')
    const remained = document.getElementById('remained')

    var skillVal = 0;
    var workPos0 = $('.workSt').offset().top;
    var workPos = workPos0-200;
    var selfIn0 = $('.textCTN').offset().top;
    var selfIn = selfIn0-200;


    //show self-intro text
    $(".textCTN").hide();
    $(".textCTN").fadeIn(3000);

    
    //scroll to show gallery
    $(window).scroll(function(){

        if($(window).scrollTop() > workPos){
            $(".intro").css("background-color","rgba(220,234,225,0.7)");
            $(".introWrap").fadeIn(1000);
        }
        else{

            $(".introWrap").hide();
            // $("#sketch-holder").hide();

        }

    });

    //click to view skill percentage
    $(".c1").click(function(){
        skillVal = 0.6;
    });

    $(".c2").click(function(){
        skillVal = 0.7;
    });

    $(".c3").click(function(){
        skillVal = 0.6;
    });

    $(".c4").click(function(){
        skillVal = 0.5;
    });


    $(".c5").click(function(){
        skillVal = 0.8;
    });

    $(".c6").click(function(){
        skillVal = 0.9;
    });


    updateBigCup()

    smallCups.forEach((cup,idx)=>{
        cup.addEventListener('click',()=>highlightCups(idx))
    })

    function highlightCups(idx){
        if(idx  == 6 && smallCups[idx].classList.contains("full")){
            idx--
        }else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')){
            idx--
        }
            
        
         smallCups.forEach((cup,index)=>{
             if(index <= idx){
                cup.classList.add('full')
             }else{
                 cup.classList.remove('full')
             }
         })   
         
         updateBigCup()
    }
    function updateBigCup(){
        const fullCups = document.querySelectorAll('.cup-small.full').length
        const totalCups = smallCups.length

        if(fullCups == 0){
            percentage.style.visibility = 'hidden'
            percentage.style.height = 0
        }else{
            percentage.style.visibility = 'visible'
            // percentage.style.height = `${fullCups/totalCups*300}px`
            // percentage.innerText = `${fullCups/totalCups*100}%`
            percentage.style.height = `${skillVal*300}px`
            percentage.innerText = `${skillVal*100}%`
        }

        // if(fullCups == totalCups){
        //     remained.style.visibility = 'hidden'
        //     remained.style.height = 0
        // }else{
        //     remained.style.visibility = 'visible'
        //     liters.innerText = `${100-(100*skillVal)}%`
        // }
        remained.style.visibility = 'visible'
        // liters.innerText = `${100-(100*skillVal)}%`
    }
    //skill ends

    //click to see ml5 demo
    $(".btnC").click(function(){

        // $("#sketch-holder").fadeIn(1000);
        // window.setup = setup;
        // window.draw  = draw;
        // new p5();
        // $.getScript("js/sketch.js");
        var script = document.createElement('script');

        script.type = 'text/javascript';

        // script.src = 'a.js?_dc=' + new Date().getTime();
        script.src = 'js/sketch.js';
        document.getElementsByTagName('head')[0].appendChild(script);


    });

});