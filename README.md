### Layout Builder

## Concept

Combining `Nextjs`, `react-jsx-parser`, `playroom` and `rebass` this project aims to create a CMS based on `JSX`.

Using higher order components which know which data to fetch and keeping props to a minimum, one can build a
layout on `playroom` coding direclty into a web browser. `playroom` shows how the layout looks across different 
screen widths. 

One the content looks good enough one can copy the `playroom` result into a template, which is used by the `JSXParser`, 
to render, in this case, a `SSR` `react` app.

`rebass` is used as the building block for styling. For data fetching `swr` (`useSWR`) is used, in conjuction with `axios`.

Summary of buzzwords:

- `playroom`
- `nextjs`
- `react-jsx-parser`
- `rebass`
- `axios`
- `swr`
- `react`
