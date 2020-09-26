const db = require('../../config/database');
const UserRepository = require('../repositories/user-repository');
const userValidator = require('../validation/user-validation');

module.exports = (app) => {
	app.post('/api/register', async (req, res) => {
		const user = {
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
		};
		const errors = userValidator(user);
		if (errors) {
			res.status(400).json({ errors: errors });
			return;
		}

		const repository = new UserRepository(db);

		try {
			const result = await repository.save(user);
			res.json({
				message: 'success',
				data: {name: user.name, emai: user.email},
				id: result.id,
			});
		} catch (error) {
			res.status(400).json({ errors: [error] });
		}
	});

	app.post('/api/login', async (req, res) =>{
		const user = {
			email: req.body.email,
			password: req.body.password
		}
		const repository = new UserRepository(db);

		try {
			const result = await repository.find(user.email);
			if (result.password !== user.password) {
				throw new Error
			}
			res.json({
				message: 'success',
				data: {name: result.name, email: result.email},
				id: result.id,
			});
		} catch (error) {
			res.status(400).json({ errors: [error] });
		}
	})
};
