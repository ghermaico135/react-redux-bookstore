/** @format */

import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
/*eslint-disable */
// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	plugins: [react()],
});
