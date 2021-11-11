const postsController = require('../controllers').posts;

module.exports = (app) => {
    // app.get('/api', (req, res) => res.status(200).json({
    //     "message": 'Welcome to the Posts API!',
    // }));
    app.get('/api/posts', postsController.index);
    app.post('/api/posts', postsController.create);
    app.patch('/api/posts', postsController.destroy);
};