$(document).ready(function(){

    const smallCups = document.querySelectorAll('.cup-small')
    const liters = document.getElementById('liters')
    const percentage = document.getElementById('percentage')
    const remained = document.getElementById('remained')

    var skillVal = 0;
    // var workPos0 = $('.workSt').offset().top;
    // var workPos = workPos0-200;
    var selfIn0 = $('.textCTN').offset().top;
    var selfIn = selfIn0-200;

    var nav_offset_top = $('header').height() + 50; 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.header_area').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();

    //show self-intro text
    $(".textCTN").hide();
    $(".textCTN").fadeIn(3000);

    
    //scroll to show gallery
    // $(window).scroll(function(){

    //     if($(window).scrollTop() > workPos){
    //         $(".intro").css("background-color","rgba(220,234,225,0.7)");
    //         $(".introWrap").fadeIn(1000);
    //     }
    //     else{

    //         $(".introWrap").hide();
    //         // $("#sketch-holder").hide();

    //     }

    // });


    // portfolio_filter
        // custom select variables
    const select = document.querySelector("[data-select]");
    const selectItems = document.querySelectorAll("[data-select-item]");
    const selectValue = document.querySelector("[data-selecct-value]");
    const filterBtn = document.querySelectorAll("[data-filter-btn]");

    select.addEventListener("click", function () { elementToggleFunc(this); });

    // add event in all select items
    for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {

        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);

    });
    }

    //skill
    // $('.imageGallery1 .light').simpleLightbox();
	
	// $('.counter').counterUp({
	// 	delay: 10,
	// 	time: 1000
	// });
	
	$(".skill_main").each(function() {
        $(this).waypoint(function() {
            var progressBar = $(".progress-bar");
            progressBar.each(function(indx){
                $(this).css("width", $(this).attr("aria-valuenow") + "%")
            })
        }, {
            triggerOnce: true,
            offset: 'bottom-in-view'

        });
    });

    // filter variables
    const filterItems = document.querySelectorAll("[data-filter-item]");

    const filterFunc = function (selectedValue) {
        for (let i = 0; i < filterItems.length; i++) {
          // Split the data-category attribute into an array of categories using a comma
          const categories = filterItems[i].dataset.category.split(',');
      
          // Trim each category to remove any leading or trailing spaces
          categories.forEach((category, index, array) => {
            array[index] = category.trim();
          });
      
        //   console.log('Categories:', categories);
      
          if (selectedValue === "all") {
            filterItems[i].classList.add("active");
          } else if (categories.includes(selectedValue)) {
            filterItems[i].classList.add("active");
          } else {
            filterItems[i].classList.remove("active");
          }
        }
      }
      

    // add event in all filter button items for large screen
    let lastClickedBtn = filterBtn[0];

    for (let i = 0; i < filterBtn.length; i++) {

    filterBtn[i].addEventListener("click", function () {

        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;

    });

    }

});