module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@screens': './src/screens',
          '@components': './src/components',
          '@constants': './src/constants',
          '@actions': './src/reduxConfig/actions',
          '@reduxConstants': './src/reduxConfig/actions/constants',
          '@reducers': './src/reduxConfig/reducers',
          '@sagas': './src/reduxConfig/sagas',
          '@hooks': './src/hooks',
          '@services': './src/services',
          '@helpers': './src/helpers',
          '@navigators': './src/navigation',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
