$(document).ready(function(){
    
    /* Navbar dropdown menu */
    
    $("#dropdown").click(function(){
        $(this).next("div").toggle(300);
	    /*
        $("#do1").hide().fadeIn(1500);
        $("#do2").hide().fadeIn(1600);
        $("#do3").hide().fadeIn(1700);
        $("#do4").hide().fadeIn(1800);
        $("#do8").hide().fadeIn(1900);
        $("#do5").hide().fadeIn(2000);
        $("#do6").hide().fadeIn(2100);
        $("#do7").hide().fadeIn(2200);
	     */
    });
    
    /* Home page expand service descriptions */
    
    $("#more-info-1").click(function(){
        $(".info-1").slideToggle(300);
    });
    $("#more-info-2").click(function(){	
        $(".info-2").slideToggle(300);
    });
    $("#more-info-3").click(function(){
        $(".info-3").slideToggle(300);
    });
    
    /* FAQs expand answers */
    
    $("#question1").click(function(){
        $(this).next("div").slideToggle(300);
		$(this).siblings().next("div").slideUp();
		return false;
    });
    
    $("#question2").click(function(){
        $(this).next("div").slideToggle(300);
		$(this).siblings().next("div").slideUp();
		return false;
    });
    
    $("#question3").click(function(){
        $(this).next("div").slideToggle(300);
		$(this).siblings().next("div").slideUp();
		return false;
    });
    
    $("#question4").click(function(){
        $(this).next("div").slideToggle(300);
		$(this).siblings().next("div").slideUp();
		return false;
    });
    
    /* Scroll to top button */
    
    $("#scrollTop").on('click', function(){
        $("html, body").animate({scrollTop: 0}, 500);
    });
    
});

/* Home page fade + when open */

function changeClass1(){
    var element = document.getElementById("plus1");
    element.classList.toggle("fa-minus");
}
function changeClass2(){
    var element = document.getElementById("plus2");
    element.classList.toggle("fa-minus");
}
function changeClass3(){
    var element = document.getElementById("plus3");
    element.classList.toggle("fa-minus");
}

/* Scroll to top button visibility */

var html, body, scrollTopBtn;

window.onload=function(){
    html=document.documentElement;
    body=document.body;
    scrollTopBtn=document.getElementById("scrollTop");
}

window.onscroll=scrollToTopAppear;

function scrollToTopAppear(){
    var windowInnerHeight=window.innerHeight;
    if (body.scrollTop > windowInnerHeight / 2 || html.scrollTop > windowInnerHeight / 2){
        scrollTopBtn.classList.add("visible");
    } else {
        scrollTopBtn.classList.remove("visible");
    }
}
/*  */
$(document).ready(function(){   
    setTimeout(function () {
        $("#cookieConsent").fadeIn(200);
     }, 4000);
    $("#closeCookieConsent, .cookieConsentOK").click(function() {
        $("#cookieConsent").fadeOut(200);
    }); 
}); 
