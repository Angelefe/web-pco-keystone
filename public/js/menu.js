
$ (document).ready(function(){
if ($(window).width() < 1205){
    $ (".submenu").click(function(){
    $(this).children("ul").slideToggle();

  })
  $ ("ul").click(function(p){
    p.stopPropagation();


  })
}
});
