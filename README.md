# Apollo-SSR-With-NextJS-Example
I have created this example to test out an issue of server side rendering for pages that contain `useLazyQuery()` hook


## Getting Started

First, run the development server:

```bash
npm i
npm run dev
```

Visit the `/use-query` page and refresh, the page will render pre-filled with its data and there are no client side loading experience

The problem is when doing the same thing with `/use-lazy-query`, you will notice that the app will keep loading forever
