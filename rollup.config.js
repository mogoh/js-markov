import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';


const isProduction = process.env.BUILD === 'production';
const min = isProduction ? 'min.' : '';


export default [{
    input: [
        './src/Markov.ts',
        './src/MarkovString.ts',
        './src/MarkovNumber.ts',
        './src/MarkovGeneric.ts',
    ],
    output: {
        dir: 'dist/',
        format: 'esm',
        entryFileNames: `[name].${min}js`,
        sourcemap: !isProduction,
        compact: isProduction,
        minifyInternalExports: isProduction,
    },
    plugins: [
        nodeResolve(),
        typescript(),
        isProduction && terser(),
    ]
}];