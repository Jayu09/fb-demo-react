const post = require("../models/post");

module.exports = {
  getPost: async (req, res, done) => {
    await post
      .find().or([{ private: false }, { profileId: req.user._id }]).sort({date:-1})
      .then(post => res.send(post))
      .catch(err => {
        throw err;
      });
  },
  addPost: async (req, res, done) => {
    const newPost = new post(req.body);
    try {
      newPost.profileId = req.user._id;
      if(req.file)
      newPost.image = req.file.path;
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
      await postres.completed.push({ _id: req.user._id, name: req.user.name });
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
