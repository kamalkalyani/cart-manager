module.exports = {
  apps: [{
    name: 'cart-management',
    script: 'dist/index.js',
    watch: false,
    env: {
      "NODE_ENV": "development",
      "ENV_FILE": "env/.dev"
    },
    env_production: {
      "NODE_ENV": "production",
      "ENV_FILE": "env/.prod"
    },

  }],

  deploy: {
    production: {
      user: 'SSH_USERNAME',
      host: 'SSH_HOSTMACHINE',
      ref: 'origin/master',
      repo: 'GIT_REPOSITORY',
      path: 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
