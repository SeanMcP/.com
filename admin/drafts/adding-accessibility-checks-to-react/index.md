---
title: Adding accessibility checks to your React app
summary:
date: '2019-03-04T22:12:03.284Z'
category: react
series:
tags: [react, accessibility, a11y]
published: false
---

Let's face it: making accessible applications can be hard. Fortunately, there are some great resources available that help you check to make sure . We'll look at three great options that will help you make your React applications more accessible.

But first, why should anyone care about accessibility?

## Accessibility is mission critical

Whether you are working for a startup, non-profit, or a Fortune 500 company, accessibility is a critical component of your product. Not only it is a legal requirement in many countries, but creating accessible applications maximizes the potential users for your product. And it often has a positive impact on all users.

As React developers, we have a responsibility to avoid retreating into the virtual DOM and ensure that the components we craft are going to work for everyone. Fortunately for us, React has [tons of accessibility features](https://reactjs.org/docs/accessibility.html) built into the platform to make our jobs easier.

I'm going to suggest and demonstrate three additional tools than can help React developers create awesome and accessible applications for all.

## Setup

To demonstrate these features, I'm going to bootstrap a new project with React's [Create React App](https://facebook.github.io/create-react-app/). It's a great way to spin up a new project and works nicely with all of the accessibility checks we're going to implement.

If you're looking to add these checks to a current project, the only dependency is ESLint, which we'll look at later in this article. Now, let's jump in!

## React-a11y

_**Full disclosure**: I have made some insignificant contributions to the react-a11y project._

Create React App already has wonderfully helpful console messages, and react-a11y is an plugin utility that adds specific accessibility checking to your app.

```
yarn add --dev react-a11y
```

React-a11y's `a11y` function takes three parameters: React, ReactDOM, and a rules object. We'll add it to our `index.js` file like so:

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

if (process.env.NODE_ENV === 'development') {
  const a11y = require('react-a11y').default
  a11y(React, ReactDOM, {
    rules: {
      'aria-role': 'error'
    }
  })
}

ReactDOM.render(<App />, document.getElementById('root'))
```

Since `a11y` modifies React's render function, there may be a performance hit in production. [As per the docs](https://github.com/reactjs/react-a11y#usage), we'll make a check to see we're in a development environment before requiring and calling it.

The rules object uses [ESLint notation](https://eslint.org/docs/user-guide/configuring#configuring-rules) to map each rule to a warning level. By default no rules are passed, so you will need to [choose which you want to add](https://github.com/reactjs/react-a11y/tree/master/docs/rules) to your project.

With the above in place, if I add a invalid `role` attribute to any of my DOM elements, I receive the following console warning:

```
Uncaught (in promise) Error: [react-a11y]: App - Elements with ARIA roles must use a valid, non-abstract ARIA role. See 'https://www.w3.org/TR/wai-aria/roles' for more info. See 'https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#AX_ARIA_01' for more info. Element:
    <div class="App" role="app"></div>
```

My favorite part of using react-a11y are the links they provide. Sometimes finding the recommended fix to an accessibility problem is harder than finding an issue in the first place!

Console warnings are great, but let's add another tool to help catch mistakes before they make it to the browser.

## React-axe

While react-a11y provides opportunities for customization, you might want a more out-of-the-box solution for DOM checking. That's where react-axe comes in!

React-axe is developed by Deque, the makers of the fantastic accessibility tools like the [Axe browser extension](https://www.deque.com/axe/) (which I highly recommend). Install it in the usual way:

```
yarn add --dev react-axe
```

Once installed, react-axe is implemented in almost exactly the same way as react-a11y: we check for a development environment before requiring and calling a function with a few parameters. In this case, we'll import the `axe` function from react-axe.

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

ReactDOM.render(<App />, document.getElementById('root'))
```

Instead of a rules object, the final parameter for `axe` is "a timing delay in milliseconds that will be observed between each component change and the time the analysis starts" ([source](https://github.com/dequelabs/react-axe/#initialize-the-module)). We'll set it to 1000ms, or one second.

Now if I give an element an invalid role, I'm met with the following console message:

```
▸ critical: ARIA roles used must conform to valid values
https://dequeuniversity.com/rules/axe/3.1/aria-roles?application=axeAPI
```

Expanding the message provides a reference to the original document and a file and line reference to fix the issue.

If I had to choose between the two, I think I would lean towards react-axe over react-a11y. The console errors are helpful without being overwhelming, all while providing all the information and resources you need to fix the issue.

That being said, react-a11y provides more rule customization, including the ability to create a new rule.

## Jsx-a11y

Jsx-a11y is an ESLint plugin that looks over your code for some key accessibility considerations. If you don't have ESLint added to your project yet, follow their [get started guide](https://eslint.org/docs/user-guide/getting-started).

If you bootstrapped your React app with `create-react-app`, it already has ESLint included. Just add the plugin library:

```
yarn add --dev eslint-plugin-jsx-a11y
```

Then modify the ESLint configs in your `package.json` to match the following:

```json
{
  "eslintConfig": {
    "plugins": ["jsx-a11y"],
    "extends": ["react-app", "plugin:jsx-a11y/recommended"]
  }
}
```

Now if we make a change that reduces our app's accessibility, like removing the `alt` attribute for an `<img>`, we're met with the following compilation warning:

```
./src/components/App/App.js
    Line 10:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
```

If you want more customization over which rules jsx-a11y uses, refer to [the official documentation](https://github.com/evcohen/eslint-plugin-jsx-a11y#eslint-plugin-jsx-a11y).

## A11y-react-starter

I created [`a11y-react-starter`](https://github.com/seanmcp/a11y-react-starter), a lightly-configured create-react-app with all of the above accessibility checking baked in. Check it out for a reference or use it as a starting point for your next app.

## Conclusion

By enabling these accessibility features, you're adding the wisdom and knowledge of countless developers who have gone before you. With their help, and a little bit of learning, anyone can create accessible applications that work for all users.

I hope that helps! Let me know if you have any questions, comments, or suggestions on Twitter: [@\_seanmcp](https://twitter.com/_seanmcp).

Happy coding!
