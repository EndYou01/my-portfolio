import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  plugins: [
    react({
      include: /\.(js|jsx|ts|tsx)$/,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  esbuild: {
    loader: 'tsx',
    include: /src\/.*\.[jt]sx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { '.js': 'jsx' },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      onwarn(warning, warn) {
        if (
          warning.code === 'INVALID_ANNOTATION' &&
          warning.message?.includes('/*#__PURE__*/')
        ) {
          return
        }
        warn(warning)
      },
    },
  },
  ssr: {
    noExternal: [
      'react-icons',
      'react-i18next',
      'i18next',
      'swiper',
      'react-medium-image-zoom',
      'react-awesome-reveal',
      'react-lazy-load-image-component',
      'react-wavify',
    ],
  },
})
