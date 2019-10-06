const devProxy = {
	'/api': {
		target: 'https://localhost:3000',
		pathRewrite: { '^/api': '' },
		changeOrigin: true,
	},
};

module.exports = devProxy;
