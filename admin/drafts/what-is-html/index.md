---
title: What is HTML?
summary: HTML is the backbone of the web that makes up (nearly) every webpage
date: '2019-01-28T22:12:03.284Z'
category: development
series: Web Development 101
tags: [web, dev, html]
published: false
---

Want to see something cool? Right click on this page and click "View Page Source". You should see a new tab open with some colorful code in it. That is HTML, and it is the backbone of the web.

We're borrowing a term from Biology, and I think it's really helpful. Think of vertebrates. Every vertebrate has a skeletal system that gives it a definite shape and function. HTML serves the same purpose for the web: it provides the basic structure and function of a website.

> Reading check: What biological system is HTML like?

## HTML

HTML is an acronym for "**h**yper**t**ext **m**arkup **l**anguage". HTML is used to structure and display text on a computer screen. All that information is organized into "pages" that a user, like you, can navigate to.

### Elements

An HTML page is made up of individual elements with a specific structure and purpose. Each element has a corresponding tag that you will use when writing HTML.

Most elements use opening and closing tags in HTML. You can write an opening tag by typing a left angle bracket, `<`, then the name of the tag, and finally a right angle bracket, `>`.

```html
Opening tag: < + tag + > = <tag></tag>
```

A closing tag will match the corresponding opening tag, but with a forward slash, `/` before the name of the tag.

```html
Closing tag:
< + / + tag + > = </tag>
```

They'll look something like this:

```html
<tag> My first HTML code! </tag>
```

There are [tons of HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element), but to begin you just need to learn a few. We'll start with the humble paragraph element or `p`.

#### p

The paragraph element is used for marking up a block of text. You would use the paragraph element whenever you want to separate one paragraph of text from another.
