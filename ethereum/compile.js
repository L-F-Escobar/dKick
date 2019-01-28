const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');
 
const buildPath = path.resolve(__dirname, 'build');
const contractsPath = path.resolve(__dirname, 'contracts');
 
fs.removeSync(buildPath);
 
// get directory's contents
const fileNames = fs.readdirSync(contractsPath);
 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
const input = fileNames.reduce(
  (input, fileName) => {
    const filePath = path.resolve(__dirname, 'contracts', fileName);
    const source = fs.readFileSync(filePath, 'utf8');
    return { sources: { ...input.sources, [fileName]: source } };
  },
  // provide an initial value as the second argument to .reduce()
  { sources: {} }
);

// console.log("\nINPUT:\n", input);
// console.log("\nfileNames:\n", fileNames);
// console.log("\nbuildPath:\n", buildPath);
// console.log("\ncontractsPath:\n", contractsPath);

const output = solc.compile(input, 1).contracts;
 
fs.ensureDirSync(buildPath);
 
for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.split(':')[1] + '.json'),
    output[contract]
  );
}

//ADDRESS -0x3b09F23f7e8Fc85BD15Eb291CCc1c04d8504133D

// // By using path we get cross platform compatability (windows/unix/etc)
// const path = require('path');
// // file system module has extra functions
// const fs = require('fs-extra');
// const solc = require('solc');

// // __dirname == current working directory
// const buildPath = path.resolve(__dirname, 'build');

// // Deletes everything at the file path, including folder. Part of the extra feature suite.
// fs.removeSync(buildPath);

// const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');

// // Get source code from the file.
// const source = fs.readFileSync(campaignPath, 'utf8');

// const output = solc.compile(source, 1).contracts;

// // console.log('\ncampaignPath:\n', campaignPath);
// // console.log('\nbuildPath:\n', buildPath);
// // console.log('\nsource:\n', source);
// // console.log('\noutput:\n', output);
// // console.log('\nsolc.compile(source, 1).contracts:\n', solc.compile(source, 1).contracts);

// // checks to see if directory exists - if not, create directory.
// fs.ensureDirSync(buildPath);

// for(let contract in output) {
//     fs.outputJsonSync(
//         path.resolve(buildPath, contract.replace(':', '') + '.json'),
//         output[contract]
//     );
// }
