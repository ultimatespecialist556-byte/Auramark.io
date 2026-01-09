import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    
    // IMPORTANT: Update this with your actual GitHub repository name
    // For example, if your repo is: https://github.com/username/my-repo
    // Then set repoName to: 'my-repo'
    const repoName = process.env.GITHUB_REPOSITORY 
      ? process.env.GITHUB_REPOSITORY.split('/')[1] 
      : (process.env.VITE_BASE || 'copy-of-creativemark---digital-marketing-agency');
    
    // Use base path for production builds (GitHub Pages requires this)
    // For local development, use '/' (root)
    const base = mode === 'production' ? `/${repoName}/` : '/';
    
    return {
      base: base,
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: false,
        emptyOutDir: true,
      }
    };
});
