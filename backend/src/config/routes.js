const expresss = require('express');

module.exports = function(app) {
    const router = expresss.Router();
    app.use('/api', router);

    const todoService = require('../api/todo/todoService');
    todoService.register(router, '/todos');
}