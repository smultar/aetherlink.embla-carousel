/** @type {import('next').NextConfig} */
const dependencies = require('./package.json');

const nextConfig = {
	swcMinify: false,
	reactStrictMode: true,
	experimental: {
		typedRoutes: true,
	},
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	env: {
		VERSION: dependencies.version,
	},

	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**.aetherlink.app',
			},
		],
	},
};

module.exports = nextConfig;
