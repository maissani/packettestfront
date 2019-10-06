/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');

const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const nextRuntimeDotenv = require('next-runtime-dotenv');
/* eslint-enable @typescript-eslint/no-var-requires */

const withConfig = nextRuntimeDotenv({
	public: ['API_URL', 'API_KEY'],
});

module.exports = withConfig(
	withPlugins([[withTypescript], [withCSS], [withSass], [withBundleAnalyzer]], {
    webpack(config, options) {
      // do something here which only gets applied during development server phase
			config.module.rules.push({
				test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 100000,
						name: '[name].[ext]'
					}
				}
			})
      return config;
    },
		analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
		analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
		bundleAnalyzerConfig: {
			server: {
				analyzerMode: 'static',
				reportFilename: '../bundles/server.html',
			},
			browser: {
				analyzerMode: 'static',
				reportFilename: '../bundles/client.html',
			},
		},
	}),
);
