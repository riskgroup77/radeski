import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import { clinicChatPlugin } from './server/viteChatPlugin';
import { loadProjectEnv } from './server/loadEnv';

export default defineConfig(({ mode }) => {
  loadProjectEnv(loadEnv(mode, process.cwd(), ''));

  // Mirrors the nginx setup on radeski.uz so dev and production share one code path.
  const apiTarget = process.env.VITE_API_PROXY_TARGET || 'https://api.radeski.uz';
  const apiProxy = {
    target: apiTarget,
    changeOrigin: true,
    secure: true,
  };

  return {
    plugins: [react(), tailwindcss(), clinicChatPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      port: 3000,
      strictPort: true,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {
        ignored: ['**/*.rar', '**/*.zip', '**/*.7z'],
      },
      proxy: {
        '/api': {
          ...apiProxy,
          // /api/chat is handled locally by clinicChatPlugin, not by the clinic API.
          bypass: (req) => (req.url?.startsWith('/api/chat') ? req.url : undefined),
        },
        '/uploads': apiProxy,
      },
    },
  };
});
