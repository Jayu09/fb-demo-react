const JWT = require("jsonwebtoken");
const users = require("../models/users");
const secrete = require("../config/secrete");

JWToken = user => {
	return JWT.sign(
		{
			iss: "Demo",
			sub: user._id,
			iat: new Date().getTime(),
			exp: new Date().setDate(new Date().getDate() + 1)
		},
		secrete.JWT_SECRET
	);
};
module.exports = {
	signUp: async (req, res, next) => {
		const newUser = new users(req.body);
		await newUser
			.save()
			.then(st => {
				return res.json({
					msg: "success",
					token: JWToken(newUser),
					_id: newUser._id
				});
			})
			.catch(err => {
				return res.json({ msg: "email already exist" });
			});
	},
	signIn: async (req, res, next) => {
		var email = req.body.email;
		const user = await users.findOne({ email });
		return res.json({
			msg: "success",
			token: JWToken(user),
			user: {
				name: user.name,
				_id: user._id,
				image: user.image,
				contact: user.contact,
				address: user.address
			}
		});
	},
	getList: async (req, res, next) => {
		await users
			.find({ email: { $ne: req.user.email } })
			.then(user => res.send(user))
			.catch(err => {
				throw err;
			});
	},
	getSelect: async (req, res, next) => {
		await users
			.find({ name: { $regex: req.body.name } })
			.then(user => res.send(user))
			.catch(err => {
				throw err;
			});
	},
	sendRequest: async (req, res, next) => {
		try {
			var user = await users.findOne({ _id: req.body._id });
			await user.notification.push({
				profileId: req.user.email,
				name: req.user.name,
				notificationType: "request"
			});
			const getnotification = user.notification.filter(
				obj => obj.profileId === req.user.email
			);
			if (getnotification.length === 1)
				var user = await users.findOneAndUpdate(
					{ _id: req.body._id },
					{ $set: { notification: user.notification } }
				);
			res.send({ msg: " request succssesfully sent" });
		} catch (err) {
			throw err;
		}
	},
	responceRequest: async (req, res, next) => {
		try {
			friend = await users.find({ email: req.body.email });
			const acceptNot = req.user.notification.filter(
				obj =>
					obj.profileId === req.body.email
			);
			await users.findOneAndUpdate(
				{ _id: req.user._id },
				{
					$pull: {
						notification: {
							profileId: req.body.email,
							name: req.body.name
						}
					}
				}
			);
			if (acceptNot[0].notificationType === "request") {
				var user = await users.findOne({ email: req.body.email });
				await user.notification.push({
					profileId: req.user.email,
					name: req.user.name,
					notificationType: "accepted"
				});
				const getnotification = user.notification.filter(
					obj => obj.profileId === req.user.email
				);
				if (getnotification.length === 1)
					var user = await users.findOneAndUpdate(
						{ email: req.body.email },
						{
							$set: { notification: user.notification }
						}
					);
			} else {
				await users.findOneAndUpdate(
					{ _id: req.user._id },
					{
						$push: {
							friends: friend[0]
						}
					}
				);
				await users.findOneAndUpdate(
					{ email: req.body.email },
					{
						$push: {
							friends: req.user
						}
					}
				);
			}
			res.send({ msg: " request succssesfully responded" });
		} catch (err) {
			throw err;
		}
	},
	editProfie: async (req, res, next) => {
		await users.findOneAndUpdate(
			{ _id: req.user._id },
			{
				$set: {
					image: req.file ? req.file.path : req.user.image,
					name: req.body.name ? req.body.name : req.user.name,
					contact: req.body.contact ? req.body.contact : req.user.contact,
					address: req.body.address ? req.body.address : req.user.address
				}
			}
		);
		const user = await users.find({ _id: req.user._id });
		res.send(user);
	},
	userDetails: async (req, res, done) => {
		var email = req.user.email;
		const user = await users.findOne({ email });
		return res.json({
			msg: "success",
			token: JWToken(user),
			user: {
				email: user.email,
				name: user.name,
				_id: user._id,
				image: user.image,
				contact: user.contact,
				address: user.address,
				notification: user.notification
			}
		});
	}
};
