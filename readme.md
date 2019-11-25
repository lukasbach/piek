PIEK
====

Peek into any file right from your terminal. 

## Usage

Just run ``piek yourfile.txt`` from anywhere in your terminal to open the file.
Use your arrow keys (up and down) to navigate from within the file. You can also
expand/collapse the size of your view by pressing shift+up/down.

![PIEK usage demo](https://raw.githubusercontent.com/lukasbach/piek/master/piek.gif "PIEK usage demo")

## Installation

You need Node.js installed. Run ``npm i -g piek`` to install PIEK globally so you can run 
``piek filename.txt`` from anywhere in your terminal.

    $ npm i -g piek
    $ piek filename.txt

You can also run PIEK by calling ``npx piek yourfile.txt`` to skip installation and directly
run it.

    $ npx piek yourfile.txt