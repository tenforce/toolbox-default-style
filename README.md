# Default CSS toolbox library

You can import the main content of this package using:

``` scss
@import "~@tenforce/toolbox-default-style/dist-lib/default/default";
```

## Breaking changes between Package v5 and v6
All style files are now within the folder `dist-lib`.

| v5 | v6 |
|:-----------------:|:------------------:|
| `actionary` renamed | `text-action` |
| `default` renamed | `text-default` |
| `bg-error` renamed | `bg-cadmium-red` |
| `bg-transparent-gray` removed |  |
| `is-highlighted-inline` removed |  |
| `is-highlighted` removed |  |
| `primary` renamed | `text-primary` |
| `theme-grad-shad-1` renamed | `theme-blurred-text` |
| `theme-progress--doneNoGradient` removed |  |

## Breaking changes between Package v4 and v5
Tailwind was removed and moved to the product repo. That way we can avoid generating big CSS files and scan the sources of the product to generate only used css classes.

## Breaking changes between Package v2 and v4
Package v3 is a temporary release with Tailwind v2. But we immediately go to Tailwind v3.

| v2 | v4 |
|:-----------------:|:------------------:|
| `tw-z-1-` | `-tw-z-1` |
| `tw-z-2-` | `-tw-z-2` |
| `tw-w-half-screen` | `tw-w-1/2-screen` |
| `tw-h-half-screen` | `tw-h-1/2-screen` |
| `.tw-list-none > li::before` | instead of `.tw-list-none` use `.unset` class |
| `.tw-flex-*` won't have `min-width` anymore | if needed, add `tw-min-w-0` |
| `newui-*` | removed and moved to a new component, called NewUI CSS |


## Breaking changes between Package v1 and v2
| v1 | v2 |
|:-----------------:|:------------------:|
| `newui-attachhment` | removed and moved to a new component, called toolbox-attachments |
| `flex-center` renamed | `tw-flex-center` |
| `theme-data` removed | `tw-rounded theme-float` |
| `theme-error` removed | `bg-error` and add `text-white` if you want to keep your text white |