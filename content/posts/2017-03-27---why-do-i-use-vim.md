---
title: Why do I use VIM?
date: '2017-03-27T23:46:37.121Z'
template: 'post'
draft: false
slug: '/posts/why-do-i-use-vim/'
category: 'Tools'
description: "When I tell people that I use vim and I'm a Frontend developer I always get some
judgment face and the follow up question: Why aren't using x instead? I'd like to explain."
tags:
  - 'vim'
  - 'development'
  - 'personal'
  - 'tools'
---

###Disclaimers:

- This post is not going to try to convince you to start using vim.
- This my experience using those tools.
- Do not follow what a random person on the internet tells you to do.

I'll try to explain why I personally feel that VIM suits most of the needs I as a developer have and
I don't feel like moving to a new IDE just because of the hype or some extra features (which btw I
can achieve with VIM 😜)

## What the hell is VIM?

VI(M) is an editor that is shipped by default within most of the UNIX like systems, and with you can
easily(???) edit things directly in your terminal. The thing about VIM that everyone gets upset is
that at first, it isn't so intuitive because of its way of dealing with Navigation and Commands.

For navigating and editing the code, Vim has different modes Normal, Insert and Visual. Each one
serves to a given purpose: Normal is for navigating through the code/text. Visual is when you want
to select something to perform some action on this and finally Insert for editing.

Also to save whatever you are doing you have to run a command `:w` and the same goes for quitting
the editor `:q` which is the origin of that joke: Why do you still use VIM? Because I can't quit it.

### First: It runs on the terminal

Being comfortable with your terminal is a must-have skill for any developer.

I'm not saying you have to be an expert but at least be comfortable with it because at the end of
the day is where all those commands to get your app running are going to be executed.

So I got so comfortable with my terminal tools at a level where I rarely use something else. For
instance, if I have to google something real quick I execute:

```bash
> google something
```

It spins up a new tab on my browser with the search. So having my Editor running directly on my
terminal is a plus that I like to keep.

### Second: VIM motions

What has seen can't be unseen.

The VIM motions is the icing on the cake!

> The motion commands can be used after an operator command, to have the command
> operate on the text that was moved over. That is the text between the cursor
> position before and after the motion. Operators are generally used to delete
> or change text. The following operators are available:
>
>     |c|	c	change
>     |d|	d	delete
>     |y|	y	yank into register (does not change the text)
>     |~|	~	swap case (only if 'tildeop' is set)
>     |g~|	g~	swap case
>     |gu|	gu	make lowercase
>     |gU|	gU	make uppercase
>     |!|	!	filter through an external program
>     |=|	=	filter through 'equalprg' or C-indenting if empty
>     |gq|	gq	text formatting
>     |g?|	g?	ROT13 encoding
>     |>|	>	shift right
>     |<|	<	shift left
>     |zf|	zf	define a fold
>     |g@|    g@      call function set with the 'operatorfunc' option
>
> -- Vim's Manpage

Once you get used to the VIM motions, there is no turning back.
It feels so natural that I do it in my mind now:

`ci"` - Change inside quotes: Delete everyting inside a given quote and starts editing.

`ci(` - Change inside parentesis: Delete everyting inside a given parentesis and starts editing.

`dit` - Change inside tag (HTML): Delete everyting inside a given HTML tag.

### Third: Mouse-free development

Mouse-free development is something that once you achieve you can't go back. Seriously, not having
to use a mouse to do stuff is unlimited freedom. Also, it helps with saving your wist some pain.
I've had problems in the past with it where my doctor said I should "limit the time" at the
computer. How could I "limit the time" at my tool of work?

How did I achieve full free mouse environment?

**TMUX + VIM**

Tmux is a terminal multiplexer that combined with VIM makes me so productive! I can have many
session of many projects opened. I use it as a context switching between my personal projects and
any work related projects.

## Do you recommend VIM for me?

Depends on the level you are in your career:

### I'm starting into development now.

For you, I wouldn't recommend it! Why? You have more important things to learn first. VIM is cool,
but it requires a little dedication to get used to it its learning curve is quite high.

I recommend you spend some time learning about the terminal, pipe commands and tools like **git,
grep, ls, cd** it makes your life much more comfortable.

### I have some experience, and I am comfortable with my terminal

If you are comfortable with your Editor/IDE, I don't see a point of moving entirely into VIM but
knowing its basic commands and how to quit it (😅) is a nice to have skill.

Why?

At some point, you're going to have to edit some file in a machine that is not connected to a
windows manager via `ssh` for instance. So using VIM is a way to do it efficiently.

## Conclusion

If you are as nerdy as me and like to have full control of your development environment I do
recommend giving VIM a try I bet you are going to like it and you are going.

Are there better IDE for developent?
I'm sure there are IDEs that are more suitable for a given language but so far VIM has been enough
for my needs. :)
