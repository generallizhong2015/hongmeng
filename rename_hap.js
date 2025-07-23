const fs = require('fs');
const path = require('path');

const hapDir = path.join(__dirname, 'build', 'outputs', 'hap');
const files = fs.readdirSync(hapDir);

files.forEach(file => {
    if (file.endsWith('.hap')) {
        const newName = `custom_name_${file}`; // 自定义新文件名
        fs.renameSync(path.join(hapDir, file), path.join(hapDir, newName));
        console.log(`Renamed: ${file} -> ${newName}`);
    }
});