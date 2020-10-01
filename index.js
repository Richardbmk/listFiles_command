#!/usr/bin/env node


const fs = require('fs');

fs.readdir(process.cwd(), (err, filenames) => {
    if (err) {
        console.log(err);
    }

    // console.log(filenames);

    const allStats = Array(filenames.length).fill(null);
    // console.log(allStats);

    // BAD CODE
    for (let filename of filenames){
        const index = filenames.indexOf(filename);
        
        fs.lstat(filename, (err, stats) => {
            if(err){
                console.log(err);
            }

            // console.log(filename, stats.isFile());
            allStats[index] = stats;

            const ready = allStats.every((result) => {
                return result;
            });

            if(ready) {
                allStats.forEach((stats, index) => {
                    console.log(filenames[index], stats.isFile());
                });
            }
        });
    }
    // END OF BAD CODE
});