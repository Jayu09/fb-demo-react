const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
	email: {
		type: String,
		require: true
	},
	name: {
		type: String,
		require: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});
const commentSchema = mongoose.Schema({
	email: {
		type: String,
		require: true
	},
	name: {
		type: String,
		require: true
	},
	date: {
		type: Date,
		default: Date.now
  },
  content: {
    type: String,
    require : true
  }
});
const postSchema = mongoose.Schema(
	{
		profileId: {
			type: String,
			require: true
		},
		content: {
			type: String,
			require: true
		},
		image: {
			type: String
		},
		like: [userSchema],
		comment: [commentSchema],
		private: {
			type: Boolean,
			default: false
		},
		date: {
			type: Date,
			default: Date.now
		}
	},
	{
		timestamps: { createdAt: true, updatedAt: false }
	}
);
const postModel = mongoose.model("posts", postSchema);
module.exports = postModel;
