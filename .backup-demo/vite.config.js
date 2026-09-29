import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  envDir: "../worksheet", // reuse the key from worksheet/.env
  server: { port: 5174 },
});
