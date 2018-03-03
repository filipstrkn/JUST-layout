
![alt text](/public/just-layout.png)

<p align="center">
    A tiny css library for building layouts without hassle.
</p>
<p align="center">
    <a hfre="https://filipstrkn.github.io/JUST-layout/">Get visual</a>
</p>

### Content
- [Quick Install](#quick-install)
- [Documentation](#documentation)
- [Browser Support](#browser-support)


# Quick Install

feel free to install JUST layout via Bower
```
bower install just-layout
```

# Documentation
JUST layout takes advantage of css flex layouts. 

```css
.columns
/* 
|
|   is a Master class that defines flexible layout. It owns specific modifiers
|   which helps to add features such are gaps, positioning or responsivness.
|
*/




.are-centered
/* 
|
|   .columns [modifier]   
|   centers '.column' horizontaly 
|
|*/




.are-vertical
/* 
|
|   .columns [modifier]   
|   puts '.column' into columns 
|
*/




.are-horizontal
/* 
|
|   .columns [modifier]   
|   puts '.column' into rows
|
*/




.with-gaps--small,
.with-gaps--medium,
.with-gaps--large
/* 
|
|   .columns [modifier]   
|   gives '.column' gaps on all sides
|
*/




.with-x-gaps--small,
.with-x-gaps--medium,
.with-x-gaps--large
/* 
|
|   .columns [modifier]   
|   gives '.column' horizontal gaps
|
*/




.with-y-gaps--small,
.with-y-gaps--medium,
.with-y-gaps--large
/* 
|
|   .columns [modifier]   
|   gives '.column' vertical gaps
|
*/




.on-mobile--small,
.on-mobile--medium,
.on-mobile--large
/* 
|
|   .columns [modifier]   
|   adds breaking points. All '.column' align as vertical columns.
|
*/

```

```css

.column
/* 
|
|    defines a column
|    .column can contain Master class and behave as a container of columns
|
 */



.is-one-sixth
/* 
|
|   .column [modifier]
|   sets a width as one sixth of its parent's width
|
 */



.is-one-third
/* 
|
|    .column [modifier]
|    sets a width as one sixth of its parent's width
|
 */



 .is-one-quarter
/* 
|
|    .column [modifier]
|    sets a width as one sixth of its parent's width
|
 */




 .is-half
/* 
|
|    .column [modifier]
|    sets a width as one sixth of its parent's width
|
 */




 .is-two-thirds
/* 
|
|    .column [modifier]
|    sets a width as one sixth of its parent's width
|
 */




.is-full
/* 
|
|    .column [modifier]
|    sets a width as one sixth of its parent's width
| 
 */


```