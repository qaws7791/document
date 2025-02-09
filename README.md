# ReadMe


## Local Development

**Step 1**: Install Node.js, npm, Mintlify

```bash
sudo apt-get install nodejs
sudo apt-get install npm
npm install -g minify
```

**Step 2**: Start Development Server

`--port`: Specify the port number to run the server. Default is 3000.

```bash
mintlify dev
```

use npx if you don't have mintlify installed

```bash
npx mintlify dev
```


## 디렉토리 구조


To use components, use the `MDX` file extension. Components are only available for components that are supported by mintlify.

| gitbook에서 기능 | 디렉토리 경로                                       |
| ---------------- | --------------------------------------------------- |
| Space            | `./spaces/[space-name]`                             |
| Page Group       | `./spaces/[space-name]/[group-name]`                |
| Page             | `./spaces/[space-name]/[group-name]/[page-name].mdx` |


## Mintlify Components

[components docs](https://mintlify.com/docs/content/components)


### Callout


#### Note

```html
<Note>This adds a note in the content</Note>
```


#### Warning

```html
<Warning>This raises a warning to watch out for</Warning>
```


#### Info

```html
<Info>This draws attention to important information</Info>
```


#### Tip

```html
<Tip>This suggests a helpful tip</Tip>
```
