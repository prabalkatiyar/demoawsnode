const log4js = require("log4js");

let demoAwsNodeFlag = true;



log4js.configure({
  appenders: {
    out: { type: "stdout" },
    DEMOAWSNODE: {
      type: "file",
      filename: "var/log/demoawsnode.log",
      pattern: ".yyyy-MM-dd",
      compress: true,
      maxLogSize: 10485760,
      backups: 5,
    },

    
  },
  categories: {
    default: { appenders: ["out"], level: "info" },
    demoAwsNodeLog: { appenders: ["DEMOAWSNODE"], level: "info" },
  },
  pm2: true,
});

const demoAwsNodeLogger = log4js.getLogger("demoAwsNodeLog");

exports.info_demoAwsNodeLog = function (message) {
  if (demoAwsNodeFlag) {
    demoAwsNodeLogger.info(message);
  } else {
    return;
  }
};


