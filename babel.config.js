module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          screens: './src/screens',
          components: './src/components',
          // assets: './src/assets',
          // httpClient: './src/httpClient',
          // services: './src/services',
          // components: './src/components',
          // constants: './src/constants',
          // screens: './src/screens',
          // hooks: './src/hooks',
          // locale: './src/locale',
          // reducers: './src/reducers',
          // selectors: './src/selectors',
          // store: './src/store',
          // utils: './src/utils',
          // navigators: './src/navigators',
          // storybook: './storybook',
          // validations: './src/validations',
        },
      },
    ],
  ],
};
