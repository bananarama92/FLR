"use strict";

import typescript from "@rollup/plugin-typescript";
import progress from "rollup-plugin-progress";
import serve from "rollup-plugin-serve";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import license from "rollup-plugin-license";

/* global process */

const LICENSE = `
FLR: Family Lock Rename

Copyright 2023-2024 Bananarama92

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
`.trim();

/** @type {import("rollup").RollupOptions} */
const config = {
    input: "src/index.ts",
    output: {
        name: "flr",
        file: "dist/flr.js",
        format: "iife",
        sourcemap: true,
    },
    treeshake: false,
    plugins: [
        progress({ clearLine: true }),
        resolve({ browser: true }),
        typescript({ tsconfig: "./tsconfig.json", inlineSources: true }),
        commonjs(),
        license({ banner: { content: LICENSE, commentStyle: "ignored" } }),
    ],
    onwarn(warning, warn) {
        switch (warning.code) {
            case "EVAL":
            case "CIRCULAR_DEPENDENCY":
                return;
            default:
                warn(warning);
        }
    },
};

if (!process.env.ROLLUP_WATCH) {
    config.plugins.push(terser());
}

if (process.env.ROLLUP_WATCH) {
    config.plugins.push(
        serve({
            contentBase: "dist",
            host: "localhost",
            port: 8082,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        }),
    );
}

export default config;
