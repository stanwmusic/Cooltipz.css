![Cooltipz.css](./logo.png)

---

# Cooltipz.css

**Cool tooltipz made with love from simple, pure CSS**

[Read the docs here](https://cooltipz.jackdomleo.dev)

---

## Setup

- `git clone https://github.com/JDomleo/Cooltipz.css.git`
- `npm run setup`

### Scripts

Installs project npm packages and globally installs [gulp-cli](https://www.npmjs.com/package/gulp-cli)
```
npm run setup
```

Compiles SCSS to CSS
```
npm run build
```

Highlights SCSS linting errors
```
npm run stylelint
```

Fixes and highlights SCSS linting errors
```
npm run stylelint:fix
```

NOTE: [gulp-cli](https://www.npmjs.com/package/gulp-cli) allows us to run `gulp` via `npm run build`, however, you may have to reconfigure your machine's execution policies to run this task runner. [Read the docs for Widnows](https://docs.microsoft.com/en-gb/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7)

---

## Installation

### CDN

```html
<!-- This will always get the latest stylesheet -->
<link rel="stylesheet" href="https://cooltipz.jackdomleo.dev/cooltipz.min.css" />>
```

### Manual

Simply download the `cooltipz.min.css` and add it to your project.