import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import scss from "rollup-plugin-scss";
import { terser } from "rollup-plugin-terser";
import babel from "rollup-plugin-babel";
import pkg from "./package.json";

export default [
    {
        input: "src/index.js", // your entry point
        output: {
            name: "walkthrough-js-dev", // package name
            file: pkg.browser,
            format: "umd",
        },
        plugins: [
            terser(),
            resolve(),
            commonjs(),
            scss({
                output: "dist/index.min.css",
                outputStyle: "compressed",
            }),
            babel({
                exclude: ["node_modules/**"],
            }),
        ],
    },
    {
        input: "src/index.js", // your entry point
        output: [
            { file: pkg.main, format: "cjs" },
            { file: pkg.module, format: "es" },
        ],
        plugins: [
            terser(),
            scss({
                output: "dist/index.min.css",
                outputStyle: "compressed",
            }),
            babel({
                exclude: ["node_modules/**"],
            }),
        ],
    },
];
