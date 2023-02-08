# Markdown to HTML

Using PrismJS to do syntax highlighting on my code.
First we need to install [prismJS](https://www.npmjs.com/package/prismjs)

```
$ yarn add prismjs
```

We are going to user prismjs on the server side because we are doing Static Site Generation (SSG) we need to maek sure that we have the [babel-plugin-prismjs](https://github.com/mAAdhaTTah/babel-plugin-prismjs) installed and configured as well.

```
$ yarn add babel-plugin-prismjs
```

Let's configure out prismjs plugin in `.babelrc`

```json
// .babelrc
{
  "plugins": [
    [
      "prismjs",
      {
        "languages": ["python"],
        "theme": "twilight",
        "css": true
      }
    ]
  ]
}
```

At first I wanted to do syntax highlighting at the stage of the static site generation. However, it is clearly the front-ends responsibility to render the code block in a nicely styled way. The backend really should just provide the code block properly tagged with `<pre><code>programming language code block</code></pre>`

`remark` with `remark-html` does not support any additional data on code blocks to be transformed from markdown to html. In order for prism library to take effect we must have an html code block decorated with `class="language-*"` for example:

```html
<pre><code class="language-python">
print("Hello, World!")
</code></pre>
```

So we need to find probably a remark plugin which reads additional data off of code blocks or change the entire library, because formatted code blocks are just essential for this project.

Eventually, I decided to skip using the `unified` ecosystem for now and just use `marked` instead. At the moment I just need to get the Markdown content converted into HTML and display it. `marked` provides the `language-***` class for code blocks which makes PrismJS happy and the formatting works properly.

Configured PrismJS just as described above, with the bable plugin and all. But I think I just hit a hydration issue and because of that the code blocks are not parsed by PrismJS so they just get rendered as one big string in code. So there is some highlighting but mainly just the background.

Going full circle and trying the `remark` ecosystem again after the the prismjs can not be run on the client side.
