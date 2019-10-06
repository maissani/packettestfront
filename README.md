## PacketAI Tech Test Frontend

<img src="https://www.imt.fr/wp-content/uploads/2019/04/wtu-logo-packetai.png" alt="Technical test for PacketAI." align="center" />

<br/>
<div align="center" > Test Technique PacketAI</div>
<br/>

<div align="center">
  <!-- CodeClimate -->
  <a href="https://codeclimate.com/github/maissani/packettestfront/maintainability">
    <img src="https://api.codeclimate.com/v1/badges/077c02d5cb9ec7d8a654/maintainability" />
  </a>
  <!-- TestCoverage -->
  <a href="https://codeclimate.com/github/maissani/packettestfront/test_coverage"><img src="https://api.codeclimate.com/v1/badges/077c02d5cb9ec7d8a654/test_coverage" /></a>
  <!-- Build Status -->
  <a href="https://travis-ci.org/maissani/packettestfront">
    <img src="https://travis-ci.org/maissani/packettestfront.svg?branch=master" alt="Build Status" />
  </a>
  <!-- Dependency Status -->
  <a href="https://david-dm.org/maissani/packettestfront">
    <img src="https://david-dm.org/maissani/packettestfront.svg" alt="Dependency Status" />
  </a>
  <!-- devDependency Status -->
  <a href="https://david-dm.org/maissani/packettestfront#info=devDependencies"> 
    <img src="https://david-dm.org/maissani/packettestfront/dev-status.svg" alt="devDependency Status" />
  </a>
</div>


<br/>
<div align="center">
  <sub>Created by <a href="https://mehdiaissani.com">Mehdi AISSANI</a></sub>
</div>

<br/>

## About

Test JavaScript dont le but est de reproduire le jeu TIC TAC TOE alias MORPION ( en francais ).
Ce test incluera un diagrame D3JS des probabilités. 
Et si le temps me le permet une IA / Solution Mathématique pour jouer contre l'ORDINATEUR.
<br/>

## Features

This technical test includes the latest powerfull tools.

* **Next.js** - Minimalistic framework for server-rendered React applications.
* **Typescript** - Superset of JavaScript which primarily provides optional static typing, classes and interfaces.
* **Redux** - State management
* **Express.js**- Handles server-side rendering and integrated with Express.js
* **Built-in Project CLI**- Create pages, components, actions, reducers with one command by using built-in cli.
* **Sass/Scss** - CSS preprocessor, which adds special features such as variables, nested rules and mixins (sometimes referred to as syntactic sugar) into regular CSS.
* **Docker** - A tool designed to make it easier to create, deploy, and run applications by using containers.
* **Babel** -  The compiler for next generation JavaScript.
* **Eslint** - The pluggable linting utility.
* **Reverse Proxy** - A reverse proxy server is a type of proxy server that typically sits behind the firewall in a private network and directs client requests to the appropriate backend server
* **Bundler Analyzer** - Visualize size of webpack output files with an interactive zoomable treemap.
* **dotenv .config** - Expose environment variables to the runtime config of Next.js
* **Jest** - Javascript testing framework , created by developers who created react
* **Enzyme** - JavaScript testing utility for React that makes it easier to test your React Components output.


<br/>

## Installation
``` Bash
$ git clone https://github.com/maissani/packettestback.git frontend
$ cd frontend
$ npm install
``` 
<br/>

## Usage

<br/>

### Devellopment

Create a .ENV File
``` Bash
PROXY_MODE=local
API_URL=http://localhost:4000
API_KEY=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo
``` 

Run the server
``` Bash
$ yarn start:dev
``` 
Then run the test suite
``` Bash
$ yarn watch
or
$ yarn test
``` 
<br/>

### Production

Create a .ENV File
``` Bash
PROXY_MODE=local
API_URL=http://localhost:4000
API_KEY=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo
``` 

Compile the sources
``` Bash
$ yarn build
``` 
Then the server
``` Bash
$ yarn start
``` 