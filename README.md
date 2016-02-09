# static-gen

A lightweight static site generator^2 with the [design standards](https://18f.gsa.gov/2015/09/28/web-design-standards/) established by [18F](https://18f.gsa.gov/).

## installing static-gen

```
npm install -g static-gen
```

## using static-gen

To use the generator, create a new directory for your project...

```
mkdir new_project
```

In the new project directory, run `static-gen`...

```
cd new_project
static-gen
```

After static-gen is done, run `grunt` to launch the static site generator...

```
grunt
```

## what is generated?

static-gen creates a static site generator which runs on `grunt` and compiles `jade` into `html` and `sass` into `css`. Two directories are created within your project directory: `src` and `dist`. The `dist` directory contains the static, compiled content which can be uploaded to a static server. The `src` directory contains source files which are continuously compiled by the generator.
