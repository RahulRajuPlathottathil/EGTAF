const fs = require('fs');

function removeDirectory(directoryPath) {
    if (fs.existsSync(directoryPath)) {
        fs.rmdirSync(directoryPath, { recursive: true });
        console.log(`Directory '${directoryPath}' removed successfully.`);
    } else {
        console.log(`Directory '${directoryPath}' does not exist.`);
    }
}

function removeFile(filePath) {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.info(`Error removing file ${filePath}:`, err);
        } else {
            console.log(`File ${filePath} removed successfully.`);
        }
    });
}
// Example usage:
const directoryPath = 'Mochawesome-report';
removeDirectory(directoryPath);
removeDirectory('cypress/results');
removeFile('mochawesome.json')




