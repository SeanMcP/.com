---
title: 'Python Basics: Ternary Operator'
summary:
date: '2019-02-20T22:12:03.284Z'
category: python
series: Python Basics
tags: []
published: true
---

A ternary or conditional operator is like an inline `if` statement. In Python, you can identify them by an `if` and `else` in a single line.

```python
'condition is true' if condition else 'condition is false'
```

Let's look at a simple example of a ternary operator:

```python
is_new_user = True
message = 'Welcome!' if is_new_user else 'Welcome back!'

print(message)
```

Here's how to read that ternary operator:

> If `is_new_user` is true, assign `message` to the string "Welcome!"; otherwise assign it to "Welcome back!".

Written out, a ternary operator looks like an `if` statement. We could express the previous code like this:

```python
is_new_user = True
message = None

if is_new_user == True:
  message = 'Welcome!'
else:
  message = 'Welcome back!'

print(message)
```
