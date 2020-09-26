const userValidator = (user) => {
	let errors = [];
	if (!user.name) {
		errors.push({
			field: 'name',
			message: 'O nome é obrigatório.',
		});
	}

	if (
		user.email &&
		user.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]*/) == null
	) {
		errors.push({
			field: 'email',
			message: 'Email inválido',
		});
	}

	if (!user.password) {
		errors.push({
			field: 'password',
			message: 'Senha é um campo obrigatório',
		});
	}

	return errors.length > 0 ? errors : null;
};

module.exports = userValidator;
