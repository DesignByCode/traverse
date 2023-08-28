# Traverse List Web Component

[![NPM](https://nodei.co/npm/@designbycode/traverse.png?mini=true)](https://nodei.co/npm/@designbycode/traverse/)

[![npm version](https://badge.fury.io/js/@designbycode%2Ftraverse.svg)](https://badge.fury.io/js/@designbycode%2Ftraverse)
![npm](https://img.shields.io/npm/dt/%40designbycode/traverse)
![NPM](https://img.shields.io/npm/l/%40designbycode%2Ftraverse)
![npm bundle size](https://img.shields.io/bundlephobia/min/%40designbycode%2Ftraverse)
![ts](https://badgen.net/badge/Built%20With/TypeScript/blue)
[![GitHub stars](https://img.shields.io/github/stars/DesignByCode/traverse?style=social)](https://github.com/DesignByCode/traverse/stargazers)
[![HitCount](https://hits.dwyl.com/designbycode/traverse.svg?style=flat)](http://hits.dwyl.com/designbycode/traverse)

The Traverse List Web Component Plugin provides a customizable list of items with keyboard navigation functionality.

## 📇 Table of Contents

* [Installation](#installation)
    * [Using pnpm](#using-pnpm)
    * [Using npm](#using-npm)
    * [Using yarn](#using-yarn)
* [Usage](#usage)
    * [Attributes](#attributes)
    * [Examples](#examples)
        * [Basic Usage](#basic-usage)
        * [Non-loopable List](#non-loopable-list)
        * [Attribute of current](#attribute-of-current)
* [API](#api)
    * [Properties](#properties)
    * [Methods](#methods)
* [Contributing](#contributing)
    * [Contributors](#contributors)
* [License](#license)
* [Author](#author)

### Installation

You can install the Traverse List Web Component Plugin using npm:

#### Using pnpm

```bash
pnpm add @designbycode/traverse
```

#### Using npm

```bash
npm install @designbycode/traverse
```

#### Using yarn

```bash
yarn add @designbycode/traverse
```

## Usage

Use the ```<traverse-list>``` element in your HTML to create the list:

```html

<traverse-list>
    <a href="#" role="menuitem">list 1</a>
    <a href="#" role="menuitem">list 2</a>
    <a href="#" role="menuitem">list 3</a>
</traverse-list>

```

## Attributes

* loopable (optional): Set to "false" to prevent looping through items using arrow keys.
  Keyboard Navigation
* Use the Arrow Up and Arrow Down keys to navigate through the list.
* Pressing Tab and Shift + Tab will also navigate up and down respectively.

## Examples

### Basic Usage

```html

<traverse-list>
    <a href="#" role="menuitem">list 1</a>
    <a href="#" role="menuitem">list 2</a>
    <a href="#" role="menuitem">list 3</a>
</traverse-list>

```

### Non-loopable List

```html

<traverse-list loopable="false">
    <a href="#" role="menuitem">list 1</a>
    <a href="#" role="menuitem">list 2</a>
    <a href="#" role="menuitem">list 3</a>
</traverse-list>

```

### Attribute of current

Use one of these

* true (Default)
* page
* step
* location
* date
* time
* false

```html
// "page" | "step" | "location" | "date" | "time" | "false" | "true"
<traverse-list current="step">
    <a href="#" role="menuitem">list 1</a>
    <a href="#" role="menuitem">list 2</a>
    <a href="#" role="menuitem">list 3</a>
</traverse-list>

```

## API

### Properties

* _currentSelectedItem: The index of the currently selected item.
* _indexPointer: The index of the item with focus.
* menuItems: A collection of menu items within the component.
* _current: The value of the "current" attribute.
* _loopable: A boolean indicating whether looping is enabled.

### Methods

* addEventListeners(): Adds event listeners for keyboard navigation.
* removeEventListeners(): Removes previously added event listeners.
* navigateKeys(event): Handles keyboard navigation using Arrow keys and Tab.
* moveSelectionUp(): Moves selection up within the list.
* moveSelectionDown(): Moves selection down within the list.
* markAsCurrent(): Marks the currently selected item with the "aria-current" attribute.

## Contributing

Contributions to this plugin are welcome! If you encounter any issues, have feature requests, or want to improve the plugin, feel free to create a pull request or submit an issue on the GitHub repository.

### Contributors

<a href="https://github.com/DesignByCode/tailwindcss-text-shadow/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=DesignByCode/tailwindcss-text-shadow" />
</a>

## License

This project is licensed under the [MIT](LICENCE) License - see the [LICENSE](LICENCE) file for details.

## Author

<div>
<img  align="left" style="box-shadow:3px 3px 3px rgba(0,0,0,75);border-radius:1rem;border:solid 2px rgba(255,225,225,.25)" src="https://github.com/designbycode.png?size=130" alt="Claude Myburgh">
</div>
<h2 style="margin-top:0">Claude Myburgh</h2><ul style="padding-left:0;margin-top:-.63rem;list-style:none"><li>Github:<a href="https://github.com/designbycode"> @designbycode</a></li><li>Npm:<a href="https://www.npmjs.
com/~designbycode_"> @designbycode_</a></li></ul>
