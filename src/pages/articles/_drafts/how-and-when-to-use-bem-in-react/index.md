---
title: How (and when) to use BEM in React
summary: Using the tried-and-true CSS system in React applications
date: '2018-12-20T14:29:00.000Z'
category: react
tags: [css, bem]
published: false
---

When working on an enterprise application, every developer should make decisions with scalability in mind. On the frontend, a major pain point for applications as they grow is their styles.

Some of the style-related problems fall into the following categories:

- **Unintended inheritance**: global styles and helper classes that were created with the best intentions are day one can come back to haunt you on day 200
- **Conflicts with dependency APIs**: UI toolkits and component libraries like Bootstrap can eliminate common class names from consideration (e.g. row, button)
- **Class name strain**: creating unique classes to avoid the above problems can take real time and mental energy
- **Structural dependence**: components styled with CSS child selectors may avoid name-related problems but break down with a light refactor

Working on a large and growing application, I have run into all four of this issues (and more). However, with a codified CSS system, developers can avoid these problems going forward. One of those systems is BEM.

## BEM

BEM, or Block-Element-Modifier, is a popular solution that establishes a system for quickly creating unique classes for every tag on the screen.

BEM’s strict naming system aims to help your development process by reducing how long it takes you to write code, how much of that code you’ll have to write, and how much loading your browser will have to do (See BEM Introduction).

To look at BEM in action, we’ll look at the following toast messages:

![Three toast messages](./toast_messages.png)

Your React component might be structured something like this:

```jsx
function Toast(props) {
  return (
    <div>
      <main>
        <header>{props.category}</header>
        <p>{props.message}</p>
      </main>
      <button type="button" onClick={props.dismiss}>
        Dismiss
      </button>
    </div>
  )
}
```

BEM will determine what classes we add and where in order to style our component. Let’s start at the top.

### Blocks

The first level of the BEM system is the block. This is the parent element that will be used as a namespace for the rest of your elements. In React parlance, think of a block as a component.

There are different naming conventions within BEM, but I believe it makes most sense in React to reuse the component’s name (in pascal case) as the block-level class name. We’ll add that to our component.

```jsx{3}
function Toast(props) {
  return (
    <div className="Toast">
      <main>
        <header>{props.category}</header>
        <p>{props.message}</p>
      </main>
      <button type="button" onClick={props.dismiss}>
        Dismiss
      </button>
    </div>
  )
}
```

### Elements

After blocks, the next level in BEM is the element. Elements are children of blocks and are named with the following convention: Block\_\_element with two underscores (\_). Every element’s class name includes a reference to the parent Block, (almost) guaranteeing a unique reference.

We have a few elements in our component, so I will sprinkle in some appropriate class names:

```jsx
function Toast(props) {
  return (
    <div className="Toast">
      <main className="Toast__message">
        <header className="Toast__message-category">{props.category}</header>
        <p className="Toast__message-text">{props.message}</p>
      </main>
      <button className="Toast__button" type="button" onClick={props.dismiss}>
        Dismiss
      </button>
    </div>
  )
}
```

Notice that in the case of Toast\_\_message, I have two elements within an element. Some strict adherents to BEM prefer chaining elements like so: Toast\_\_message\_\_category. This is a matter of preference, and I have opted for the (slightly) simpler Toast\_\_message-category.

Now that we have unique class names for our Block and elements, we can add the bulk of the styles required to match the mockup.

If you remember the original, there were three types of Toast message: success, warning, and error. In order to add those styles, we’ll use the third level of BEM: modifiers.

### Modifiers

In BEM, modifiers can be appended to either blocks or elements to add conditional styles. The naming convention references the element to be modified: Block--modifier or Block\_\_element--modifier with two hyphens (-).

For our toast messages, I’ll modify the block with the category:

```jsx
function Toast(props) {
  return (
    <div className={`Toast Toast--${props.category}`}>
      <main className="Toast__message">
        <header className="Toast__message-category">{props.category}</header>
        <p className="Toast__message-text">{props.message}</p>
      </main>
      <button className="Toast__button" type="button" onClick={props.dismiss}>
        Dismiss
      </button>
    </div>
  )
}
```

With all of our BEM classes in place, we can finish styling our three Toast messages.

## Example

You can view the components and styles above on this CodePen:

Preview not working? View on CodePen.

##Overview
If the above example was too long or too specific, here are the core principles to know when using BEM in React:

- **Components are blocks**: match the top-level tag’s class name with the name of your component (e.g. `UserProfile.jsx`, `className="UserProfile"`)
- **Element names refer to the component**: every class name within a component should start with the name of the component and two underscores (e.g. `className="UserProfile__icon"`)
- **Modifiers are added to blocks, elements**: add conditional styles by appending a modifier class that refers to the element being modified (e.g. `className="UserProfile--disabled"`, `className="UserProfile__icon--round`)

With all this in mind, I tried using BEM exclusively on a growing enterprise application. Here are my observations:

### Strengths

By following BEM’s strict naming system, I was able to avoid all of the problems mentioned at the outset of the article: unintended inheritance, conflicts with dependency APIs, class name strain, and structural dependence.

Once I got into the rhythm of naming blocks, elements, and modifiers, the process of generating unique class names was smooth and relatively painless.

Perhaps the best benefit of the system is readability. I found that I could switch back to a component’s JSX or stylesheet and instantly understand what classes corresponded with which styles and vice versa. What BEM class names lack in brevity, they make up in clarity.

There were some noticeable drawbacks to using BEM in React as well.

### Weaknesses

I just finished saying that the clarity of BEM’s class names was a strength, and that is true — to an extent. At a certain length, those clear classnames became a liability.

Creating long chains of element names can quickly become cumbersome and “clog” up the JSX of a component (e.g. `ProfileEditorContainer__heading__profile-image` is 46 characters!).

Additionally, highly conditional components can become nearly unmanageable. Consider the following scenario:

```jsx
<div
  className={`UserProfile ${
    props.isSelected ? 'UserProfile--selected' : ''
  } ${
    props.isFeatured ? 'UserProfile--featured' : ''
  } ${
    props.rtl ? 'UserProfile--rtl' : ''
  } ${
    props.className ? props.className : ''
  }`}
>
```

To be fair, the above example could be simplified with a library like `classnames`, but it remains that the verbosity of BEM is magnified by every condition added to a component.

When a child component needed to receive special styles and/or positioning from a parent, BEM failed to provide a solution to my liking. Should the parent pass a class like `Parent__child`, or `Child--parent`? It felt unnatural either way with the system breaking in either the parent’s stylesheet or child’s HTML.

## Last word

BEM is a rock-solid system with wide support throughout the industry. It excels by establishing a system that solves some of the biggest scalability problems facing front-end applications. In highly interactive React applications, however, BEM seems to struggle to manage component conditions effectively.

If you’re looking for a class-based solution to your applications style system, I recommend that you give BEM a try. It may not be the best solution in every situation, but it is a tried and true option.

I hope that helps! Send me a tweet with your comments, questions, and/or criticism.

Happy coding!
