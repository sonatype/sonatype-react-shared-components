const fs = require('fs');

export default {
  define: {
    PX_API_KEY: JSON.stringify(process.env.PX_API_KEY)
  },
  resolve: {
    preserveSymlinks: true
  },
  server: {
    https: {
      key: fs.readFileSync('localhost.key'),
      cert: fs.readFileSync('localhost.crt')
    }
  }
};
