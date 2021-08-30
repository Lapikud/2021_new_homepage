# LAPIKUD2021

## Why?

Modern page for modern lap.

## What?

New lap website written with VueJS.
Generally the latest progress can be seen [here](https://lapikud.mytentacles.me/#/)

## Design

Based on [current page](https://www.lapikud.ee/) with improvements based on programmers choice. No official mockup has been made yet.

## Requirements

Probably nodejs

## General setup and useful commands

Install all dependencies
```
npm install
```

## Compile and hot-reload for development
```
npm run serve
```

## Lint and fix files
**NB!** Run (and fix!) before commit!!!
```
npm run lint
```

## Compile and minify for production
```
npm run build
```

## Deploy
The page is served from the master branch. Only push the contents of the dist folder there! For this, first run 

```
npm run build
```

commit the changes and run 
```
git subtree push --prefix dist origin master
```

PS! index.html is renamed to 404.html as a workaround for github pages being unable to handle vue routing in history mode.
