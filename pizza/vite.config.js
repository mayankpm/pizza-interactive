import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      'react/jsx-runtime': 'react/jsx-runtime', // For React 17+
    },
  },
  assetsInclude: ['**/*.glb'],
  server:{
    mimeTypes: {
      'js': 'application/javascript',
    }
  }
});
