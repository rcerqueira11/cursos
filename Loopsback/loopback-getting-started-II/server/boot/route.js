module.exports = function(app) {
    // Install a "/ping" route that returns "pong"
    app.get('/ping', function(req, res) {
      res.send('pong');
    });
  }


//   As an aside, you could have just as well used Express router middleware instead, like this:
  
//   /server/boot/routes.js
  
//   module.exports = function(app) {
//     var router = app.loopback.Router();
//     router.get('/ping', function(req, res) {
//       res.send('pongaroo');
//     });
//     app.use(router);
//   }

// In fact you can also add routes right in server.js using the Express API.  For example, add this call to app.use() just before the call to app.start():

// server/server.js

// ...
// app.use('/express-status', function(req, res, next) {
//   res.json({ running: true });
// });

// // start the server if `$ node server.js`
// if (require.main === module) {
//   app.start();
// }