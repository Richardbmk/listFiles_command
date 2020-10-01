#!/usr/bin/env node


const fs = require('fs');

fs.readdir(process.cwd(), (err, filename) => {
    if (err) {
        console.log(err);
    }

    console.log(filename);
});