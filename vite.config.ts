import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig, UserConfig } from 'vite';

export default defineConfig({
  plugins: [reactRefresh()],
  // resolve: {
  //   alias: [
  //     { find: '@', replacement: '/src' },
  //     // { find: 'style', replacement: '/src/style' },
  //     // { find: 'components', replacement: '/src/components' },
  //     // { find: 'assets', replacement: '/src/assets' },
  //   ],
  // },
}) as UserConfig;
