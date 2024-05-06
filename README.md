## sass-encodeuricomponent

Encode strings within SASS/SCSS like with Javascript's `encodeURIComponent()`. Useful for encoding hex colors to put urls like

```css
url("data:image/svg+xml,%3csvg fill='%23ffffff' ...
```

Use like this:

```scss
@use "sass-encodeuricomponent" as *

$encodedWhite: encodeURIComponent(#ffffff);

@debug $encodedWhite;
// will print %23ffffff
```
