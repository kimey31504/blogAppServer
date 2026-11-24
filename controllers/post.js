const Post = require('../models/Post');

const { errorHandler } = require('../auth');

module.exports.addPost = (req, res) => {
	let newPost = new Post({
		title: req.body.title,
		content: req.body.content,
		author: req.body.author,
		information: req.body.information
	});

	return newPost.save()
	.then(result => res.status(201).send(result))
	.catch(error => errorHandler(error, req, res));
};

module.exports.getPosts = (req, res) => {
	return Post.find({})
	.then(result => {
		if(result.length > 0){
			return res.status(200).send({ posts: result });
		} else {
			return res.status(404).send({ message: "No posts found" });
		}
	})
	.catch(error => errorHandler(error, req, res));
};

module.exports.getPostById = (req, res) => {
	return Post.findById(req.params.id)
	.then(result => {
		if(result){
			return res.status(200).send(result);
		} else {
			return res.status(404).send({ message: "Post not found" });
		}
	})
	.catch(error => errorHandler(error, req, res));
};

module.exports.updatePost = (req, res) => {
	return Post.findByIdAndUpdate(
		req.params.id,
		{ $set: req.body },
		{ new: true, runValidators: true }
	)
	.then(updatedPost => {
		if(updatedPost){
			return res.status(200).send(updatedPost);
		} else {
			return res.status(404).send({ message: "Post not found" });
		}
	})
	.catch(error => errorHandler(error, req, res));
};

module.exports.deletePost = (req, res) => {
	return Post.findByIdAndDelete(req.params.id)
	.then(deletedPost => {
		if(deletedPost){
			return res.status(200).send(deletedPost);
		} else {
			return res.status(404).send({ message: "Post not found" });
		}
	})
	.catch(error => errorHandler(error, req, res));
};