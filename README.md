# 2021_new_homepage

This is where the page is served from. Only push the contents of the dist folder here! For this, first run 

```
npm run build
```

commit the changes and run 
```
git subtree push --prefix dist origin master
```

PS! index.html is renamed to 404.html as a workaround for github pages being unable to handle vue routing in history mode.
