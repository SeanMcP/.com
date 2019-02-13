---
title: Understanding Event preventDefault
summary: Trying to grasp something I've used frequently
date: '2019-02-12T12:12:03.284Z'
category: javascript
tags: [event, preventDefault]
series:
published: true
---

If you were to read through the React documentation for Forms, you would come across the following code under ["Controlled Components"](https://reactjs.org/docs/forms.html#controlled-components):

```js{3}
handleSubmit(event) {
  alert('A name was submitted: ' + this.state.value);
  event.preventDefault();
}
```

For some context, example from the documentation takes the value from an `input` tag, stores the value in the component's state, then alerts the user with that value when he or she submits the form.

What I want to take the time to look at today is the third line of that code block: `event.preventDefault()`.

When I first learned React, I was taught to use `event.preventDefault()` liberally. We sprinkled it here, sprinkled it there--pretty much any time a form element was used in the code. I followed directions and didn't ask questions.

But it occurred to me yesterday that **I have no idea what that means**. I understand the words but do not know what action(s) the method executes.
