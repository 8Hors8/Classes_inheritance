const path = require('path');

module.exports = {
  // Точка входа — файл, с которого начинается сборка
  entry: './src/index.js',

  // Куда и как сохранить собранный файл
  output: {
    path: path.resolve(__dirname, 'dist'), // Папка для сборки
    filename: 'bundle.js', // Имя итогового файла
  },

  // Режим сборки — "development" для удобства разработки, "production" для продакшена
  mode: 'development',

  // Настройки для удобной работы с sourcemaps
  devtool: 'source-map',

  // Опционально — настройки для dev-сервера
  devServer: {
    static: './src',
    hot: true,
    open: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/, // Обрабатывать только .js файлы
        exclude: /node_modules/, // Исключить папку с зависимостями
        use: {
          loader: 'babel-loader', // Если используете Babel (нужно отдельно установить и настроить)
        },
      },
    ],
  },
};
