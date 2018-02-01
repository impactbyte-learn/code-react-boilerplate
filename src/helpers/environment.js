export const getEnvironment = () => process.env.NODE_ENV
  ? process.env.NODE_ENV
  : 'development';

export const getApiUrl = () => {
  switch (getEnvironment()) {
    case 'production':
      return 'https://api.yourdealo.com';
    case 'development':
    default:
      return 'https://api.yourdealo.com';
  }
};

export const getAppUrl = () => {
  switch (getEnvironment()) {
    case 'production':
      return 'http://admin.yourdealo.com';
    case 'development':
    default:
      return 'http://localhost:8080';
  }
};
