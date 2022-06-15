module.exports = {
    apps: [
      {
        name: 'peot',
        script: './build/server.js',
        instances: 'max',
        exec_mode: 'cluster',
        autorestart: true,
      },
    ],
  }