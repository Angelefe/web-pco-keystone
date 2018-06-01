
$ (document).ready(function(){
if ($(window).width() < 1205){
    $ (".submenu").click(function(){
    $("ul", this).slideToggle();
  })
  $ ("ul").click(function(p){
    p.stopPropagation();


  })
}
});
