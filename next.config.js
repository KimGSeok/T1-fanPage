/** @type {import('next').NextConfig} */
const stylexPlugin = require('@stylexjs/nextjs-plugin');
const nextConfig = {}

module.exports = stylexPlugin({
  experimental: {
    forceSwcTransforms: true,
  },
  rootDir: __dirname,
})(nextConfig);