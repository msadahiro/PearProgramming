var session = require('./../controllers/session.js')

module.exports = function(app){
  app.post('/login', function(request,response){
    session.login(request,response)
  })
  app.get('/checkuser',function(request,response){
    session.checkUser(request,response)
  })
  app.get('/logout',function(request,response){
    session.logout(request,response)
  })
}
