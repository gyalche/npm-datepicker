import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import babel from 'rollup-plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/bundle.cjs.js', // CommonJS output
      format: 'cjs',
      exports: 'auto',
    },
    {
      file: 'dist/bundle.esm.js', // ES module output
      format: 'esm',
    },
  ],
  plugins: [
    peerDepsExternal(),
    nodeResolve({
      extensions: ['.js', '.jsx'], // Add .jsx to the extensions
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
  ],
  external: ['react', 'react-dom', 'styled-components'],
};
