module.exports = {
  apps: [{
    name: 'rubizcode-web',
    script: 'node_modules/next/dist/bin/next',
    args: 'start',
    instances: 1,
    exec_mode: 'fork',
    watch: false,
    env: {
      PORT: 8001,
      NODE_ENV: 'production',
    },
    env_production: {
      PORT: 8001,
      NODE_ENV: 'production',
    }
  }]
} 