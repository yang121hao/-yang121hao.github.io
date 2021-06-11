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

var precacheConfig = [["E:/hexo/public/404.html","9c9c512709a25c50fe5e80ab03bf9f1a"],["E:/hexo/public/about/index.html","a2e640a51436d9e200e22e6a7ff63f8b"],["E:/hexo/public/archives/2020/01/index.html","1f33bf0d869313e9569d46f486f00799"],["E:/hexo/public/archives/2020/02/index.html","8211b08e65efdd64897b86366f61b808"],["E:/hexo/public/archives/2020/03/index.html","f9ca3cb6cfd03a1e6ad6c7a66871ee55"],["E:/hexo/public/archives/2020/05/index.html","3c2c118674d368f2a606656e34194186"],["E:/hexo/public/archives/2020/09/index.html","c1d6d6312b0f77bcb9e09e37500971d6"],["E:/hexo/public/archives/2020/index.html","11ce5c58144b4ef8b2ac66b0b5384916"],["E:/hexo/public/archives/2020/page/2/index.html","b39fbf00a0f4397457ac4b977fe245fb"],["E:/hexo/public/archives/index.html","99c47ab685d34a84689dfc36a3134f91"],["E:/hexo/public/archives/page/2/index.html","54e6c56213283795266183e8c826bbbc"],["E:/hexo/public/categories/Hibernate/index.html","48f1583a8c7348c637fa56a5a16d5b67"],["E:/hexo/public/categories/JavaWeb/index.html","f9ab34bc26126b325983a6ab4ffef3a8"],["E:/hexo/public/categories/Java爬虫实战/index.html","2cc0088f185d6d05e0b27793db1a2b20"],["E:/hexo/public/categories/VPN/index.html","4b58f42bbfad76ae994187e23f7773b6"],["E:/hexo/public/categories/VPN/v2ray/index.html","f8d9fb6cc5bb28911061714e56b793c2"],["E:/hexo/public/categories/VPN/v2ray/外网/index.html","94810ed6848caceb8aa10a94a40d8ae9"],["E:/hexo/public/categories/index.html","eb82caa51c325d21bdd75dbaf2b64360"],["E:/hexo/public/categories/springBoot/index.html","24d3f18f164ba51daad9bf8bb477d4c5"],["E:/hexo/public/categories/分布式系统/index.html","216b6d0f8d8d3defb06cac2bd79a4aed"],["E:/hexo/public/categories/博客/index.html","722ce42510c19e5d71ddf84468abcd40"],["E:/hexo/public/comments/index.html","02c3d11aeadccc37b64008d7f4754d36"],["E:/hexo/public/css/icon.css","9a6b003bd87e91fdcf37e9c74dc3a007"],["E:/hexo/public/css/index.css","4f2e62bfccb365493aa1e91e71118575"],["E:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/hexo/public/css/yang.css","2ad94e080d23fbea703c6d0bd6a3f9ee"],["E:/hexo/public/images/2018-02-04_123955.png","ed078d7c679a69af7a86e3722d67d18c"],["E:/hexo/public/images/20180101112125849.png","1c6a4a42e37ccf0e802d392825b76577"],["E:/hexo/public/images/20180101112152464.png","ab2cca8ef19f0baabc4fdf49caca5e15"],["E:/hexo/public/images/20180802154402427.png","2f9105812717ea6dce21863d1fe7012d"],["E:/hexo/public/images/2018080215454373.png","e68b206a15dc6978902f01f4b22356c7"],["E:/hexo/public/images/20180802155336302.png","3ad4c4652155a94b0192b3f340932909"],["E:/hexo/public/images/20180802155459346.png","943e97d4c9187407e4f1fcbe5a74a1d7"],["E:/hexo/public/images/20180802155701855.png","3219a26e99428af34bb1a4e50f055da4"],["E:/hexo/public/images/20180802155907712.png","ab0c9c535ae763cfed6b5ba1fd55f05d"],["E:/hexo/public/images/20180802160015673.png","d7987006e10a4f7279fceb49af5425a3"],["E:/hexo/public/images/20180802160155483.png","ff19dee77efe753462747674c044afeb"],["E:/hexo/public/images/20180802160324418.png","df132b80d1fc64b0936c116bc64df88e"],["E:/hexo/public/images/20180802160343802.png","74e16a031bc0f08d6e60c64609e145f7"],["E:/hexo/public/images/20180802160421785.png","58a19f97a09e312a401a12c100dc6867"],["E:/hexo/public/images/2018080216053733.png","42369b55d3c083d1a1859c97793f4bb1"],["E:/hexo/public/images/2018080216061165.png","9455e9bbf7500c0fdbdae61dea9ba7e6"],["E:/hexo/public/images/20180802160735370.png","7eecfa2f1e49fd8369de220f58818c93"],["E:/hexo/public/images/20180802161039348.png","cbbe9001fc76deaf202403747061bc9b"],["E:/hexo/public/images/20180802161209660.png","1297d34362a074647d2f3d76f567d6ad"],["E:/hexo/public/images/20180802161235917.png","e1dbb176df7dc6e3f690cca240a04f10"],["E:/hexo/public/images/20180802162415963.png","c14059ae83f511c7e37558aa2b2333a8"],["E:/hexo/public/images/2019-12-02.png","5e6ee7662f06b252ef339eaaea6c7f37"],["E:/hexo/public/images/2020-09-01_111547.png","e4b83badd1e2d04a7ba3e346048f8c1d"],["E:/hexo/public/images/2020-09-01_113102.png","278059bc532177a5d9f4217054a728e2"],["E:/hexo/public/images/2020-09-01_114439.png","d20a2b1a6c35d7b4f14085d2f84a6980"],["E:/hexo/public/images/2020-09-01_114756.png","f64054ee1c48a0d47dc3de4f6c8fe9bd"],["E:/hexo/public/images/2020-09-01_115205.png","3a8d84706b0d6bda76fe6154ce374b80"],["E:/hexo/public/images/2020-09-01_115538.png","61d3cfada5549b7c2eb3ced8dba8fec8"],["E:/hexo/public/images/2020-09-01_140055.png","419d94d3452f3636e930d25fb27fcd23"],["E:/hexo/public/images/2020-09-07_112951.png","0b72341fee8dce0311b06e78083e9679"],["E:/hexo/public/images/2020-09-07_113458.png","c2f9e8fabdb49625f9f73c6053179e70"],["E:/hexo/public/images/2020-09-07_115010.png","0b2c42faac4cfbc075066755e3f092a4"],["E:/hexo/public/images/2020-09-07_115115.png","199c9a88da2dc2d14b71bd11329c6a81"],["E:/hexo/public/images/2020-09-14_173015.png","63a00abfb1c8388456c0a89ef842f7a4"],["E:/hexo/public/images/2020-09-30_102333.png","6cbc389e005500fd838c8a43f5442a6f"],["E:/hexo/public/images/2020-09-30_102409.png","1f19b45b75d401a4e3ec0013466a509b"],["E:/hexo/public/images/2020-09-30_102419.png","d69147b57f7e2d52e1f15398c072f04c"],["E:/hexo/public/images/2020-09-30_103028.png","b14f781547a0d07e085f2a9d40e780e1"],["E:/hexo/public/images/2020-09-30_103251.png","edab7c9f6df5a3d93c3ecbd8b9c603a9"],["E:/hexo/public/images/2020-09-30_103349.png","0ea6dc5b5e036414ed88e1c5d0519646"],["E:/hexo/public/images/2020-09-30_103444.png","09eb73f6acfbc6a9e01ca2e21a6c8ad1"],["E:/hexo/public/images/2020-09-30_103537.png","f3e94d17a074d38591c393a18989e102"],["E:/hexo/public/images/2020-09-30_113145.png","c78a6ccd638165b9cf1be2f5b7728101"],["E:/hexo/public/images/683017.jpg","e6ef683f45155650f4e4f79d96872904"],["E:/hexo/public/images/960489.png","4b0c82073d69fe20cb936247504ca54d"],["E:/hexo/public/images/alipa.jpg","0c7c3e4a0581a94866e8830df5b6a863"],["E:/hexo/public/images/avstar.jpg","9705585dd2471d1556d38abe3827a51a"],["E:/hexo/public/images/concrete-bindings.png","d8261ab119309917e25180ef0ae42abe"],["E:/hexo/public/images/hexo.jpg","2c0e4aa03bfd633ee57da5f5a24b37bc"],["E:/hexo/public/images/image-20210531173616231.png","8c5ef75c6757efb2ca3d4374abaefadd"],["E:/hexo/public/images/legacy.png","bbbef4dcd5b7d5d3d8aa782353fa7001"],["E:/hexo/public/images/template-engine.png","66a3b2ab6f787cae4ad962077475701e"],["E:/hexo/public/images/wechat.jpg","0f6ceaa137ffd901018f026036c4f5ce"],["E:/hexo/public/images/微信图片_20200930102455.png","b63ed9decd79d6eb5c6836455991ebd9"],["E:/hexo/public/images/微信图片_20200930102502.png","989023fd440c223c831ebde84e20c44a"],["E:/hexo/public/images/微信图片_20200930102507.png","962611146b8b745be6e21acfd75e7c3d"],["E:/hexo/public/images/微信图片_20200930102511.png","8e0e0559a95bce058e8ec90568997eb2"],["E:/hexo/public/images/微信图片_20200930105726.jpg","91521162e197f5a1944a83bf8593b4c8"],["E:/hexo/public/images/微信图片_20200930105734.jpg","aa7510538e421e32421755d59c941a38"],["E:/hexo/public/images/微信图片_20200930105738.jpg","484a0328e049ff80f5e30a1b9830200d"],["E:/hexo/public/images/微信图片_20200930105740.jpg","6e14011134c2c332362a2c9a4c01f44d"],["E:/hexo/public/images/微信图片_20200930105745.jpg","0d66db34f6e8ceb8904081bc1220ea3f"],["E:/hexo/public/images/微信图片_20200930105749.jpg","dadef0b1eb5f561344bffffa048b1035"],["E:/hexo/public/images/搜狗截图20180129151045.png","32ccf45eea5acca03197633ddef9d4ed"],["E:/hexo/public/images/搜狗截图20180129151112.png","0b7ebe430f9d6db6996b5d03300d8c92"],["E:/hexo/public/images/搜狗截图20180129224104.png","36a76756e768cc525e35d622ff900044"],["E:/hexo/public/images/搜狗截图20180130161620.png","e1cd9a5d6fad50205dc7d588bb8b98c1"],["E:/hexo/public/images/搜狗截图20180131220946.png","337f6c65f683b280d826e436fd1fcec3"],["E:/hexo/public/images/搜狗截图20180131221411.png","8a4448248bde08d34f9b9d273ddc4546"],["E:/hexo/public/images/搜狗截图20180203164743.png","3427f2cf3e1f6d83086bf420fdc189d8"],["E:/hexo/public/images/搜狗截图20180203181108.png","09630bb6ecd281564bb075ae1e5cf607"],["E:/hexo/public/images/搜狗截图20180203181751.png","1eb2062e67061945f91d23d8b24b253e"],["E:/hexo/public/images/搜狗截图20180211130621.png","944545549c9dbc914298c7f75dd06110"],["E:/hexo/public/images/搜狗截图20180211130721.png","146046ab452f8f6b80fa3692b050ff7d"],["E:/hexo/public/images/搜狗截图20180211134506.png","398f017a88a181ad2cb7713632b74235"],["E:/hexo/public/images/搜狗截图20180226173408.png","2d314aa4ad7f050deb17d829ed8ec157"],["E:/hexo/public/images/搜狗截图20180226173527.png","272deb8306b563043ea3d3e8845a4d67"],["E:/hexo/public/images/搜狗截图20180226180347.png","78fe44db0d738c6c528cd697fcbcd0f4"],["E:/hexo/public/images/搜狗截图20180226180504.png","c5dea80336305ba5e1d33ff396953392"],["E:/hexo/public/images/搜狗截图20180228135513.png","39e6016bfe8b2d8cbd7cc78442afaf6e"],["E:/hexo/public/images/搜狗截图20180301142915.png","9727319b3a0dac8b1a02d18fc247fa58"],["E:/hexo/public/images/搜狗截图20180302114401.png","5976cf831cf2f366f32b57781500f27a"],["E:/hexo/public/images/搜狗截图20180302144835.png","a9498b3c9cc37cd584f4cc7ab33bceea"],["E:/hexo/public/images/搜狗截图20180302144910.png","1fab6eb94cba5acdf5c1a1a639ce553e"],["E:/hexo/public/images/搜狗截图20180302221835.png","b192b776d60e65d6b24d6eef3ed98b56"],["E:/hexo/public/images/搜狗截图20180303145450.png","b72094f2dc137f642b258d659ba7c5de"],["E:/hexo/public/images/搜狗截图20180303145531.png","0192e016514ae6de37acb335483c6365"],["E:/hexo/public/images/搜狗截图20180303165113.png","57658a824fedd4daf6c46fb28ddf9a2e"],["E:/hexo/public/images/搜狗截图20180305194443.png","2dac84a86c0ba78de4520f8d983edf3a"],["E:/hexo/public/images/搜狗截图20180306105412.png","76a313ae8af0ec0a841ad45704ce2fb8"],["E:/hexo/public/images/搜狗截图20180306145727.png","47c4980736ad35a211aba130f2fcd116"],["E:/hexo/public/images/搜狗截图20180306145855.png","f99a90f28a4216d3ede462d9bd7c2b81"],["E:/hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/hexo/public/img/favicon.png","61e88c0c160e5507c1cd502d7f9bbc8b"],["E:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/hexo/public/index.html","4bae5f5d0d0d4f98328c48e1c47b141e"],["E:/hexo/public/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["E:/hexo/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["E:/hexo/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["E:/hexo/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["E:/hexo/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["E:/hexo/public/js/yang.js","60bf82bdc8136c63b08c12e191e459f8"],["E:/hexo/public/link/index.html","5fc4ad0a00b677deafa26b24994cc654"],["E:/hexo/public/music/index.html","ce236db709b6e6f365999756cdb7cd31"],["E:/hexo/public/page/2/index.html","fe57506fe0b4b6aaa25013804c15717b"],["E:/hexo/public/photos/index.html","82c7bb64a159b5f03a00068741656895"],["E:/hexo/public/posts/16fcf8c4.html","123ae09fe85e9fdd8523027bf04a00a2"],["E:/hexo/public/posts/22603.html","808ba75cbfbf6125bd45374ced5e550a"],["E:/hexo/public/posts/24021.html","72d4f9f60eeaff370967ad3a9a769b02"],["E:/hexo/public/posts/240225.html","54c0c55746f86fe501d556880e345757"],["E:/hexo/public/posts/34379.html","3de1b78197ecd53b4bbd6f42368dc9d5"],["E:/hexo/public/posts/43405.html","cecf3d64e4716fe566995f64aed1e355"],["E:/hexo/public/posts/47248.html","d43c8cac8a04f47bfa3efa6324407725"],["E:/hexo/public/posts/53627.html","78b6ea93312e1a3a8d5127de4ef96c43"],["E:/hexo/public/posts/541bf5af.html","b772dff7323e2e60ce1230ac1ce05dc8"],["E:/hexo/public/posts/59292.html","f2c8d1bba5ce73f0a94b79a540f6741e"],["E:/hexo/public/posts/6de61336.html","ccc4868211687b2cdd4f2465a65f41bc"],["E:/hexo/public/self/Kimbiedark.css","f3949dbe7da5954593f6f80b775f5ede"],["E:/hexo/public/self/head.js","ac499f1535b1ef96dd92714af2504038"],["E:/hexo/public/shuoshuo/index.html","99b289167c35b5346ad0b8e21ede7cea"],["E:/hexo/public/tags/400-404-500-405/index.html","25467814bf861b071bc4228d824a8ad7"],["E:/hexo/public/tags/Hibernate/index.html","a908fa89dedfc0d0b78ea07f6f3fc72c"],["E:/hexo/public/tags/Java爬虫/index.html","dbf7469a0101c0f8438283e07fbed64d"],["E:/hexo/public/tags/Java爬虫实战/index.html","d595467e192ca69924cf35adb7f4df11"],["E:/hexo/public/tags/Markdowm语法/index.html","01ea066e8c156c971404c9766f545618"],["E:/hexo/public/tags/Maven/index.html","19d11867ef548e11d3a7582bbd23d13c"],["E:/hexo/public/tags/SpringMVC/index.html","b67edbe2b03ee02cf79e690965f580eb"],["E:/hexo/public/tags/Struts2/index.html","0c379a34bc723d33e502f8e8b3ef4493"],["E:/hexo/public/tags/VPN/index.html","4b9bf30c763050f68f14ef5c31c9d592"],["E:/hexo/public/tags/github/index.html","abe782749a229337ca0f0181a6b9c2ff"],["E:/hexo/public/tags/hexo/index.html","fe7d9aed149a5cf0bf6aa447028acc16"],["E:/hexo/public/tags/index.html","48ccdae67877253fcf80912d5f087e63"],["E:/hexo/public/tags/java/index.html","0711024793166f9f7e9e9288bbbab2e9"],["E:/hexo/public/tags/javaweb/index.html","bc5675aff554326e0ca8da3bfec59eac"],["E:/hexo/public/tags/jekyll/index.html","f881807f9db3c898b3bc9b41c73ca277"],["E:/hexo/public/tags/mysql8/index.html","1562af3f0949d5de74232825aa86ed94"],["E:/hexo/public/tags/servlet/index.html","3b4e528c1afc817b5cae95999b9957c4"],["E:/hexo/public/tags/springBoot/index.html","ce5cbfcc5c35d05a96bcdbc8d3324e6d"],["E:/hexo/public/tags/分布式系统/index.html","b716d888f6d105d7d434fa51c9b08559"],["E:/hexo/public/tags/博客/index.html","fbbd4728121f074b75dca1516cc71c52"],["E:/hexo/public/tags/搭建博客/index.html","a06f08c2e67611e17c5e766dce336b06"],["E:/hexo/public/wallpaper/index.html","3041092df45bf537954a8976d33d06df"],["E:/hexo/public/wallpaper/wall/index.html","386781bb836a272de1356e23934dbd8d"]];
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







