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


## Radio Button Colored

```scss
input[type='radio']:after {
        width: 15px;
        height: 15px;
        border-radius: 15px;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: #fff;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid $green_text;
    }
    input[type='radio']:checked:after {
        width: 15px;
        height: 15px;
        border-radius: 15px;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: $green_text;
        content: '';
        display: inline-block;
        visibility: visible; // border: 2px solid white;
    }
    input[type='radio']:focus {
        outline: none;
    }
```

## Scrollable Table

```css
   table {
        border-collapse: collapse;
        width: 100%;
    }
    thead {
        display: block;
        overflow: auto;
    }
    tbody {
        display: inline-block;
        height: 200px; // width: 80%;
        overflow: auto;
    }
    th,td {
        width: 800px;
    }
```


## Eliminar bottom border del thead
```css
th{
    border-bottom: none !important;
}
```

## Datetimepicker options set

```js
  $(document).on('ready',function(){
      date = new Date();
      tomorrow = date.setDate(date.getDate()+1);
      $('#datetimepicker1').datetimepicker({
        minDate: tomorrow ,
        defaultDate: tomorrow,
        format: 'DD/MM/YYYY',
        locale: 'es',
        widgetPositioning: {
            horizontal: 'auto',
            vertical: 'top'},
      });
  });

```

### Center in the middle with flex box

```css
    .profiles {
        .in_middle {
        height: 90vh;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        }
    }
```

### Center data in the middle of a panel

```css
.panel {
    width: 133px;
    height: 133px;
    display: flex;
    .panel-body {
      width: 132px;
      height: 132px;
      cursor: pointer;
      display: flex;
      div {
        flex: 1;
        align-items: center;
        justify-content: center;
        display: flex;
        div {
          flex: 1;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }

```