if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return i[e]||(a=new Promise((async a=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},a=(a,i)=>{Promise.all(a.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(a)};self.define=(a,n,r)=>{i[a]||(i[a]=Promise.resolve().then((()=>{let i={};const o={uri:location.origin+a.slice(1)};return Promise.all(n.map((a=>{switch(a){case"exports":return i;case"module":return o;default:return e(a)}}))).then((e=>{const a=r(...e);return i.default||(i.default=a),i}))})))}}define("./sw.js",["./workbox-8778d57b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/0kY4yexpz-B1MSCGzbsFe/_buildManifest.js",revision:"0kY4yexpz-B1MSCGzbsFe"},{url:"/_next/static/0kY4yexpz-B1MSCGzbsFe/_ssgManifest.js",revision:"0kY4yexpz-B1MSCGzbsFe"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.c03b06ed0b290d3c7476.js",revision:"0kY4yexpz-B1MSCGzbsFe"},{url:"/_next/static/chunks/framework.7e70a00882840d8b4939.js",revision:"0kY4yexpz-B1MSCGzbsFe"},{url:"/_next/static/chunks/main-78849ca0bb7ec4d3bf39.js",revision:"0kY4yexpz-B1MSCGzbsFe"},{url:"/_next/static/chunks/pages/_app-29e0c31136938879f265.js",revision:"0kY4yexpz-B1MSCGzbsFe"},{url:"/_next/static/chunks/pages/_error-85785763783c1e33a9f3.js",revision:"0kY4yexpz-B1MSCGzbsFe"},{url:"/_next/static/chunks/pages/index-296a05cfa8f02233acc6.js",revision:"0kY4yexpz-B1MSCGzbsFe"},{url:"/_next/static/chunks/polyfills-c735eb10728da30b4a47.js",revision:"0kY4yexpz-B1MSCGzbsFe"},{url:"/_next/static/chunks/webpack-95c2b224bccf352ee870.js",revision:"0kY4yexpz-B1MSCGzbsFe"},{url:"/favicon.ico",revision:"6ffd54e77e8e783ae190ebddd0161c34"},{url:"/icons/android-icon-192x192.jpg",revision:"e70962785e1b593c142d884dd4799ac2"},{url:"/icons/apple-icon-114x114.jpg",revision:"0cdc4ab5d5cd9b8880e4bb78b999917b"},{url:"/icons/apple-icon-120x120.jpg",revision:"2c0ca33c92c898d59a2df820bb240e1d"},{url:"/icons/apple-icon-144x144.jpg",revision:"2412ebc5236269a3fca12d839b52a5dd"},{url:"/icons/apple-icon-152x152.jpg",revision:"8faaf7192b2a5efed7f6d7a0a7666608"},{url:"/icons/apple-icon-180x180.jpg",revision:"7e80bae04f7ddf0c69eac3a88a83fc04"},{url:"/icons/apple-icon-57x57.jpg",revision:"425c1460185b8621cd3eb874978da2cb"},{url:"/icons/apple-icon-60x60.jpg",revision:"7abc93040d8a7095d540366c60d487c8"},{url:"/icons/apple-icon-72x72.jpg",revision:"e78a04dbb6ae7add22f247931c673739"},{url:"/icons/apple-icon-76x76.jpg",revision:"ea8f11a5294a75ae7a93560fdf385851"},{url:"/icons/favicon-16x16.jpg",revision:"5c3ef7cadc41863662c1fe68e2118498"},{url:"/icons/favicon-32x32.jpg",revision:"f92f9c5aabf12f8227772032bc78a905"},{url:"/icons/favicon-96x96.jpg",revision:"e4d9e1517461e08b3a690ff4947fedc1"},{url:"/img/Brand/Logo_Horizontal/On Dark.jpg",revision:"f6cbd6633a714f2292de176a051abb0b"},{url:"/img/Brand/Logo_Horizontal/On Dark.png",revision:"67c714ba8a2bdf09ee454641853bf831"},{url:"/img/Brand/Logo_Horizontal/On Dark.svg",revision:"02cdd49e2ecbe5e7bf9acab9a847f21f"},{url:"/img/Brand/Logo_Horizontal/On Dark.webp",revision:"56fbafb8d958e0c44b4dcff265a4ba6b"},{url:"/img/Brand/Logo_Horizontal/On Light.jpg",revision:"eea98a47646066e368532b448ec396a1"},{url:"/img/Brand/Logo_Horizontal/On Light.png",revision:"173183bae7478d655e5f017f57543547"},{url:"/img/Brand/Logo_Horizontal/On Light.svg",revision:"6065f433a54e61fb951525b041239dbf"},{url:"/img/Brand/Logo_Horizontal/On Light.webp",revision:"1f4dcc77b7253325ed32b1142ff30af4"},{url:"/img/Brand/Logo_Small/On Dark.jpg",revision:"5529c3594488d8058345ca6a82107578"},{url:"/img/Brand/Logo_Small/On Dark.png",revision:"f020fbb7d7f2892a1ae8bf287bc8662a"},{url:"/img/Brand/Logo_Small/On Dark.svg",revision:"585ce479a9ad8cd4a9e63bf8af851433"},{url:"/img/Brand/Logo_Small/On Dark.webp",revision:"0db31a4b43d061ab64e19ffd5d20e5df"},{url:"/img/Brand/Logo_Small/On Light.jpg",revision:"d41db7cdcafca65cb78acbb584cd1080"},{url:"/img/Brand/Logo_Small/On Light.png",revision:"66f088ec01e12b5c6dbc8ea00571bf4b"},{url:"/img/Brand/Logo_Small/On Light.svg",revision:"97b8a9971b3856236c65db5779cc0e7c"},{url:"/img/Brand/Logo_Small/On Light.webp",revision:"948513d6906dab199b33cd2b28d0bcca"},{url:"/img/Brand/Logo_Vertical/On Dark.jpg",revision:"f4aba46885c8e34ee7ec84717956af0f"},{url:"/img/Brand/Logo_Vertical/On Dark.png",revision:"fe164ca581f3fe8d36ab17bdd3f63994"},{url:"/img/Brand/Logo_Vertical/On Dark.svg",revision:"813fbca0ad1c9f5118563b464a1d5706"},{url:"/img/Brand/Logo_Vertical/On Dark.webp",revision:"1160b9376a288b20113bf7c8818a4b5a"},{url:"/img/Brand/Logo_Vertical/On Light.jpg",revision:"b6e4d2261ded707f3132def7179cded8"},{url:"/img/Brand/Logo_Vertical/On Light.png",revision:"aa6b725129b22ea03bd1f753a03092ed"},{url:"/img/Brand/Logo_Vertical/On Light.svg",revision:"5f39460b4fba8514ee813ae2f902cb86"},{url:"/img/Brand/Logo_Vertical/On Light.webp",revision:"c885f8435fbc0cbbabdc1715901709f9"},{url:"/logo.svg",revision:"5f39460b4fba8514ee813ae2f902cb86"},{url:"/manifest.json",revision:"4ad2287ab1d7a1823636ea6aad2b403a"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
