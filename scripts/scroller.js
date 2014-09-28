function initScroll(){    
    var url = window.top.location.hash;
    var toClass = '.'+url.substring(url.indexOf("#")+1);    
    if(toClass != '.')
        scrollTo(toClass);
    
    $("a").click(function() {        
        scrollTo($(this).attr('href').replace('#','.'));       
        return true;
    });
}

function scrollTo(className){    
    $('body, html').animate({                    
        scrollTop: $(className).offset().top
    }, 'slow');
    $(className).addClass('active')
    .siblings().removeClass('active');
}

initScroll();