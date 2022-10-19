import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";
import mkcert from "vite-plugin-mkcert"; //ssl 인증 라이브러리
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), tsconfigPaths(), mkcert(), svgr()],
    server: {
      host: true,
      port: 3000,
      https: true,
      proxy: {
        "/api": {
          target: "http://adddomain",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    preview: {
      host: true,
      port: 8080,
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
  };
});
