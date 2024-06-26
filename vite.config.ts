import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// biome-ignore lint/style/noDefaultExport: vite expects it to be default
export default defineConfig({
	plugins: [react()],
});
