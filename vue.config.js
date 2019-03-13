module.exports = {
  publicPath: "/AtCoderProblems_4_Me/",
  outputDir: 'docs',
  pwa: {
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true
    }
  }
};
