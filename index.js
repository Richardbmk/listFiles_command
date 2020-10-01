#!/usr/bin/env node


const fs = require('fs');
const util = require('util');
const chalk = require('chalk');
const path = require('path');

// console.log(chalk.blue('RIchard'));

// Method #2
const lstat = util.promisify(fs.lstat);

// console.log(process.argv);
const targetDirectory = process.argv[2] || process.cwd();

// Method #3
/* const { lstat } = fs.promises; */

fs.readdir(targetDirectory, async (err, filenames) => {
    if (err) {
        console.log(err);
    }

    const allPromises = filenames.map((filename) => {
        return lstat(path.join(targetDirectory, filename));
    });

    const allStat = await Promise.all(allPromises);

    for (let stat of allStat) {
        const index = allStat.indexOf(stat);
        if(stat.isFile()) {
            console.log(filenames[index]);
        } else {
            console.log(chalk.blue(filenames[index]));
        }
        // console.log(filenames[index], stat.isFile());
        
    }
});

// Method #1

/* 
const lstat = (filename) => {
    return new Promise((reject, resolve) => {
        fs.lstat(filename, (err, stats) => {
            if(err) {
                reject(err);
            }

            resolve(stats);
        });
    });
}
 */