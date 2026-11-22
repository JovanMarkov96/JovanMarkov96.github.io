---
title: "Grover's Algorithm and the Blocks That Count π — Petnica Science Center (Physics 2 Autumn Seminar 2026)"
collection: talks
layout: talk
permalink: /talks/2026-petnica-grover-algorithm
venue: "Petnica Science Center — Physics 2 Autumn Seminar 2026"
date: 2026-11-04
location: "Valjevo, Serbia"
talk_type: "Workshop"
type: "Workshop"
tags: ["quantum computing", "Grover's algorithm", "education"]
---

A 4-hour workshop I gave for the students of the Physics 2 Autumn Seminar at Petnica Science Center on November 4, 2026.

**Lecture notes (v1.1, draft):**
[English (PDF, 83 pp.)](/files/Markov_2026_Grover_Petnica_notes_EN.pdf) · [Serbian / Српски (PDF, 84 pp.)](/files/Markov_2026_Grover_Petnica_notes_SR.pdf)

**The idea.** The workshop covers two problems, both inspired by Grant Sanderson's 3Blue1Brown videos: the colliding blocks that count the digits of π [[1]](#ref-1), and Grover's quantum search algorithm [[2]](#ref-2). Sanderson's original plan was to present the bouncing-blocks problem first and then use it to explain Grover's algorithm. As he wrote in a comment under the Grover video, he eventually decided that explaining Grover through the blocks would be too messy. The Grover video therefore stands on its own: only at the end does it hint at the analogy between the two problems and point to Adam Brown's paper [[3]](#ref-3), which works out the exact connection and was the original inspiration for linking the two videos.

I copied that plan, and I ran into the same problem he did. So the lecture, and the notes, are structured as follows:

1. **Blocks That Count π.** The bouncing-blocks problem and why the number of collisions gives the digits of π.
2. **Foundations of Quantum Mechanics and Quantum Computing.** The basics needed for what follows.
3. **Grover's Algorithm.** This chapter relies heavily on the 3Blue1Brown video [[2]](#ref-2), but I tried to work out the construction myself. The main ideas are probably already in the video. What I tried to add is a step-by-step breakdown of every part of the algorithm, which a lecture has more room for than a YouTube video.
4. **Two Problems, the Same Geometry.** The analogies between the bouncing blocks and Grover's algorithm, following Brown [[3]](#ref-3).

The main flow and ideas come mostly from the 3Blue1Brown videos, plus my own questions: the order of the material follows the way I was trying to understand the problem, and then to explain it.

**A note on the drafts.** The notes were written with heavy use of AI, and I apologize for any slop that remains. The current versions are drafts that still need careful review. If you have suggestions or catch a mistake, please [email me](mailto:jovan.markov@weizmann.ac.il).

**References**

1. <a id="ref-1"></a>G. Sanderson (3Blue1Brown), "The most unexpected answer to a counting puzzle," YouTube, January 2019. [youtube.com/watch?v=HEfHFsfGXjs](https://www.youtube.com/watch?v=HEfHFsfGXjs)
2. <a id="ref-2"></a>G. Sanderson (3Blue1Brown), "But what is quantum computing? (Grover's Algorithm)," YouTube, April 2025. [youtube.com/watch?v=RQWpF2Gb-gU](https://www.youtube.com/watch?v=RQWpF2Gb-gU)
3. <a id="ref-3"></a>A. R. Brown, "Playing Pool with |ψ⟩: from Bouncing Billiards to Quantum Search," *Quantum* **4**, 357 (2020). [doi:10.22331/q-2020-11-02-357](https://doi.org/10.22331/q-2020-11-02-357) · [arXiv:1912.02207](https://arxiv.org/abs/1912.02207)
