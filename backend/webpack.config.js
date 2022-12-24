import path from 'path';

const __dirname = path.resolve()

module.exports = {
  entry: './server.js',
  mode: 'production',
  target: 'node',
  output: {
    path: path.resolve(__dirname, '.'),
    filename: 'server.bundle.js'
  }
};