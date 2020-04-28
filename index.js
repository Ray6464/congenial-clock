#!/usr/bin/env node
'use strict';

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _figlet = require('figlet');

var _figlet2 = _interopRequireDefault(_figlet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Getting a data object
var d = new Date();

// Declaring the required variables
var _ref = [d.getHours(), d.getMinutes()],
    hour = _ref[0],
    minutes = _ref[1];
var _ref2 = [d.getDate(), d.getMonth() + 1, d.getFullYear()],
    day = _ref2[0],
    month = _ref2[1],
    year = _ref2[2];
var time = hour + ':' + minutes,
    date = day + '/' + month + '/' + year;

// Figlet Style Arg (For more fonts see Figlet's npm page)

var figStyle = {
    font: 'Doom' // 'Digital', 'Big', 'Cola'


    // Figlet Function Arg (Tells Figlet what to do)
};function figFunk(err, data) {
    if (err) {
        console.error('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(_chalk2.default.bold.green(data));
}

// Logging the time and date with ASCII Art
(0, _figlet2.default)(time + '\n' + date, figStyle, figFunk);
