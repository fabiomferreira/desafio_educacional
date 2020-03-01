const config = {
  "API_URL": process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : '',
} 

module.exports = config;
