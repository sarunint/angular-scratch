import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify-es'

export default {
  input: './out-tsc/app-aot/src/main.aot.js',
  output: {
    file: './dist/bundle.js',
    format: 'iife'
  },
  plugins: [
    commonjs({
      include: 'node_modules/**'
    }),
    resolve(),
    uglify()
  ]
};
