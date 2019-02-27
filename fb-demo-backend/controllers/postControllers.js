const post = require("../models/post");

module.exports = {
	getPost: async (req, res, done) => {
		const items = [];
		req.user.friends.map(friend => {
			items.push(friend.email);
		});
		items.push(req.user.email);
		await post
			.find()
			.or([
				{ $and: [{ privacy: "private" }, { profileId: req.user.email }] },
				{ $and: [{ privacy: "friends" }, { profileId: { $in: items } }] },
				{ $and: [{ privacy: "public" }] }
			])
			.sort({ date: -1 })
			.then(post => res.send(post))
			.catch(err => {
				throw err;
			});
	},
	addPost: async (req, res, done) => {
		const newPost = new post(req.body);
		try {
			newPost.profileId = req.user.email;
			if (req.file) newPost.image = req.file.path;
			await newPost.save();
			res.send(newPost);
		} catch (err) {
			throw err;
		}
	},
	seenPost: async (req, res, done) => {
		try {
			var postres = await post.findOne({ _id: req.body.payload });
			await postres.seen.push({ _id: req.user._id, name: req.user.name });
			const getseen = postres.seen.filter(obj => obj.name === req.user.name);
			if (getseen.length === 1)
				var postres = await post.findOneAndUpdate(
					{ _id: req.body.payload },
					{ $set: { seen: postres.seen } }
				);
		} catch (err) {
			throw err;
		}
	},
	completePost: async (req, res, done) => {
		try {
			var postres = await post.findOne({ _id: req.body.payload });
			await postres.completed.push({
				_id: req.user._id,
				name: req.user.name
			});
			const getcompleted = postres.completed.filter(
				obj => obj.name === req.user.name
			);
			if (getcompleted.length === 1)
				await post.findOneAndUpdate(
					{ _id: req.body.payload },
					{ $set: { completed: postres.completed } }
				);
		} catch (err) {
			throw err;
		}
	}
};
