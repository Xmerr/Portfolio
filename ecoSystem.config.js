const path = require('path')
let port = 1025
const { argv } = process;
const isProduction = argv[argv.length - 1] === 'production'

module.exports = {
	apps : [
		{
            name: 'portfolio-ui',
            args: isProduction ? `production ${port}` : 'start',
            autorestart: true,
            cwd: path.join(__dirname, 'packages', 'ui'),
            instances: 1,
            max_memory_restart: '1G',
            namespace: 'portfolio',
            script: 'yarn',
            watch: false,
            exec_mode: 'fork',
            interpreter: '/bin/bash',
            env: {
                PORT: port++
            },
            env_production: {
                NODE_ENV: 'production'
            }
        }
    ],

    deploy: {
        production: {
            user: 'xmer',
            host: 'xmer.pw',
            path: '/websites/portfolio/production',
            repo: 'git@github.com:Xmerr/Portfolio',
            ref: 'origin/master',
            'post-deploy': 'yarn install && pm2 startOrRestart ecoSystem.config.js --env production',
            env: {
                NODE_ENV: 'production'
            }
        }
    }
};
