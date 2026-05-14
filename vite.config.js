import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["arrow-employee-corrected-stand.trycloudflare.com"],
  },
  build: {
    outDir: "build",
  },
});
