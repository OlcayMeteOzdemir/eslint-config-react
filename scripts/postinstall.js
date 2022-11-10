const fs = require('fs');
const path = require('path');

const configPath = path.join(process.env.INIT_CWD, '.eslintrc.js');
const ignorePath = path.join(process.env.INIT_CWD, '.eslintignore');

if (fs.existsSync(configPath)) {
	fs.readFile(configPath, 'utf8', (err, data) => {
		fs.writeFileSync(
			configPath,
			data.replace(/@meteozdemir\/eslint-config-core/g, '@meteozdemir/eslint-config-react'),
		);
	});
}

if (!fs.existsSync(configPath)) {
	fs.writeFileSync(
		configPath,
		"module.exports = {\n\textends: [\n\t\t'@meteozdemir/eslint-config-react',\n\t\t'@meteozdemir/eslint-config-react/rules/prettier',\n\t],\n\trules: {},\n};\n",
	);
}

if (!fs.existsSync(ignorePath)) {
	fs.writeFileSync(ignorePath, 'node_modules\n');
}
