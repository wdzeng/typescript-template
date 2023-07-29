#!/usr/bin/env node

const fs = require('node:fs')
const path = require('node:path')

const { build } = require('esbuild')

const packageJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.json')))
const version = packageJson.version

const options = {
  entryPoints: ['./src/main.ts'],
  outfile: './dist/index.cjs',
  bundle: true,
  platform: 'node',
  target: 'node18',
  minify: true,
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
  }
}

build(options).catch(() => process.exit(1))
