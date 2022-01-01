console.log("Start");

  //smooth scrolling effect
  $(document).ready(function(){
    //when you click link
    $("a").on('click',function(e){
      if(this.hash!==""){
        e.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
          scrollTop:$(hash).offset().top
        },800,function(){
          window.location.hash = hash;
        });
      }
    });
  });