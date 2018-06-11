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

## Vertical align dif

```js
var button_margin = () => {
  mh = $(".medio_pago").height()
  bh = $(".pay-btn").height()
  pd = (mh-bh)/2
  $('.pay-btn').css({
    'margin-top': pd,
    'margin-bottom': pd,

  });
}
```


## Remove btn border
```css
.btn{
  border:0px solid transparent; /* this was 1px earlier */
 }
```