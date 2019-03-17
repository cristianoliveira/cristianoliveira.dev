---
title: Handling cultural differences for UI in React - This chapter Factory Pattern
date: '2017-09-01T23:46:37.121Z'
template: 'post'
draft: false
slug: '/posts/same-same-but-different/'
category: 'React'
tags:
  - 'react'
  - 'development'
  - 'design patterns'
description: 'Everything is global nowadays; when we build a product with the aim to be in a global market we start to realize how big is the difference between countries, cultures and even perceptions for the same idea. Furthermore, as developers, we notice that our codebase starts to reflect these differences. This is especially for UI, where we try to achieve the most enjoyable experience for all cultures.'
---

Everything is global nowadays; when we build a product with the aim to be in a global market we start to realize how big is the difference between countries, cultures and even perceptions for the same idea. Furthermore, as developers, we notice that our codebase starts to reflect these differences. This is especially for UI, where we try to achieve the most enjoyable experience for all cultures.

Let’s take as an example a simple address form. Having to deal with it was a nightmare even when it was only one country, imagine dealing with all kind of address formats. Not to mention, to (let’s just call it) “unexpected” Product/UX requirements such as:

We noticed people in {country} are used to filling the {field x} first. Could you invert the position for them? it is just a field, right?
I bet you can feel the pain.

We could ignore it and make everything standard but then we hurt the experience for our users. We have to be flexible, it’s part of the job.

When a component/function has this juggling with booleans happening around, for me, it’s a smell. Usually, it’s due to the attempt of making it generic. Why do we need to make something so generic that hurts its interface? Does it need to be generic? Probably it’s the wrong abstraction.

Nazaré is confuse. (fun fact: she’s a Brazilian actress)
Why is it bad? you may ask.

The person reading the code, in order to reason what’s going on, has to keep up with such a big context and when the cognitive load is big it’s hard to follow.

What if I told you that we could make specific UI components by country?

What if we could use it among other components without differentiation? Plus, have all the freedom to place specific behaviors with no affect on other countries whatsoever? Let’s use the power of composition.

[See more on Medium](https://medium.com/@cristian.oliveira/same-same-but-different-6175c0b934d8)
