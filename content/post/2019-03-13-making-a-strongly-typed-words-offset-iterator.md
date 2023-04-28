---
date: 2019-03-13
draft: false
# lastmod: 2022-10-22T00:00:00-00:00
publishdate: 2019-03-13
tags:
- snippets
title: Making a Words Offset Iterator with Iterators & Generators in Typescript
toc: false
---

## Background

In my everyday job, it is very rare where I can find a use-case for generators. Recently, I ran into a LeetCode problem where I needed to iterate through every word in a line and get its starting index. I thought this might actually be a good use-case for generators and decided to explore how to do it.

I’ll demonstrate an implementation for simple words iterator using iterators and generators with Typescript.

For a quick refresher, I found the following to be excellent references to learn more about iterators and generators:


- [Iterators gonna iterate](https://jakearchibald.com/2014/iterators-gonna-iterate/) by Jake Archibald: Jakes explains it in the simplest way possible.
- [Iterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) by MDN

## Problem

Given a string, return an iterator that yields the starting offset of every word.

```javascript
const wordsIter = new WordsIterator("Boy you got my heartbeat runnin' away")
for (const offset of wordsIter) {
  console.log(`offset: ${offset}`)
}
// output:
// offset: 0
// offset: 4
// offset: 8
// offset: 12
// offset: 15
// offset: 25
// offset: 33
```

## Motivation

I wanted to learn more about the following:


1. Use `WordsIterator` for input validation in slatejs rich text editor
2. Learn more on generators in an actual use-case
3. Learn more about type-systems with typescript
4. Implementation

## Implementation

```javascript
export class WordsIterator implements Iterable<number> {
  constructor(private doc: string) {}

  *[Symbol.iterator](): Iterator<number> {
    let offset = 0;
    while (offset < this.doc.length) {
      if (isWhiteSpace(this.doc[offset])) {
        offset += 1;
        continue;
      }
      yield offset;
      offset += wordLength(this.doc, offset) + 1;
    }
  }
}

function isWhiteSpace(str: string): boolean {
  return /\s/.test(str);
}

function wordLength(doc: string, index: number): number {
  let start = index;
  while (index < doc.length && doc[index].match(/\S/)) {
    index++
  }
  return index - start;
}
```
