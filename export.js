const fs = require('fs');

var dirConsist = fs.readdir('./incoming', (err, fileName)=> {
    if (err) throw err
    else
        //console.log(fileName.toString());
        console.log('reading dirrectory is ok...');
        fs.readFile('./incoming/' + fileName, (err, fileConsist) => {
            if (err) throw err
            else
                //console.log(fileConsist.toString());
                console.log('reading file is ok...')
                var righttext = fileConsist.toString().replace(/,/g , "");
                //console.log(righttext);
                fs.writeFile('./results/res'+ Date.now() + '.csv', righttext, 'utf-8', (err) =>{
                    if (err) throw err
                    else console.log('transform file is ok...')
                });
        });
});
