/* video slider */ 
var swiper = new Swiper(".videoSlider", {
    slidesPerView: 4,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
	    breakpoints: { 320: { slidesPerView: 1, spaceBetween: 10 }, 575: { slidesPerView: 1, spaceBetween: 10 }, 768: { slidesPerView: 2 }, 991: { slidesPerView: 3 }, 1200: { slidesPerView: 4 } },

  });
  
  var swiper = new Swiper(".newsTopSlider", {
    autoplay:{delay:5000},
    spaceBetween: 30,
  
    navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},
  
  });



var swiper = new Swiper(".newspaper-slider", {
    slidesPerView: 4,
       // pagination
    pagination: '.swiper-pagination',
    paginationClickable: true,
    
    // navigation arrows
    nextButton: '#js-prev1',
    prevButton: '#js-next1',
        breakpoints: { 320: { slidesPerView: 1, spaceBetween: 10 }, 575: { slidesPerView: 1, spaceBetween: 10 }, 768: { slidesPerView: 1 }, 991: { slidesPerView: 3 }, 1200: { slidesPerView: 1 } },


  });


/* menu side right */
$('.menu_bar').on('click',function(){
	$('.sideMenuContainer .sideMenuBox').toggleClass("active");
		
});

$('.close_menu').on('click',function(){
	$('.sideMenuContainer .sideMenuBox').removeClass("active");
		
});



/* show search on menu */
  
$('.search_menu').on('click',function(){
	$('.header-bottom .header_search .desktop_search').toggleClass("d-block");
  //document.getElementById("search").focus();
		
});


$('.header__search').on('click',function(){
	$('.sideMenuContainer .sideMenuBox').toggleClass("active");
	$('.sideMenuContainer .sideMenuBox #searchMobile').focus();

	
});
 

/* init dark mode */
$(document).ready(function () {
//Create the cookie object
 var cookieStorage = {
        setCookie: function setCookie(key, value, time, path) {
            var expires = new Date();
            expires.setTime(expires.getTime() + time);
            var pathValue = '';
            if (typeof path !== 'undefined') {
                pathValue = 'path=' + path + ';';
            }
            document.cookie = key + '=' + value + ';' + pathValue + 'expires=' + expires.toUTCString();
        },
        getCookie: function getCookie(key) {
            var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
            return keyValue ? keyValue[2] : null;
        },
        removeCookie: function removeCookie(key) {
            document.cookie = key + '=; Max-Age=0; path=/';
        }
    };
    //Click on dark mode icon. Add dark mode classes and wrappers. Store user preference through sessions
    $('.colorChange').click(function() {
        //Show either moon or sun
        $(this).toggleClass("active");

        if($(this).hasClass('active')){        //If dark mode is selected
            $('.colorChange').addClass('active');
            $('body').addClass("darkV");

            //Add dark mode class to the body
            cookieStorage.setCookie('__darkmode', 'DARK', 2628000000, '/');
			switchTweetTheme('light','dark');

        } else {
            $('body').removeClass('darkV');
            $('.colorChange').removeClass('active');

             setTimeout(function() {
                cookieStorage.removeCookie('__darkmode');
            }, 100);
			switchTweetTheme('dark','light');
			
        
		}
    }); 
    
    
    
//Check Storage. Display user preference 
    if (cookieStorage.getCookie('__darkmode')) {
        $('body').addClass('darkV');
        $('.colorChange').addClass('active');
    }    
    
    
    
var storedTheme = cookieStorage.getCookie('__darkmode')  ? "dark" : "light";



if(window.matchMedia("(max-width: 767px)").matches){
    // The viewport is less than 768 pixels wide
    setTimeout(function() {
        var targetTheme = storedTheme == "dark" ? "light" : "dark";
        switchTweetTheme(targetTheme,storedTheme);
            
        }, 1000);
}else{
    setTimeout(function() {
        var targetTheme = storedTheme == "dark" ? "light" : "dark";
        switchTweetTheme(targetTheme,storedTheme);
            
        }, 1000);    
}


if(storedTheme == "dark"){
    $('body').addClass('darkV');

}

function switchTweetTheme(currentTheme,targetTheme) {
    var tweets = document.querySelectorAll('[data-tweet-id]');
    tweets.forEach(function(tweet) {
        var src = tweet.getAttribute("src");
        tweet.setAttribute("src", src.replace("theme=" + currentTheme, "theme=" + targetTheme));
    });
}
});

 
/* header scroll */
  $(window).scroll(function () {

                 if($(window).scrollTop() >= 5){

                    $(".header_area").addClass("sticky");
                    $(".sticky .header__logo img").attr('src','https://cdn.alhassadelyoumi.dz/wp-content/uploads/2021/06/El-Hassad-el-yawmi-Logotype-300x233.png');
    
                    $(".sticky .header__logo img").attr('class','mb-3 mt-2');
                    $(".sticky .header__social .nav  .nav-item .nav-link .sticky-icon").removeClass('d-none');
                    $(".sticky .header__social .nav  .nav-item .nav-link .simple-icon").addClass('d-none');
                    $(" .sticky .header__left .sticky-icon").removeClass('d-none');
                    $(" .sticky .header__left .simple-icon").addClass('d-none');

                    $(" .sticky .header__search .sticky-icon").removeClass('d-none');
                    $(" .sticky .header__search .simple-icon").addClass('d-none');

                    $(" .sticky .header__layout .sticky-icon").removeClass('d-none');
                    $(" .sticky .header__layout .simple-icon").addClass('d-none');
 
                 }else{
                    $(".header_area").removeClass("sticky");
                    $(".header__logo img").attr('src','https://www.awras.com/wp-content/themes/NewsAwress/assets/img/Logo.svg');

                    $(".header__logo img").attr('class','mb-0');
                    $(".header__social .nav  .nav-item .nav-link .sticky-icon").addClass('d-none');
                    $(".header__social .nav  .nav-item .nav-link .simple-icon").removeClass('d-none');
                    $(".header__left .sticky-icon").addClass('d-none');
                    $(".header__left .simple-icon").removeClass('d-none');
                    $(".header__search .sticky-icon").addClass('d-none');
                    $(".header__search .simple-icon").removeClass('d-none');
                    $(".header__layout .sticky-icon").addClass('d-none');
                    $(".header__layout .simple-icon").removeClass('d-none');

                 }


    });