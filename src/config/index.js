const config = {
  "API_URL": process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://desafio-educacional.herokuapp.com',
  "PUBLIC_URL": process.env.NODE_ENV === 'development' ? '' : process.env.PUBLIC_URL,
} 

module.exports = config;
