$(document).ready(function(){

onScrollInit( $('.below') );
onScrollInit( $('.advantages'), $('#page5') );

if (document.documentElement.clientWidth > 1000) {
        $('#page1-pic-container').css('height',($('#page1-pic-container').width()-200));
    }
    else{
        $('#page1-pic-container').css('height',($('#page1-pic-container').width()-170));
    }

$(window).resize(function() {
    if (document.documentElement.clientWidth > 1000) {
        $('#page1-pic-container').css('height',($('#page1-pic-container').width()-200));
    }
    else{
        $('#page1-pic-container').css('height',($('#page1-pic-container').width()-170));
    }
});

$(window).load(function() {
    var osElement = $('.banner-text-container'),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
 
    osElement.css({
        '-webkit-animation-delay':  osAnimationDelay,
        '-moz-animation-delay':     osAnimationDelay,
        'animation-delay':          osAnimationDelay
    });
 
    var osTrigger = ( trigger ) ? trigger : osElement;
 
    osTrigger.waypoint(function() {
        osElement.addClass('animated').addClass(osAnimationClass);
    },{
        triggerOnce: true,
        offset: '50%'
    });
});

function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
 
    osElement.css({
        '-webkit-animation-delay':  osAnimationDelay,
        '-moz-animation-delay':     osAnimationDelay,
        'animation-delay':          osAnimationDelay
    });
 
    var osTrigger = ( trigger ) ? trigger : osElement;
 
    osTrigger.waypoint(function() {
        osElement.addClass('animated').addClass(osAnimationClass);
    },{
        triggerOnce: true,
        offset: '50%'
    });
  });
}

$(window).on('scroll', function(){
    var st = $(this).scrollTop();
    if(st >= 80){
        $('.blue-overlay').css('opacity', (st/$('.page1-content').height()) - .1);
    }

    if(st >= $('.page1-content').height()/2){
        $('#whiteHeader').fadeIn();
    }
    else{
        $('#whiteHeader').fadeOut();
    }

    if(st == 0){
        $('.blue-overlay').css('opacity', 0);
    }



    if((st >= $('.page1-content').height()) && (st < $('.page1-content').height() * 5)){
        $('.floating-nav-opt').removeClass('active');
        $('.white-nav-opt').removeClass('active');
        $('.featuresNav').addClass('active');
    }

    else if(st < $('.page1-content').height()){
        $('.floating-nav-opt').removeClass('active');
        $('.white-nav-opt').removeClass('active');
        $('.homeNav').addClass('active');
    }

    else if(st >= $('.page1-content').height() * 5){
        $('.floating-nav-opt').removeClass('active');
        $('.white-nav-opt').removeClass('active');
        $('.contactNav').addClass('active');
    }
});

})