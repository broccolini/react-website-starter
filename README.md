# React Website Starter
Default setup for websites built in React with styled components &amp; styled system and x0.

The `demo` branch includes a mix of examples, some built with [styled-components](https://www.styled-components.com) and [styled-system](https://github.com/jxnblk/styled-system/) some apply Primer CSS via [system-classnames](https://github.com/jxnblk/styled-system/tree/master/system-classnames) or [classnames](https://github.com/JedWatson/classnames).

This branch includes [Primer](https://primer.github.io/) CSS via CDN link. Using the [classnames](https://www.npmjs.com/package/classnames) package, Primer class selectors can be added to react components. This repo also includes [system-classnames](https://www.npmjs.com/package/system-classnames) which map Primer CSS utilities to style props. For example `p={3}` maps to `p-3`.

⚠️  Note that we need to do further work to provide more robust mapping of Primer utilities to `system-classnames`. Currently some classnames share the same namespace, for example you can't apply both `text='bold'` as well as `text='blue'` to a component.

Comments with in the components describe how the component is built, what libraries and features it's using, with simple examples of use cases. I'll improve docs and add more examples as I find time, but pull requests are most welcome! Please not this is not meant to be a demo of best practices, just possibilities.

## Getting started

Install all the things with:

`npm install`

_Note: if you switch between between branches you will probably need to run `npm install` again to update the dependencies._

Run app with:

`npm start`

Build app with:

`npm run build`

## Development and publishing

This repo uses [x0 by Compositor](https://github.com/c8r/x0) to give you a zero-config React development environment and static site generator. This lets you get up and running quickly so you can focus on building your components, designing your website, and choosing how you want to handle styles.

By default the build script will create an `index.html` file in the root directory, if you like you can publish this via [GitHub Pages](https://pages.github.com/).

See the x0 docs for other configuration options such rendering JS bundles, changing the build directory, and using with [react-router](https://github.com/ReactTraining/react-router).
