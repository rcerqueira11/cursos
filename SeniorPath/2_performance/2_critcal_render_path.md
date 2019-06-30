## Critical render  path

1. html -> css -> js
2. then js makes any change to html or css dom tree
3. the browser combines the dom and css dom into a render tree
4. then figure out the layout
5. then paint all the pixels

DOM -> CSSDOM -> Render Tree -> Layout -> Paint
DOM -> CSSDOM -> (DOM CONTENT LOADED) -> Render Tree -> Layout -> Paint -> LOAD

## Optimize HTML File

1. Load ccs styles as soon as posible (in the <head>)
2. Load scripts js files as late as posible (right before </body>)

- Idealmente es tener el archivo css lo mas pronto posible ya que el archivo js necesita al css y el html para correr.

- If you set js in header block addintional resources to be donwloaded quickly, by placing then at the bottom you can load style, content and media more faster

## Optimize CSS File

- Called render block
- Make them as light wave as posible

1. Only load whatever is needed.
2. Above the fold loading
3. Media Attributes
4. Less Specificity (to improve performance)


### Only load whatever is needed.

1. What is needed

#### Extra

- Iternal CSS - Pro: Allows us to not have to request css files (set the css inside the html header)
  - CONS:  you should defined in all the htmls
- Inline CSS
  ```html
    <h1 style="background-color: yellow"> </h1>
  ```

### Load above the fold

1. make the css we dont need to use to load with js
```html
<script>
    const loadStyleSheet = src => {
        if(document.createStylesheet){
            document.createStylesheet(src)
        } else {
            const stylesheet = document.createElement('link');
            stylesheet.href = src;
            stylesheet.type = 'text/css';
            stylesheet.rel = 'stylesheet';
            document.getElementsByTagName('head')[0].appendChild(stylesheet)
        }
    }

    window.onload = function(){
        console.log('window done!');
        loadStyleSheet('./style3.css');
    }
</script>
```

### Media Attributes

1. Load css FOR the screen

```html
<link rel="stylesheet" href="style2.css" media="only screen and (min-width:500px)">
```

### Less Specificity

1. Needs to calculate more y it is more specific


```css
/* bad */
.header .nav .item .link a.important{
    color: pink;
}
/* good */
a.important{
    color: pink;
}
```



