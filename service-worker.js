/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/hexo/public/404.html","f825dc5be4e183ac67c9c058cbd1704a"],["D:/hexo/public/about/index.html","e67a76f782c8fadf9663a6ac58c6b3b7"],["D:/hexo/public/archives/2020/01/index.html","852dcda881cb2d1c9e84c1ebd32c151d"],["D:/hexo/public/archives/2020/02/index.html","19c2c327728916359dcd174d71a6bc87"],["D:/hexo/public/archives/2020/03/index.html","c4e3222249a6e25042e456c43ae2e8c1"],["D:/hexo/public/archives/2020/05/index.html","07dac6b9617ca218d8507a1c729a2c50"],["D:/hexo/public/archives/2020/09/index.html","99a3225ac8c228cdd81f8c970b8f38d6"],["D:/hexo/public/archives/2020/index.html","d84ff0f3c71d0d64957f3b1b883c6e46"],["D:/hexo/public/archives/2020/page/2/index.html","7c0e6ee4fd89386623c5cb2236cb6ff0"],["D:/hexo/public/archives/2021/01/index.html","824992047d3a99d8fff8def3cf9feacf"],["D:/hexo/public/archives/2021/index.html","3ddd18ace74805bddb430e54a61acaee"],["D:/hexo/public/archives/index.html","286f1f29b2b95eea8a330ee39b2d026a"],["D:/hexo/public/archives/page/2/index.html","19018473121a9874a7bdcd4eaa75888f"],["D:/hexo/public/categories/Hibernate/index.html","d8923d31268de1d29f28fbd7a3f29e58"],["D:/hexo/public/categories/JavaWeb/index.html","e78c3fd03d1ec7d422dd878b01952f65"],["D:/hexo/public/categories/Java爬虫实战/index.html","b8bf777ea9bb1fa4bd3ed1943d50fcfd"],["D:/hexo/public/categories/VPN/index.html","671c98d37d219d3097f8ee00931b8cb8"],["D:/hexo/public/categories/VPN/v2ray/index.html","a01a135fa5b3f0ba2e0c2aded688d3fa"],["D:/hexo/public/categories/VPN/v2ray/外网/index.html","b0ceee04807dbc719d95028ca7b5a18d"],["D:/hexo/public/categories/index.html","871c4d7df1d33bdc11bca96bde4191dc"],["D:/hexo/public/categories/springBoot/index.html","db2988be77e46207aeadaedaa241d867"],["D:/hexo/public/categories/分布式系统/index.html","1b795570684d9770275946bb4c6fca3d"],["D:/hexo/public/categories/博客/index.html","81ba264bb422400f627c13039af99777"],["D:/hexo/public/categories/魔改/index.html","43e96ac38a61ba5e97ea27e5232d5d57"],["D:/hexo/public/css/index.css","f95a2480ac052e93a95d563518230620"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/css/yang.css","5fb8d83e661214a385805a7a965b9d42"],["D:/hexo/public/images/2018-02-04_123955.png","ed078d7c679a69af7a86e3722d67d18c"],["D:/hexo/public/images/20180101112125849.png","1c6a4a42e37ccf0e802d392825b76577"],["D:/hexo/public/images/20180101112152464.png","ab2cca8ef19f0baabc4fdf49caca5e15"],["D:/hexo/public/images/20180802154402427.png","2f9105812717ea6dce21863d1fe7012d"],["D:/hexo/public/images/2018080215454373.png","e68b206a15dc6978902f01f4b22356c7"],["D:/hexo/public/images/20180802155336302.png","3ad4c4652155a94b0192b3f340932909"],["D:/hexo/public/images/20180802155459346.png","943e97d4c9187407e4f1fcbe5a74a1d7"],["D:/hexo/public/images/20180802155701855.png","3219a26e99428af34bb1a4e50f055da4"],["D:/hexo/public/images/20180802155907712.png","ab0c9c535ae763cfed6b5ba1fd55f05d"],["D:/hexo/public/images/20180802160015673.png","d7987006e10a4f7279fceb49af5425a3"],["D:/hexo/public/images/20180802160155483.png","ff19dee77efe753462747674c044afeb"],["D:/hexo/public/images/20180802160324418.png","df132b80d1fc64b0936c116bc64df88e"],["D:/hexo/public/images/20180802160343802.png","74e16a031bc0f08d6e60c64609e145f7"],["D:/hexo/public/images/20180802160421785.png","58a19f97a09e312a401a12c100dc6867"],["D:/hexo/public/images/2018080216053733.png","42369b55d3c083d1a1859c97793f4bb1"],["D:/hexo/public/images/2018080216061165.png","9455e9bbf7500c0fdbdae61dea9ba7e6"],["D:/hexo/public/images/20180802160735370.png","7eecfa2f1e49fd8369de220f58818c93"],["D:/hexo/public/images/20180802161039348.png","cbbe9001fc76deaf202403747061bc9b"],["D:/hexo/public/images/20180802161209660.png","1297d34362a074647d2f3d76f567d6ad"],["D:/hexo/public/images/20180802161235917.png","e1dbb176df7dc6e3f690cca240a04f10"],["D:/hexo/public/images/20180802162415963.png","c14059ae83f511c7e37558aa2b2333a8"],["D:/hexo/public/images/2019-12-02.png","5e6ee7662f06b252ef339eaaea6c7f37"],["D:/hexo/public/images/2020-09-01_111547.png","e4b83badd1e2d04a7ba3e346048f8c1d"],["D:/hexo/public/images/2020-09-01_113102.png","278059bc532177a5d9f4217054a728e2"],["D:/hexo/public/images/2020-09-01_114439.png","d20a2b1a6c35d7b4f14085d2f84a6980"],["D:/hexo/public/images/2020-09-01_114756.png","f64054ee1c48a0d47dc3de4f6c8fe9bd"],["D:/hexo/public/images/2020-09-01_115205.png","3a8d84706b0d6bda76fe6154ce374b80"],["D:/hexo/public/images/2020-09-01_115538.png","61d3cfada5549b7c2eb3ced8dba8fec8"],["D:/hexo/public/images/2020-09-01_140055.png","419d94d3452f3636e930d25fb27fcd23"],["D:/hexo/public/images/2020-09-07_112951.png","0b72341fee8dce0311b06e78083e9679"],["D:/hexo/public/images/2020-09-07_113458.png","c2f9e8fabdb49625f9f73c6053179e70"],["D:/hexo/public/images/2020-09-07_115010.png","0b2c42faac4cfbc075066755e3f092a4"],["D:/hexo/public/images/2020-09-07_115115.png","199c9a88da2dc2d14b71bd11329c6a81"],["D:/hexo/public/images/2020-09-14_173015.png","63a00abfb1c8388456c0a89ef842f7a4"],["D:/hexo/public/images/2020-09-30_102333.png","6cbc389e005500fd838c8a43f5442a6f"],["D:/hexo/public/images/2020-09-30_102409.png","1f19b45b75d401a4e3ec0013466a509b"],["D:/hexo/public/images/2020-09-30_102419.png","d69147b57f7e2d52e1f15398c072f04c"],["D:/hexo/public/images/2020-09-30_103028.png","b14f781547a0d07e085f2a9d40e780e1"],["D:/hexo/public/images/2020-09-30_103251.png","edab7c9f6df5a3d93c3ecbd8b9c603a9"],["D:/hexo/public/images/2020-09-30_103349.png","0ea6dc5b5e036414ed88e1c5d0519646"],["D:/hexo/public/images/2020-09-30_103444.png","09eb73f6acfbc6a9e01ca2e21a6c8ad1"],["D:/hexo/public/images/2020-09-30_103537.png","f3e94d17a074d38591c393a18989e102"],["D:/hexo/public/images/2020-09-30_113145.png","c78a6ccd638165b9cf1be2f5b7728101"],["D:/hexo/public/images/683017.jpg","e6ef683f45155650f4e4f79d96872904"],["D:/hexo/public/images/960489.png","4b0c82073d69fe20cb936247504ca54d"],["D:/hexo/public/images/alipa.jpg","0c7c3e4a0581a94866e8830df5b6a863"],["D:/hexo/public/images/avstar.jpg","9705585dd2471d1556d38abe3827a51a"],["D:/hexo/public/images/concrete-bindings.png","d8261ab119309917e25180ef0ae42abe"],["D:/hexo/public/images/hexo.jpg","2c0e4aa03bfd633ee57da5f5a24b37bc"],["D:/hexo/public/images/legacy.png","bbbef4dcd5b7d5d3d8aa782353fa7001"],["D:/hexo/public/images/template-engine.png","66a3b2ab6f787cae4ad962077475701e"],["D:/hexo/public/images/wechat.jpg","0f6ceaa137ffd901018f026036c4f5ce"],["D:/hexo/public/images/微信图片_20200930102455.png","b63ed9decd79d6eb5c6836455991ebd9"],["D:/hexo/public/images/微信图片_20200930102502.png","989023fd440c223c831ebde84e20c44a"],["D:/hexo/public/images/微信图片_20200930102507.png","962611146b8b745be6e21acfd75e7c3d"],["D:/hexo/public/images/微信图片_20200930102511.png","8e0e0559a95bce058e8ec90568997eb2"],["D:/hexo/public/images/微信图片_20200930105726.jpg","91521162e197f5a1944a83bf8593b4c8"],["D:/hexo/public/images/微信图片_20200930105734.jpg","aa7510538e421e32421755d59c941a38"],["D:/hexo/public/images/微信图片_20200930105738.jpg","484a0328e049ff80f5e30a1b9830200d"],["D:/hexo/public/images/微信图片_20200930105740.jpg","6e14011134c2c332362a2c9a4c01f44d"],["D:/hexo/public/images/微信图片_20200930105745.jpg","0d66db34f6e8ceb8904081bc1220ea3f"],["D:/hexo/public/images/微信图片_20200930105749.jpg","dadef0b1eb5f561344bffffa048b1035"],["D:/hexo/public/images/搜狗截图20180129151045.png","32ccf45eea5acca03197633ddef9d4ed"],["D:/hexo/public/images/搜狗截图20180129151112.png","0b7ebe430f9d6db6996b5d03300d8c92"],["D:/hexo/public/images/搜狗截图20180129224104.png","36a76756e768cc525e35d622ff900044"],["D:/hexo/public/images/搜狗截图20180130161620.png","e1cd9a5d6fad50205dc7d588bb8b98c1"],["D:/hexo/public/images/搜狗截图20180131220946.png","337f6c65f683b280d826e436fd1fcec3"],["D:/hexo/public/images/搜狗截图20180131221411.png","8a4448248bde08d34f9b9d273ddc4546"],["D:/hexo/public/images/搜狗截图20180203164743.png","3427f2cf3e1f6d83086bf420fdc189d8"],["D:/hexo/public/images/搜狗截图20180203181108.png","09630bb6ecd281564bb075ae1e5cf607"],["D:/hexo/public/images/搜狗截图20180203181751.png","1eb2062e67061945f91d23d8b24b253e"],["D:/hexo/public/images/搜狗截图20180211130621.png","944545549c9dbc914298c7f75dd06110"],["D:/hexo/public/images/搜狗截图20180211130721.png","146046ab452f8f6b80fa3692b050ff7d"],["D:/hexo/public/images/搜狗截图20180211134506.png","398f017a88a181ad2cb7713632b74235"],["D:/hexo/public/images/搜狗截图20180226173408.png","2d314aa4ad7f050deb17d829ed8ec157"],["D:/hexo/public/images/搜狗截图20180226173527.png","272deb8306b563043ea3d3e8845a4d67"],["D:/hexo/public/images/搜狗截图20180226180347.png","78fe44db0d738c6c528cd697fcbcd0f4"],["D:/hexo/public/images/搜狗截图20180226180504.png","c5dea80336305ba5e1d33ff396953392"],["D:/hexo/public/images/搜狗截图20180228135513.png","39e6016bfe8b2d8cbd7cc78442afaf6e"],["D:/hexo/public/images/搜狗截图20180301142915.png","9727319b3a0dac8b1a02d18fc247fa58"],["D:/hexo/public/images/搜狗截图20180302114401.png","5976cf831cf2f366f32b57781500f27a"],["D:/hexo/public/images/搜狗截图20180302144835.png","a9498b3c9cc37cd584f4cc7ab33bceea"],["D:/hexo/public/images/搜狗截图20180302144910.png","1fab6eb94cba5acdf5c1a1a639ce553e"],["D:/hexo/public/images/搜狗截图20180302221835.png","b192b776d60e65d6b24d6eef3ed98b56"],["D:/hexo/public/images/搜狗截图20180303145450.png","b72094f2dc137f642b258d659ba7c5de"],["D:/hexo/public/images/搜狗截图20180303145531.png","0192e016514ae6de37acb335483c6365"],["D:/hexo/public/images/搜狗截图20180303165113.png","57658a824fedd4daf6c46fb28ddf9a2e"],["D:/hexo/public/images/搜狗截图20180305194443.png","2dac84a86c0ba78de4520f8d983edf3a"],["D:/hexo/public/images/搜狗截图20180306105412.png","76a313ae8af0ec0a841ad45704ce2fb8"],["D:/hexo/public/images/搜狗截图20180306145727.png","47c4980736ad35a211aba130f2fcd116"],["D:/hexo/public/images/搜狗截图20180306145855.png","f99a90f28a4216d3ede462d9bd7c2b81"],["D:/hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/index.html","973bc82365f7478571d988e1d96fc141"],["D:/hexo/public/js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["D:/hexo/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/hexo/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/hexo/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["D:/hexo/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/hexo/public/js/yang.js","60bf82bdc8136c63b08c12e191e459f8"],["D:/hexo/public/link/index.html","4318c0c3e2d6def435044546f35c64a7"],["D:/hexo/public/music/index.html","831c8e28d269eb39f74431781745b076"],["D:/hexo/public/page/2/index.html","3c641c75b25a0c5be041c1395c55680a"],["D:/hexo/public/photos/index.html","00bdf74811163be2bc42beb7d652eb09"],["D:/hexo/public/posts/16fcf8c4.html","8ad58e5475bfb0f7346ebb325be7757a"],["D:/hexo/public/posts/22603.html","a2add40cc43119202bf9f1699b00f43d"],["D:/hexo/public/posts/24021.html","6fc1e5c4feccd9f40159dfa6e99bdb8f"],["D:/hexo/public/posts/2402123.html","d786fb9fb6301b8ed43927b052b144d1"],["D:/hexo/public/posts/240225.html","a615f1432502e2c654349d7279c38901"],["D:/hexo/public/posts/34379.html","c6a0f72059b4631d73be0195065bcdc0"],["D:/hexo/public/posts/43405.html","cc167f0241857f91bb59e24192de5968"],["D:/hexo/public/posts/47248.html","644120ef14dcd7354990bc3241f38901"],["D:/hexo/public/posts/53627.html","c9e2bba472217d99d3004bea797a4335"],["D:/hexo/public/posts/541bf5af.html","fe056ded2cf8a0215f0b3fe825638d77"],["D:/hexo/public/posts/59292.html","55e7c79dd8516e37074f8fbe7f1b660a"],["D:/hexo/public/posts/6de61336.html","51b8868dc32fb483cc0c23def51a01af"],["D:/hexo/public/self/Kimbiedark.css","bdef73cbc20acaad310e3b5f4d27b022"],["D:/hexo/public/self/head.js","ac499f1535b1ef96dd92714af2504038"],["D:/hexo/public/shuoshuo/index.html","25183d3e30351ff9e14e06a3c3eda1b4"],["D:/hexo/public/tags/400-404-500-405/index.html","396ed2d8dc0c65e3e21545d709c93bec"],["D:/hexo/public/tags/Hibernate/index.html","d93b37b5c0303ea235ca04c4dcf9f3a5"],["D:/hexo/public/tags/Java爬虫/index.html","60fe244471871e3e7474dae091cfab82"],["D:/hexo/public/tags/Java爬虫实战/index.html","cea95f7abb54057b500b73d7f860aedf"],["D:/hexo/public/tags/Markdowm语法/index.html","7eae837e3019a7778c2330f7c3b5b589"],["D:/hexo/public/tags/Maven/index.html","05e2bfc794ea947a40cef692a5a0d653"],["D:/hexo/public/tags/SpringMVC/index.html","fe23ca0de457ff70436bb9cee4de8777"],["D:/hexo/public/tags/Struts2/index.html","e7f3088ce3a395a05f3d0705238db0aa"],["D:/hexo/public/tags/VPN/index.html","48f432b0fbbfb2deb69745cb7f6080b9"],["D:/hexo/public/tags/github/index.html","9ecb02a8620b17eb548dc030ec9fb722"],["D:/hexo/public/tags/hexo/index.html","d63bf08f21b1f02454abee3d0191ab9b"],["D:/hexo/public/tags/index.html","6872a5d28d3e6df3ef06a318a6951ed5"],["D:/hexo/public/tags/java/index.html","ad5e386294503486e81cbcf01b2e224e"],["D:/hexo/public/tags/javaweb/index.html","ddf09cb97fd3e96b8858b35b6bb64ebc"],["D:/hexo/public/tags/jekyll/index.html","a25d53ccf2820216b7b6570b49e01141"],["D:/hexo/public/tags/mysql8/index.html","13805496fe8e297daa7e5ae80366f723"],["D:/hexo/public/tags/servlet/index.html","e98fcb642bebfc0210117560d2f2c4c3"],["D:/hexo/public/tags/springBoot/index.html","8ec06e72ab8d3c5a2f414c1086acab04"],["D:/hexo/public/tags/分布式系统/index.html","6b6d720e15b1c3bc237529f7354b0a56"],["D:/hexo/public/tags/博客/index.html","881a618b0e274dfef40a58f3f54f8952"],["D:/hexo/public/tags/搭建博客/index.html","4a4293b79df4b065c8bd3d4507f9c908"],["D:/hexo/public/tags/魔改/index.html","165053dbe214353a622cf3bdda7e176b"],["D:/hexo/public/wallpaper/index.html","f76f770e4d266f6ca3748126f07b250b"],["D:/hexo/public/wallpaper/wall/index.html","69313b9c451e4bc270269db8fcf67034"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







