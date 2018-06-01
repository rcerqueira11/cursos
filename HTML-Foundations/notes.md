## Adjust div max-height on browser open and reinitialize

```js

$(document).ready(function() {

   $(window).on('resize', function(){
     if ($(this).height() <= 800){
          $('.content').css('max-height', '500px'); //set max height
     } else{
          $('.content').css('max-height', '');
     }
   }).resize()

})

```