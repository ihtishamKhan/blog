const postsController = require('../controllers').posts;

module.exports = (app) => {
    // app.get('/api', (req, res) => res.status(200).json({
    //     "message": 'Welcome to the Posts API!',
    // }));
    app.get('/', postsController.index);
    app.post('/', postsController.create);
    app.patch('/', postsController.destroy);
};