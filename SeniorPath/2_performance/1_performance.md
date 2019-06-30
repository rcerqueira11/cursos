# Performance part 1

- a web site should load in 2 seconds
- improve what happend in the front end
- improve transfer of the files the network lazy
- improve backend processing


> Network lazy the time takes a file to transfer

# Network transfer

##  Honey i shrunk the files

How do you reduce the size of your sites files?

### Minimize Text
- [Uglifyjs](https://skalman.github.io/UglifyJS-online/) for js, css, html

### Minimize Images

- JPG: use it for images with many colors, photograph, does not allow transparency, this is for complex images with lots of colors, tend to be big in file sizes
- GIF: reduce a lot the color count
- PNG: limit the number of color, smaller than JPG, used in logos etc. can be added transparency
- SVG: can expand, can be edited with css, are incredible small for what they do. Used to be very simplistic visual things with few colors
> New file formats like jpg2000 jpgxr

#### Tips

- if you want transparency: use a PNG
- if you want animations: use a GIF
- if you want colorful images: use a JPG
- if you want a simple icons, logos, and illustrations, use SVGs
- Reduce PNG with TinyPNG
- Reduce JPG with JPEG-optimizer
- Try to choose simple illustrations over highly detailed photographs
- Always lower JPEG image quality (30-60%) (image optane)
- Resize image based on size it will be displayed, if css say 500 resize the image to 500
- Display differen size images for different backgrounds (media queries)
    ```css
    body{
        background: yellow;
    }

    @media screen and (min-width: 900px){
        body{
            background: url('./large-background') no-repear center center fixed;
            background-size: cover;
        }
    }

    @media screen and (max-width: 500px){
        body{
            background: url('./large-background-500') no-repear center center fixed;
            background-size: cover;
        }
    }
    ```
- Use CDNs like imigx
  - faster access of images in their servers
  - upload them and it will give you a url with the image optimezed
- Remove image metadata
  - [verexif](www.verexif.com/en/index.php)

#### Resources

- https://99designs.com/blog/tips/image-file-types/
- https://pageweight.imgix.com/
- https://www.sitepoint.com/gif-png-jpg-which-one-to-use/
- [jpeg-optimizer](jpeg-optimizer.com)  exp 65
- [tinypng](tinypng.com)
- (imgix)[imgix.com]
- [Minifiew JS] (https://www.minifier.org/)
- [Media Queries](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)
- [Media queries cheat sheet](http://www.bsidestudios.com/blog/media-queries-common-sizes-cheat-sheet)


###  The traveling deliveryman

- Lets consider downloading frecuency
- Reducing the number of components a page requieres, reduces the number of http requests it have to make
- browser download 2-6 files at a time also have limits in the total size of the file
- [Max Parallel Requests Per Browser](https://stackoverflow.com/questions/985431/max-parallel-http-connections-in-a-browser)

#### Max Number of default simultaneous persistent connections per server/proxy:
```
Firefox 2:  2
Firefox 3+: 6
Opera 9.26: 4
Opera 12:   6
Safari 3:   4
Safari 5:   6
IE 7:       2
IE 8:       6
IE 10:      8
Chrome:     6
```

> if media query does not work add `<meta name="viewport" content="width=device-width, initial-scale=1">` to the html file

