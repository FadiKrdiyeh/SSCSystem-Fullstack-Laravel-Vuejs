import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
// import { resolve, parse } from 'vite';

export default defineConfig({
    // assetsInclude: [
    //     'resources/frontend/assets/images/home_bg.PNG',
    // ],

    plugins: [
        laravel({
            input: [
                // CSS files
                'node_modules/font-awesome-scss/scss/font-awesome.scss',
                'node_modules/bootstrap/scss/bootstrap.scss',
                'resources/scss/app.scss',

                // Javascript files...
                'node_modules/jquery/dist/jquery.min.js',
                'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
                'resources/js/app.js',
                'resources/frontend/app.js',
            ],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    // The Vue plugin will re-write asset URLs, when referenced
                    // in Single File Components, to point to the Laravel web
                    // server. Setting this to `null` allows the Laravel plugin
                    // to instead re-write asset URLs to point to the Vite
                    // server instead.
                    base: null,

                    // The Vue plugin will parse absolute URLs and treat them
                    // as absolute paths to files on disk. Setting this to
                    // `false` will leave absolute URLs un-touched so they can
                    // reference assets in the public directory as expected.
                    includeAbsolute: false,
                },
            },
        }),
    ],





//     base: '/',
//   root: resolve(__dirname, 'app'),

//   build: {
//     outDir: '../dist',
//     emptyOutDir: true,

//     rollupOptions: {
//       output: {
//         assetFileNames: (asset) => {
//           if (parse(asset.name).name === 'externalImage') {
//             return "images/src/[name][extname]";
//           }
//           return "assets/[name].[hash][extname]";
//         }
//       },
//     },
//   },
});
