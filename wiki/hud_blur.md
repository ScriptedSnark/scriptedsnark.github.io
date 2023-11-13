# Hud blur fix
Related to [#3156](https://github.com/ValveSoftware/halflife/issues/3156). Thanks to tmp64.

What do you need to fix that problem in engine?

**gl_draw.c:Draw_Frame**
```
float x = (float)ix + 0.5;
float y = (float)iy + 0.5;
```
->
```
float x = (float)ix;
float y = (float)iy;
```

**gl_draw.c:AdjustSubRect**
```
*pfLeft = (wrect.left + 0.5) * 1.0 / pFrame->width;
*pfRight = (wrect.right - 0.5) * 1.0 / pFrame->width;

*pfTop = (wrect.top + 0.5) * 1.0 / pFrame->height;
*pfBottom = (wrect.bottom - 0.5) * 1.0 / pFrame->height;
```
->
```
*pfLeft = (wrect.left) * 1.0 / pFrame->width;
*pfRight = (wrect.right) * 1.0 / pFrame->width;

*pfTop = (wrect.top) * 1.0 / pFrame->height;
*pfBottom = (wrect.bottom) * 1.0 / pFrame->height;
```

**Comparison**
<br/>[![comparison](/images/hud_blur-scale_fix_comparison.png)](/images/hud_blur-scale_fix_comparison.png)