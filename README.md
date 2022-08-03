# not-for-ie

[![npm version](https://badge.fury.io/js/not-for-ie.svg)](https://badge.fury.io/js/not-for-ie)
[![npm downloads](https://img.shields.io/npm/dt/not-for-ie.svg)](https://www.npmjs.com/package/not-for-ie)
[![License](https://img.shields.io/github/license/myTerminal/not-for-ie.svg)](https://opensource.org/licenses/MIT)  
[![Build Status](https://travis-ci.org/myTerminal/not-for-ie.svg?branch=master)](https://travis-ci.org/myTerminal/not-for-ie)
[![Code Climate](https://codeclimate.com/github/myTerminal/not-for-ie.png)](https://codeclimate.com/github/myTerminal/not-for-ie)
[![js-myterminal-style](https://img.shields.io/badge/code%20style-myterminal-blue.svg)](https://www.npmjs.com/package/eslint-config/myterminal)
[![Coverage Status](https://img.shields.io/coveralls/myTerminal/not-for-ie.svg)](https://coveralls.io/r/myTerminal/not-for-ie?branch=master)  
[![NPM](https://nodei.co/npm/not-for-ie.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/not-for-ie/)

A mini-library to declare that your web application is not designed to run in Internet Explorer

## Features

* Appends a specified CSS class to HTML body on activation
* Provides a method to detect IE

## How to Use

### Directly from a web page

One can use *not-for-ie* directly from a web-page by attaching the *not-for-ie.js* and *not-for-ie.css* to the DOM.

    <!-- Attaching the not-for-ie script -->
    <script type="text/javascript" src="path/to/library/not-for-ie.js"></script>
    
    <!-- Usage -->
    <script type="text/javascript">
        notForIe.activate('ie');
    </script>

### With [Webpack](https://webpack.js.org), [Browserify](http://browserify.org) or [RequireJS](http://requirejs.org)

Install *not-for-ie* from NPM

    npm install not-for-ie --save-dev

Consume as an ES6 module

    import * as notForIe from 'not-for-ie';

or

    import { isIe } from 'not-for-ie';

Consume as a CommonJS module

    var notForIe = require('not-for-ie');

Consume as an AMD

    require(['not-for-ie'], function (notForIe) {
        // Consume notForIe
    }

Note: You may have to use [Babel](https://babeljs.io) for ES6 transpilation.

### Methods

#### `activate`

Appends the specified CSS class to the HTML `body` element.

    notForIe.activate('ie');

#### `isIe`

Determines whether the application is known to be running within Internet Explorer.

    if (notForIe.isIe()) {
        // Running within IE
    }

## Demo

You can view a demo [here](https://myterminal.github.io/not-for-ie/examples).

## To-do

* Write unit-tests
