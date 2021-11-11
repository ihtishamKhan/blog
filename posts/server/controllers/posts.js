const Post = require('../../models').Post;

module.exports = {
    // create(req, res) {
    //     return Post
    //         .create({
    //             title: req.body.title,
    //         })
    //         .then(post => res.status(201).send(post))
    //         .catch(error => res.status(400).send(error));
    // },
    index(req, res) {
        Post.findAll()
            .then((posts) => {
                res.status(200).send(posts);
            })
            .catch((error) => {
                console.log(error);
            })
    },
    create(req, res) {
        return Post
            .create({
                title: req.body.title,
                description: req.body.description,
                isPosted: req.body.isPosted,
                category_id: req.body.category_id
            })
            .then(post => res.status(201).send(post))
            .catch(error => res.status(400).send(error));
    },
    destroy(req, res) {
        Post.destroy({ where: { id: req.body.id } })
            .then(res.status(200).send({ message: "Post Deleted" }))
            .catch(error => res.status(400).send(error));
    }
};