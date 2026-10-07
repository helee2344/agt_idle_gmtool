const path = require('path')
const ROOT = path.resolve(process.env.AGATHA_HOME || __dirname)

module.exports = {
    apps: [
      {
        name: 'Live_1_GMTool_SendMail',
        cwd: ROOT,
        script: path.join(ROOT, 'bin/www'),
        exec_mode: 'fork',
        instances: '1',
        autorestart: true,
        error: path.join(ROOT, 'logs/pm2/error.log'),
        time: true,
        log_date_format: 'YYYY-MM-DD HH:mm:ss',
        node_args: '--trace-warnings --trace-uncaught',
        kill_timeout: 10000,
        instance_var: "INSTANCE_ID"
      }
    ],
};
