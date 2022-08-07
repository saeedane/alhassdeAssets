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

