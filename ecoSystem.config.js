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
            repo: '/home/git/podcast.git',
            ref: 'origin/master',
            'post-deploy': 'yarn install && yarn build && pm2 startOrRestart ecoSystem.config.js --env production',
            env: {
                NODE_ENV: 'production'
            }
        }
    }
};
