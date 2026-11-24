const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Title is required']
	},
	content: {
		type: String,
		required: [true, 'Content is required']
	},
	author: {
		type: String,
		required: [true, 'Author is required']
	},
	information: {
		type: String,
		required: [true, 'Information is required']
	},
	dateCreated: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Post', postSchema);