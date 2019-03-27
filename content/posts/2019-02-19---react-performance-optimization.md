---
title: React to the need for speed
date: '2019-03-01T23:46:37.121Z'
template: 'post'
draft: true
slug: '/posts/react-to-the-need-for-speed/'
category: 'Javascript'
description: 'Some time ago I and my friends were talking about how unit testings made our lives as developers much more simple and enjoyable.
Then one of them said he used to not do any kind of automated test and he was happy with that.
You know what? There is no problem with that, if it works for him that’s great.'
tags:
  - 'performance'
  - 'react'
  - 'development'
  - 'advanced'
---

This is first of a series of articles I'm planning to do in order to give some
tips and tricks to debbug and fix perfomance issues in your app. Some of these
tips are more related to Reactjs and others can be applied ot any Javascript/Web
app.

## The story behind this post

I was working with a colleague in a feature, and we both were testing the
website together to ensure we had introduced no bugs since this was a complex
feature and required to change many places in the UI.

At this company, the website also is served through a Webview for the company's
app, and she was testing it in different smartphones. I sat right beside her and
I noticed she was impatient when testing with one specific smartphone.

I've asked what was happening and she said that the smartphone was soo slow that
she couldn't finish the signup and she hated this smartphone.

So I asked which smartphone it was and how long has been since she experienced
this for the first time. She said the model and that it's been like this since
she joined the company.

I've looked up real quick on our analitcs and found out it was simple the most
used smartphone in Brazil, our biggest market.

That meant we had to do something about it. The situation where worst than it
should be.

## Defining performance

Performance is a broad topic and it can be viewed from different perspectives:
Loading time, User Interaction and Smooth Animation. There are many variables
that impact your app and the problems with some of those variables are that you
don't have control over it, especially on the web. That makes tackling
performance tricky because you don't know which browser, CPU nor network your
app is going to run on and usually you are blind due to the environment you
develop your apps. Usually, we work with top-notch machines and high-speed
internet.

### Performance in coputing

Accordingly with wikipedia:

> In computing, computer performance is the amount of useful work accomplished
> by a computer system. Outside of specific contexts, computer performance is
> estimated in terms of accuracy, efficiency and speed of executing computer
> program instructions.

So the

## Is performance a feature?

Convincing the company/team that investing time in performance optmization is
not easy because not all projects have the need for it. We as developers try to
provide the most enjoyable and fast product but we have to ask our selves: Are
we optimizing to the right public?

For instance, if your market is focused in Europe/USA you probably don't have to
care much, at least in the beginning, about loading time since the average
internet connection is pretty decent accordingly with (Speedtest
website)[https://www.speedtest.net/global-index].

![Internet in the world](/media/internet-world.png)

The performance metrics and actions should be aligned with the business that
makes the companies effort to benefit more people this essential especially
startups where the resources usually are scarce.

---

Code splitting consequences:

- Place holders and spinners

---

Concurrent React

---

Diversity is good for bringing different experiences to your company.

---

React Fiber

- In a UI, it's not necessary for every update to be applied immediately in
  fact, doing so can be wasteful, causing frames to drop and degrading the user
  experience.

- A push-based approach requires the app (you, the programmer) to decide how to
  schedule work. A pull-based approach allows the framework (React) to be smart
  and make those decisions for you.

Talk about suspense and athe future of react

Explain how Fiber works using the new Browsers APIs for scheduling work with
more or less prioritazation.

---

Optimizing using Context API
Optimizing using Redux

Show whow architecture in small components leads to a better performance by
avoiding unecessary renders.

Explaing how instances works and makes such a difference if you avoid to create
new instances everytime only one property of your object changes.

Is there a way to show this implementing some sort of id generator for
Javascript?

Explain that heavy computation inside the render props is bad.

When react changes?

> By default, a component will re-render if:
>
> One of the props the component receives have changed
> A component state variable has been updated
> It listens to a context variable that changes
> The update is forced by the developer using this.forceUpdate (class syntax)
> Each time the parent that calls the component is being rendered

Relation between Parent -> Child re-render. When does this happen?

Explain why some architecural decisions might impact in the performance.

---

Reading flame graphs
Debugging Performance Issues in Production

- This red bar indicator shows that there was some significant ‘CPU burn’ (long tasks)

What is User Timing API?
