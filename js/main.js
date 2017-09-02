$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 120) {
            $('nav').addClass('stickytop');
        }
        else {
            $('nav').removeClass('stickytop');
        }
    });
        
        
    //following function should set height of #menu-opaque upon opening menu.
    //function after would make the div adjust height with desktop browser window resize.
    
    var menuIcons = $('.navbar-icon').children(); //targeting the menu open and close icons
    $('.navbar-toplevel').on('click', function() {
        $('.navbar-menu').fadeToggle(150, function(){
            
        }); //end fadeToggle()
        event.stopPropagation();
            
        console.log(menuIcons);
        for (i = 0; i < 2; i++) {
            console.log(menuIcons[i]);//use array to point to .navbar-icon li child 1 or 2
            $(menuIcons[i]).toggle();
        }
        
        //in the preceding for loop, fadeToggle the two array items in menuIcons[i]. Show one icon, hide the other.
        //$('#menu-opaque').height($(window).height() - $('.navbar').height() - 120);
    });
        
    //$(window).on('resize', function(){
      //  if ($(window).width() == 767) { //trying to reset the menu icons. Using 767 as a window-resize threshold and assuring the function doesn't fire billions of times.
        //        $(menuIcons[0]).show();
          //      $(menuIcons[1]).hide();
        //}
    //});
    $(window).on('resize', function() { //I know this is inefficient; need to only execute these things if necessary. Not on literally any resize.
        //$('#menu-opaque').height($(window).height() - $('.navbar').height() - 120);
        if ($(window).width() < 768) {
            $('.navbar-menu').fadeOut(150); //.css('display', 'none');
            event.stopPropagation();
            $(menuIcons[0]).show();
            $(menuIcons[1]).hide();
        }
        else {
           $('.navbar-menu').css('display', 'block');
        }
    });
    //if ($(window).width() < 768) {
    //    $(window).on('resize', function() { //I know this is inefficient; need to only execute these things if necessary. Not on literally any resize.
    //    //$('#menu-opaque').height($(window).height() - $('.navbar').height() - 120);
    //        $('.navbar-menu').fadeOut(150); //.css('display', 'none');
    //        event.stopPropagation();
    //        $(menuIcons[0]).show();
    //        $(menuIcons[1]).hide();
    //    });
    //}
    //else {
    //    if ($(window).width() >= 768) {
    //        $(window).on('resize', function() {
    //            $('.navbar-menu').css('display', 'block');
    //        });
    //    }
    //    else{}
    //}
    
        
    if ($(window).width() < 768) {
        var ratioWidthInitial = $('.slider-img-container').width();
            
        $('.slider-img-container').css('height', ratioWidthInitial + 'px');
    }
    else if (($(window).width() >= 768) && ($(window).width() < 1024)) { // >768-1024px
        var ratioWidthInitial = $('.slider-img-container').width();
        var ratioHeightInitial = ratioWidthInitial * (9/16);
        var integerHeightInitial = parseInt(ratioHeightInitial);
            
        $('.slider-img-container').css('height', integerHeightInitial + 'px');
        
        /*var windowWidthInitial = $(window).width();
        var windowHalfWidth = windowWidthInitial * (1/2);
            
        $('.flex-grid.recent-news').css('width', windowHalfWidth + 'px');*/
    }
    else { // >1024px
        var ratioWidthInitial = $('.slider-img-container').width();
        var ratioHeightInitial = ratioWidthInitial * (1/2);
        var integerHeightInitial = parseInt(ratioHeightInitial);
            
        $('.slider-img-container').css('height', integerHeightInitial + 'px');
    }
        
    $(window).on('resize', function(){
        if (($(window).width() < 768)) {
            var ratioWidth = $('.slider-img-container').width();
               
            $('.slider-img-container').css('height', ratioWidth + 'px');
        }
        else if (($(window).width() >= 768) && ($(window).width() < 1024)) {
            var ratioWidth = $('.slider-img-container').width();
            var ratioHeight = ratioWidth * (9/16);
            var integerHeight = parseInt(ratioHeight);
            //console.log(ratioWidth);
            //console.log(ratioHeight);
            //console.log(integerHeight);
            $('.slider-img-container').css('height', integerHeight + 'px');
            
            /*var windowWidth = $(window).width();
            var windowHalfWidth = windowWidth * (1/2);
                
            $('.flex-grid.recent-news').css('width', windowHalfWidth + 'px');*/
        }
        else { // >1024px
            var ratioWidth = $('.slider-img-container').width();
            var ratioHeight = ratioWidth * (1/2);
            var integerHeight = parseInt(ratioHeight);
                
            $('.slider-img-container').css('height', integerHeight + 'px');
        }
    });
    
    
});//end document.ready