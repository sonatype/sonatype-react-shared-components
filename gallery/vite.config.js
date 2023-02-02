export default {
  define: {
    PX_API_KEY: JSON.stringify(process.env.PX_API_KEY)
  },
  resolve: {
    preserveSymlinks: true
  }
};
