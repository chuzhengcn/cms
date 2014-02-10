var keystone = require('keystone');

keystone.init({  
  'name': 'official-site-cms',
  
  'favicon': 'public/favicon.ico',
  'less': 'public',
  'static': 'public',
  
  'views': 'templates/views',
  'view engine': 'jade',
  
  'auto update': true,
  'mongo': 'mongodb://localhost/my-project',
  
  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': 'feiyesoft1984'
  
});
 
require('./models');
 
keystone.set('routes', require('./routes'));
 
keystone.start()