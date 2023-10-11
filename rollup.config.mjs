import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import autoprefixer from "autoprefixer";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from "rollup-plugin-postcss";
import postcssPresetEnv from "postcss-preset-env";
import packageJson from "./package.json" assert { type: "json" };
import stringHash from "string-hash";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),

      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),

      postcss({
        plugins: [
          postcssPresetEnv(),
          autoprefixer(),
        ],
        autoModules: false,
        onlyModules: false,
        modules: {
          generateScopedName: (name, filename, css) => {
            if (filename.includes('global')) {
              return name;
            }
            const hash = stringHash(css).toString(36).substring(0, 5);
            return `test_${name}_${hash}`;
          },
        },
        extensions: ['.css'],
        minimize: true,
        sourceMap: false,
      }),

      terser(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];