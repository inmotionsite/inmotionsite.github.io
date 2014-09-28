$( document ).ready(function() {
    
    $('.page .about p').addClass('hide');
    
    $('.media-trigger').click(function(){ triggered('open-l'); });
    $('.foundation-trigger').click(function(){ triggered('open-r'); });
    
    $('.back-l').click(function(){ untriggered('open-l'); });    
    $('.back-r').click(function(){ untriggered('open-r'); }); 
    
    function triggered(className) {
        $('body, html').animate({                    
            scrollTop: $('body').offset().top
        }, 'slow');
        $('.split-wrap').addClass(className);
        setTimeout(function(){
            $('.page .about p').removeClass('hide')
        },1000);
    }
    function untriggered(className) {        
        $('.page .about p').addClass('hide');
        setTimeout(function(){            
            $('.split-wrap').removeClass(className);
        },1000);
    }
});