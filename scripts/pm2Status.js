const fs = require('fs');
const path = require('path');
const pm2 = require('pm2');
const child_process = require('child_process');
const processes = require('../processes.json');
const {getRootByFile, $} = require('te-one').utils;
const rootPath = getRootByFile('one.config.js');
const oneConfig = require(rootPath + '/one.config.js');

pm2.list((err, processDescriptionList) => {
  if (err) {
    console.log('pm2.list:' + err);
    process.exit(1);
    return;
  }
  const allPm2Ins = Array
    .from(processDescriptionList)
    .filter(item => item.name === processes.apps[0].name);
  if (allPm2Ins.length && allPm2Ins.every(item => item.pm2_env.status === "online")) {
    console.log("启动成功");
    let plogPath = path.resolve(rootPath, $.get(oneConfig, 'plog.path', '../logs/plog'));
    let mkdir = '';
    if (!fs.existsSync(plogPath)) {
      mkdir = 'mkdir -p ' + plogPath;
    }
    let link = plogPath + `/plog.${dateFormat(new Date(), 'yyyy-MM-dd')}.log`;
    if (!fs.existsSync(link)) {
      child_process.execSync(`${mkdir}
      ln -s $HOME/.pm2/pm2.log ${link}`);
    }
    process.exit(0);
  } else {
    console.log('启动失败');
    process.exit(1);
  }
})

function dateFormat(date, format) {
  var o = {
    "M+": date.getMonth() + 1, //month
    "d+": date.getDate(), //day
    "h+": date.getHours(), //hour
    "m+": date.getMinutes(), //minute
    "s+": date.getSeconds(), //second
    "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
    "S": date.getMilliseconds() //millisecond
  }
  if (/(y+)/.test(format))
    format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(format))
      format = format.replace(RegExp.$1, RegExp.$1.length == 1
        ? o[k]
        : ("00" + o[k]).substr(("" + o[k]).length));
  return format;
}