require('dotenv').load()

var keystone = require('keystone');

keystone.init({  
  'name': 'official-site-cms',
  
  'favicon': 'public/favicon.ico',
  'less': 'public',
  'static': 'public',
  
  'views': 'templates/views',
  'view engine': 'jade',
  
  'auto update': true,
  'mongo': process.env.mongo,
  
  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': process.env.cookiesecret,
  
});
 
require('./models');
 
keystone.set('routes', require('./routes'));
 
keystone.start()