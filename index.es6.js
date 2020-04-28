#!/usr/bin/env node

import chalk from 'chalk';
import figlet from 'figlet';

// Getting a data object
let d  = new Date();

// Declaring the required variables
let [ hour, minutes ] = [ d.getHours(), d.getMinutes() ];
let [ day, month, year ] = [ d.getDate(), d.getMonth() + 1, d.getFullYear() ];
let [ time, date ]  = [ `${hour}:${minutes}`, `${day}/${month}/${year}` ];

// Figlet Style Arg (For more fonts see Figlet's npm page)
let figStyle = {
  font: 'Doom' // 'Digital', 'Big', 'Cola'
}

// Figlet Function Arg (Tells Figlet what to do)
function figFunk(err, data) {
    if (err) {
        console.error('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.bold.green(data))
}

// Logging the time and date with ASCII Art
figlet(`${time}\n${date}`, figStyle, figFunk);

