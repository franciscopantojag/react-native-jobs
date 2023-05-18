import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

module.exports = {
  scheme: 'acme',
  web: {
    bundler: 'metro',
  },
  name: 'react-native-jobs',
  slug: 'react-native-jobs',
  extra: {
    apiUrl: process.env.API_URL,
    rapidAPIKey: process.env.RAPID_API_KEY,
  },
};
