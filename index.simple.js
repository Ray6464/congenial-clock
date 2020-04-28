#!/usr/bin/env node
"use strict";

var d = new Date();

var _ref = [d.getHours(), d.getMinutes()],
    hour = _ref[0],
    minutes = _ref[1],
    _ref2 = [d.getDate(), d.getMonth() + 1, d.getFullYear()],
    day = _ref2[0],
    month = _ref2[1],
    year = _ref2[2];


var time = "Time is " + hour + ":" + minutes;
var date = "Date is " + day + "/" + month + "/" + year;

console.log(time + "\n" + date);
