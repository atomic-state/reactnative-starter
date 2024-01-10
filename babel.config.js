module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@/components': './src/components',
            '@/hooks': './src/hooks',
            '@/Screens': './src/Screens',
            '@/states': './src/states'
          },
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json']
        }
      ]
    ]
  }
}
