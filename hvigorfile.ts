// Script for compiling build behavior. It is built in the build plug-in and cannot be modified currently.
export { appTasks } from '@ohos/hvigor-ohos-plugin';

import { ohos } from '@ohos/hvigor-ohos-plugin';

export default {
  tasks: {
    modifyHapName: {
      doLast: () => {
        const fs = require('fs');
        const path = require('path');
        const hapDir = path.join(__dirname, 'build', 'outputs', 'hap', 'debug');
        const files = fs.readdirSync(hapDir);
        files.forEach(file => {
          if (file.endsWith('.hap')) {
            const newName = `custom_${file}`;
            fs.renameSync(path.join(hapDir, file), path.join(hapDir, newName));
          }
        });
      },
      dependsOn: ['assembleDebug'], // 确保在构建后执行
    },
  },
};