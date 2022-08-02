jQuery(document).ready(function(){
var page = 2;
jQuery('.spinner-border').hide();
jQuery('#alhassade_loadmore').on('click',function(e){
    e.preventDefault();
var postType =  jQuery(this).attr('data-post-type');


    var data = {'action':'alhassade_archives_load_more','page':page,'postType':postType};
      jQuery('.loading-archive').show();
      jQuery('#alhassade_loadmore').hide();
      

jQuery.post(frontendajax.ajaxurl,data, function(response) {
      if(jQuery.trim(response) != '' ) {
           jQuery('.article__list,.archiveContList ').append(response);
          jQuery('#alhassade_loadmore').show();
          jQuery('.loading-archive').hide();
          page++;
       }else{
            jQuery('#alhassade_loadmore').addClass("disabled");
            jQuery('#alhassade_loadmore').text('لا يوجد مزيد من أخبار');
            jQuery('#alhassade_loadmore').show();
            jQuery('.loading-archive').hide();

       }
    });
    
});

});



/**
 * AJAX SEARCH
 */
jQuery(document).ready(function(){


	jQuery('.mobile_search   #search').on('keyup',function(e){
        var value = jQuery(this).val();

	    
	var data = {'action':'alhassade_live_search','query':value};


    jQuery.post(frontendajax.ajaxurl,data, function(response) {
      if(jQuery.trim(response) != '' ) {
           jQuery('.article__list ').html(response);
       }else{
          jQuery('.article__list ').html('');
   
       }
           
           
       });
	   
	
		
	});
});



/**
 * AJAX COMMENT LIKED
 */
 jQuery(document).on("click", "#lineComent", function (t) {
        t.preventDefault();
        var e = jQuery(this).attr("data-nonce");
        jQuery(this).children().attr("colors", "primary:#ff0000,secondary:#ff0000"),
            jQuery(".dislike").children().attr("colors", "primary:#000000,secondary:#000000"),
           jQuery.ajax({
                type: "POST",
                url: frontendajax.ajaxurl,
                dataType: "JSON",
                data: "action=comment_like_ite&comment_id=" + jQuery(this).attr("data-comment-id") + "&nonce=" + e,
                success: function (response) {
                    alert("تم اضافة اعجاب")   ;
                    //jQuery(this).innerHTML = response;
                    jQuery(".dislike").children().innerHTML = response;


                },
            });
    });
   jQuery(document).on("click", "#dislikeComent", function (t) {
        t.preventDefault();
        var e = jQuery(this).attr("data-nonce");
        jQuery(this).children().attr("colors", "primary:#ff0000,secondary:#ff0000"),
            jQuery(".liked").children().attr("colors", "primary:#000000,secondary:#000000"),
           jQuery.ajax({
                type: "POST",
                url: frontendajax.ajaxurl,
                dataType: "JSON",
                data: "action=comment_dislike_ite&comment_id=" + jQuery(this).attr("data-comment-id") + "&nonce=" + e,
                success: function (response) {
                    alert("تم اضافة عدم اعجاب ");
                },
            });
    });
    
    
/**
 * share links 
 */    
jQuery(document).ready(function(){
        var t = function (t, e, a, n) {
            var r = a || 640,
                o = n || 320,
                c = window.screenLeft || window.screenX,
                i = window.screenTop || window.screenY,
                s = c + (window.innerWidth || document.documentElement.clientWidth) / 2 - r / 2,
                u = i + (window.innerHeight || document.documentElement.clientHeight) / 2 - o / 2;
            return window.open(t, e, "scrollbars=yes, width=" + r + ", height=" + o + ", top=" + u + ", left=" + s).focus(), !0;
        };
        jQuery(".share_twitter").on("click", function (e) {
            e.preventDefault();
            var a = this.getAttribute("data-url"),
                n = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(document.title) + "&via=alhassadelyoumi&url=" + encodeURIComponent(a);
            t(n, "Partager sur Twitter");
        });
           jQuery(".share_facebook").on("click", function (e) {
                e.preventDefault();
                var a = this.getAttribute("data-url"),
                    n = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(a);
                t(n, "Partager sur facebook");
            });
    });   
    
