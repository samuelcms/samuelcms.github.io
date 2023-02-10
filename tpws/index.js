$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('body,html').animate({
      scrollTop: $(hash).offset().top
      }, 1200, function(){
      window.location.hash = hash;
     });
     } 
    });
});

var width = $(window).width(); 

window.onscroll = function(){
if ((width >= 900)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#middle").css("background-size","150% auto");
    }else{
        $("#middle").css("background-size","100% auto");        
    }
}
};

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1450);

window.smoothScroll = function(target)
{
  var scrollContainer = target;
  
  //find scroll container
  do 
  { 
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
  
  } while (scrollContainer.scrollTop == 0);
  
  var targetY = 0;
  
  //find the top of target relatively to the container
  do 
  { 
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
  
  } while (target = target.offsetParent);
  
  scroll = function(c, a, b, i) 
  {
      i++; if (i > 30) return;
      c.scrollTop = a + (b - a) / 30 * i;
      setTimeout(function(){ scroll(c, a, b, i); }, 20);
  }

  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}