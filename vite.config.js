import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/mkGerber-port/",
  assetsInclude: ["**/*.MOV"], // Include `.MOV` files in the build
});
