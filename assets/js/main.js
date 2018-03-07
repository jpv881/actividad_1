$('a[href*=\\#]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top},500);
});

//boton scroll to top
$("#btnToTop div").on("click", function(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
});

//scroll event
$(window).on("scroll", function(){
    if($(window).scrollTop() > $(window).height()){
        $("#btnToTop div").css("visibility", "visible");
    }else{
        $("#btnToTop div").css("visibility", "hidden");
    }
});