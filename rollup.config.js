import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";

const devMode = process.env.NODE_ENV === "development";
console.log(`${devMode ? "development" : "production"} mode bundle`);

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: "dist/index.esm.js",
        format: "es",
        sourcemap: devMode ? "inline" : false,
      },
      {
        file: "dist/index.cjs.js",
        format: "cjs",
        sourcemap: devMode ? "inline" : false,
        plugins: [
          terser({
            ecma: 2020,
            mangle: { toplevel: true },
            compress: {
              module: true,
              toplevel: true,
              unsafe_arrows: true,
              drop_console: !devMode,
              drop_debugger: !devMode,
            },
            output: { quote_style: 1 },
          }),
        ],
      },
    ],
    plugins: [
      babel({
        exclude: "node_modules/**",
        babelHelpers: "bundled",
      }),
      resolve(),
      commonjs(),
    ],
  },
];
