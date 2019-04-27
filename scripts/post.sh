!/bin/bash
cd /home/work/wx/web/fs-order
rm -rf node_modules
echo "删除 node_modules"
tar zxf node_modules.tar
echo "解压 node_modules"
npm run kill
echo "kill pm2 进程"
npm run delete
echo "删除服务"
npm run start
echo '启动服务'
parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
node $parent_path/pm2Status.js

if [ $? -ne 0 ]; then
    exit 1
else
    exit 0
fi