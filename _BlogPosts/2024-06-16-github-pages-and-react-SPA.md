---
# title: URL Routing in React SPA with Github Pages
# img:
# author: Masum Ahmed
# date: 2024-06-16
# tags: react, github-pages, routing
# description: Github pages doesn't support URL routing for single page applications out of the box. Here's jank workaround to get it working.
---

## The Problem

Github pages doesn't support URL routing for single page applications out of the box. This means that if you have a react app that uses react-router-dom to handle routing, you'll run into issues when you try to navigate to a route that isn't the root route. For example, if you have a route like `https://masumahmed.github.io/my-react-app/about`, you'll get a 404 error because github pages doesn't know how to handle that route.

## The Solution

The solution is to use a jank workaround to get URL routing working on github pages. Here's how you can do it:

Create a `404.html` file in the root of your project with the following content:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta http-equiv="refresh" content="0; url=/" />
    <title>redirecting ...</title>
    <meta name="description" content="redirecting ..." />

    <script type="text/javascript">
      let fullPath =
        window.location.pathname +
        window.location.search +
        window.location.hash;
      window.location.replace("/?redirect=" + encodeURIComponent(fullPath));
    </script>

    <style>
      body {
        /* black background to avoid flash banging the user */
        background-color: #000000;
      }
    </style>
  </head>

  <body></body>
</html>
```

That's it! Your react app should now work with URL routing on github pages. You can test it by navigating to a route like `https://masumahmed.github.io/my-react-app/about` and it should work as expected.
