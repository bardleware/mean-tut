
var User = require('../models/user'); //MongoDB schema


module.exports = function(router) {
  router.post('/users', function (req, res) {
    console.log(req);
    var user = new User();
    var body = req.body;
    user.username = body.username;
    user.password = body.password;
    user.email = body.email;


    if (body.username === null || body.username == '' || body.password === null || body.password == '' || body.email === null || body.email == '') {
      res.send("ensure username, email, and password are filled out");
    } else {
      user.save(function (err) {
        if (err) {
          res.send("Username or email already exists!");
        } else {
          res.send("new user created");
        }
      });
    }
  });
  return router;
}