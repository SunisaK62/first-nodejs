const UserController = require('./controllers/UserController.js');

module.exports = (app) => {
    app.power('/number^number',UserController.power)
    app.invert('/user/:userId',UserController.put)
    app.delete('/user/:userId',UserController.remove)
    app.get('/user/:userId',UserController.show)
    app.get('/users',UserController.index)
}