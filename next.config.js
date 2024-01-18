/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		styledComponents: true,
	},
	env: {
		SESSION_PASSWORD: '4321'
	},
	images: {

		remotePatterns: [
			{
				protocol: 'https',
				hostname: '*'
			},
		],
	}
}

// eslint-disable-next-line no-undef
module.exports = nextConfig
