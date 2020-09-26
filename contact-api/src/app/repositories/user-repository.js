const db = require('../../config/database');

class UserRepository {
	constructor(db) {
		this._db = db;
	}

	find(email) {
		return new Promise((resolve, reject) => {
			this._db.get(`SELECT * FROM users WHERE email = ?`, email, (err, result) => {
				if (err) return reject('Usuario não encontrado.');
				return resolve(result);
			});
		});
	}

	save(user) {

		return new Promise((resolve, reject) => {
			const params = [
				user.name,
				user.email,
				user.password,
			];

			this._db.run(
				`INSERT INTO users (
					name,
                    email,
                    password
				) VALUES (?, ?, ?)`,
				params,
				function (err, result) {
					if (err) return reject('Ocorreu um erro ao tentar salvar o usuario.');
					resolve({
						id: this.lastID,
					});
				}
			);
		});
	}
}

module.exports = UserRepository;
