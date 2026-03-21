---
title: "How I used anki to get cracked"
description: "An information blog on how CS students can use ANKI to enrich their knowledge bank"
date: "2026-03-21"
tags: ["anki", "productivity"]
slug: "anki-gets-you-cracked"
published: true
---

# How I Used Anki to "GET CRACKED"

> I was watching a youtuber [Coding Jesus](https://www.youtube.com/@CodingJesus) grill CS students with CS Trivia, fun Saturday night ofc. I critiqued his methods I believed this was just useless trivia, but then I realized. I'm a web developer who can't explain what a socket is.
---
 
## The Journey PART 1: Trying to "uncook" myself
 
It started with a [Coding Jesus](https://www.youtube.com/@CodingJesus) video.

 Some people might criticize him but I thank him. He inspired me to dive deeper into tech which led for me regaining my love for it. I as no longer just creating CRUD APP GPT WRAPPERS with typescript anymore I was learning interesting things and creating interesting things too! 

While diving on this rabbit hole (which I'm still inside of btw), I got better at different foundational tech skills which I will go deeper into in a different post, but I discovered **TECHNICAL BOOKS**. Technical books are great, you get to learn a lot BUT with a caveat. 

If you don't use it, you lose it.

 
---
 
## What Is Anki? (And Why It Works)
 
Anki is a free, open-source **flashcard app** which comes with an amazing algorithm underneath for **Spaced Repetition** underneath.
 

### Spaced Repetition in a nutshell
 
Here's the main idea: your brain forgets things, the end.

Kidding, The simplest explanation is the longer you go without reviewing something, the more you forget. BUT if you review something *just before* you're about to forget it, you level up that memory, and it takes even longer to fade the next time.

Hence why you know the capital of France but probably don't remember how to do long divisions. 
 
![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/84jaxgv3vp906e2x4sbg.png)

So where does Anki fall into this?

Instead of reviewing everything every day, Anki schedules each card based on how well you knew it last time:
 
- Answered easily? You get 2 weeks off.
- You barely got it? Come again in 24h.
- Completely blanked? Retry in a few minutes.
 
Over time, Anki becomes your "knowledge bank" of things you don't want to forget.

---
 
## How I Actually Use It as a SWE
 

### Step 1: Write cards AFTER you finish the chapter, not during

 
When I finish a chapter or a section, I go back through my notes and write cards for the things I actually want to keep. This has two benefits:
- You've already processed the material once, so you know what actually matters and how it interconnects.
- The card captures the concept in your own words, so it's easier to remember.

So my workflow: READ -> NOTES -> ANKI
 
### Step 2: One idea, one Card
 
**Bad card:**
> Q: What is consistent hashing and how does it work?
 
**Good cards:**
> Q: What problem does consistent hashing solve?
> A: It minimizes key redistribution when nodes are added/removed from a distributed system.
 
> Q: In consistent hashing, what are "virtual nodes" used for?
> A: To create a more even distribution of keys across nodes, preventing hotspots.
 
Break big ideas into small questions.
 
Cloze deletions are also amazing for things like this.
 
### Step 3: Don't card everything (especially syntax)
 
This is a trap I fell into early and I want to save you the pain. Do not put programming language syntax on your Anki decks. I TRIED IT WITH RUST AND IT WAS A WASTE OF TIME
 
My Rule: if I it daily, just code. If I rarely encounter it but need to actually *understand*, I add it to the deck.
 
### Step 4: Don't force daily reviews — find your rhythm
 
When I started I was reviewing every single day and it was really fun until... it wasn't. As your deck grows the time you need to spend to review everything exponentially grows. Sure daily review is feasable with 30 cards, but 200+ eeh I'm good.
 
Personally I do it 3 times per week, sometimes 2 depending on how busy the week has been.

### Step 5: Topics I've Built Decks For
 
At the beginning I wanted to ankify everything but I narrowed it down to a few topics.:
 
- **System Design** — CAP theorem, consistency models, replication strategies, load balancing, caching patterns
- **Operating Systems** — Process vs thread, memory management, paging, scheduling algorithms
- **Networking** — TCP vs UDP, TLS handshake, DNS resolution, HTTP/2 vs HTTP/3
- **Databases (INTERNALS)** — ACID properties, indexing internals, transaction isolation levels
- **Distributed Systems** — Consensus algorithms (Raft, Paxos at a high level), leader election, eventual consistency
 
---
 
## Final Thoughts
 
Let's be real for a second: this isn't going to make you a 10x developer that gets 10 interivews a day at big tech. Your day-to-day job performance probably won't change dramatically because you read SICP and put every new concept in an anki card.
 
But that's not why I did it.
 
It gave me an edge in my ability to memorize things faster and grasp concepts quicker. And to be real? It's just satisfying I really recommend getting the heatmap plugin to see those green boxes lit up everyday.

I'm thinking about sharing my decks at some point for anyone who wants to get started without building from scratch. No promises yet, but if that's something you'd find useful, let me know in the comments. (I still recommend making your own though!)

---
 
*Are you already using Anki? Or thinking about starting? Drop a comment — and let me know if you'd want me to share my decks.*
