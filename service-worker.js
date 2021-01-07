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

var precacheConfig = [["D:/hexo/public/404.html","5e95720ca992ae0e66d7bc2af34b6da1"],["D:/hexo/public/about/index.html","67cfa3fdcd8888d356cf59ea5d839d3d"],["D:/hexo/public/archives/2020/01/index.html","3dd64af7a411601ade84b48fe7ba8665"],["D:/hexo/public/archives/2020/02/index.html","6404f8948755fb90d008fe6cfd98732c"],["D:/hexo/public/archives/2020/03/index.html","f4d5112bc97ec7572f884f60a371c675"],["D:/hexo/public/archives/2020/05/index.html","a31c64c2ea9aac970da1533964c6cdc4"],["D:/hexo/public/archives/2020/09/index.html","97db932cde67fefc56fb6eba8fa75749"],["D:/hexo/public/archives/2020/index.html","d57a1d177297f7cecc1c224793121797"],["D:/hexo/public/archives/2020/page/2/index.html","fd2a0228290e7546330c172269d9d3d6"],["D:/hexo/public/archives/2021/01/index.html","53d329dd3086c003ce7b2bc2de96faf2"],["D:/hexo/public/archives/2021/index.html","c94db31e2bdb8da5ead04796c1387459"],["D:/hexo/public/archives/index.html","9f2293151b239fa1e82cfd7cb8123028"],["D:/hexo/public/archives/page/2/index.html","ebcdf674fbf9b8bce75624fe8c20eb5f"],["D:/hexo/public/categories/Hibernate/index.html","5083f19b5bf1736984754adbe10a4792"],["D:/hexo/public/categories/JavaWeb/index.html","8b3cde28f7b9e9405eb19563f333c78e"],["D:/hexo/public/categories/Java爬虫实战/index.html","6df97c215aebd9c4443fd5a723228816"],["D:/hexo/public/categories/VPN/index.html","6ac27d587ae585b915f1fb70299ee841"],["D:/hexo/public/categories/VPN/v2ray/index.html","acf2c661c10a2dcc23a2a1328d47dd88"],["D:/hexo/public/categories/VPN/v2ray/外网/index.html","e8ec14e932769ebc374c51be7ad627cb"],["D:/hexo/public/categories/index.html","866eafc9f6d876b7c2ed4a8b074ca187"],["D:/hexo/public/categories/springBoot/index.html","b81f824d58ed630162a873c0fcf51ca9"],["D:/hexo/public/categories/分布式系统/index.html","7415c2f78f08bf38a212f54cb452c560"],["D:/hexo/public/categories/博客/index.html","5990dff6e3a92bed5dc74a9c330e907c"],["D:/hexo/public/css/index.css","16e4e9831e63a1f889d8489483b615a9"],["D:/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/hexo/public/css/yangyuhou.css","eed82998255779015ddb6212adb47c42"],["D:/hexo/public/images/2018-02-04_123955.png","ed078d7c679a69af7a86e3722d67d18c"],["D:/hexo/public/images/20180101112125849.png","1c6a4a42e37ccf0e802d392825b76577"],["D:/hexo/public/images/20180101112152464.png","ab2cca8ef19f0baabc4fdf49caca5e15"],["D:/hexo/public/images/20180802154402427.png","2f9105812717ea6dce21863d1fe7012d"],["D:/hexo/public/images/2018080215454373.png","e68b206a15dc6978902f01f4b22356c7"],["D:/hexo/public/images/20180802155336302.png","3ad4c4652155a94b0192b3f340932909"],["D:/hexo/public/images/20180802155459346.png","943e97d4c9187407e4f1fcbe5a74a1d7"],["D:/hexo/public/images/20180802155701855.png","3219a26e99428af34bb1a4e50f055da4"],["D:/hexo/public/images/20180802155907712.png","ab0c9c535ae763cfed6b5ba1fd55f05d"],["D:/hexo/public/images/20180802160015673.png","d7987006e10a4f7279fceb49af5425a3"],["D:/hexo/public/images/20180802160155483.png","ff19dee77efe753462747674c044afeb"],["D:/hexo/public/images/20180802160324418.png","df132b80d1fc64b0936c116bc64df88e"],["D:/hexo/public/images/20180802160343802.png","74e16a031bc0f08d6e60c64609e145f7"],["D:/hexo/public/images/20180802160421785.png","58a19f97a09e312a401a12c100dc6867"],["D:/hexo/public/images/2018080216053733.png","42369b55d3c083d1a1859c97793f4bb1"],["D:/hexo/public/images/2018080216061165.png","9455e9bbf7500c0fdbdae61dea9ba7e6"],["D:/hexo/public/images/20180802160735370.png","7eecfa2f1e49fd8369de220f58818c93"],["D:/hexo/public/images/20180802161039348.png","cbbe9001fc76deaf202403747061bc9b"],["D:/hexo/public/images/20180802161209660.png","1297d34362a074647d2f3d76f567d6ad"],["D:/hexo/public/images/20180802161235917.png","e1dbb176df7dc6e3f690cca240a04f10"],["D:/hexo/public/images/20180802162415963.png","c14059ae83f511c7e37558aa2b2333a8"],["D:/hexo/public/images/2019-12-02.png","5e6ee7662f06b252ef339eaaea6c7f37"],["D:/hexo/public/images/2020-09-01_111547.png","e4b83badd1e2d04a7ba3e346048f8c1d"],["D:/hexo/public/images/2020-09-01_113102.png","278059bc532177a5d9f4217054a728e2"],["D:/hexo/public/images/2020-09-01_114439.png","d20a2b1a6c35d7b4f14085d2f84a6980"],["D:/hexo/public/images/2020-09-01_114756.png","f64054ee1c48a0d47dc3de4f6c8fe9bd"],["D:/hexo/public/images/2020-09-01_115205.png","3a8d84706b0d6bda76fe6154ce374b80"],["D:/hexo/public/images/2020-09-01_115538.png","61d3cfada5549b7c2eb3ced8dba8fec8"],["D:/hexo/public/images/2020-09-01_140055.png","419d94d3452f3636e930d25fb27fcd23"],["D:/hexo/public/images/2020-09-07_112951.png","0b72341fee8dce0311b06e78083e9679"],["D:/hexo/public/images/2020-09-07_113458.png","c2f9e8fabdb49625f9f73c6053179e70"],["D:/hexo/public/images/2020-09-07_115010.png","0b2c42faac4cfbc075066755e3f092a4"],["D:/hexo/public/images/2020-09-07_115115.png","199c9a88da2dc2d14b71bd11329c6a81"],["D:/hexo/public/images/2020-09-14_173015.png","63a00abfb1c8388456c0a89ef842f7a4"],["D:/hexo/public/images/2020-09-30_102333.png","6cbc389e005500fd838c8a43f5442a6f"],["D:/hexo/public/images/2020-09-30_102409.png","1f19b45b75d401a4e3ec0013466a509b"],["D:/hexo/public/images/2020-09-30_102419.png","d69147b57f7e2d52e1f15398c072f04c"],["D:/hexo/public/images/2020-09-30_103028.png","b14f781547a0d07e085f2a9d40e780e1"],["D:/hexo/public/images/2020-09-30_103251.png","edab7c9f6df5a3d93c3ecbd8b9c603a9"],["D:/hexo/public/images/2020-09-30_103349.png","0ea6dc5b5e036414ed88e1c5d0519646"],["D:/hexo/public/images/2020-09-30_103444.png","09eb73f6acfbc6a9e01ca2e21a6c8ad1"],["D:/hexo/public/images/2020-09-30_103537.png","f3e94d17a074d38591c393a18989e102"],["D:/hexo/public/images/2020-09-30_113145.png","c78a6ccd638165b9cf1be2f5b7728101"],["D:/hexo/public/images/683017.jpg","e6ef683f45155650f4e4f79d96872904"],["D:/hexo/public/images/960489.png","4b0c82073d69fe20cb936247504ca54d"],["D:/hexo/public/images/alipa.jpg","0c7c3e4a0581a94866e8830df5b6a863"],["D:/hexo/public/images/avstar.jpg","9705585dd2471d1556d38abe3827a51a"],["D:/hexo/public/images/concrete-bindings.png","d8261ab119309917e25180ef0ae42abe"],["D:/hexo/public/images/hexo.jpg","2c0e4aa03bfd633ee57da5f5a24b37bc"],["D:/hexo/public/images/legacy.png","bbbef4dcd5b7d5d3d8aa782353fa7001"],["D:/hexo/public/images/template-engine.png","66a3b2ab6f787cae4ad962077475701e"],["D:/hexo/public/images/wechat.jpg","0f6ceaa137ffd901018f026036c4f5ce"],["D:/hexo/public/images/微信图片_20200930102455.png","b63ed9decd79d6eb5c6836455991ebd9"],["D:/hexo/public/images/微信图片_20200930102502.png","989023fd440c223c831ebde84e20c44a"],["D:/hexo/public/images/微信图片_20200930102507.png","962611146b8b745be6e21acfd75e7c3d"],["D:/hexo/public/images/微信图片_20200930102511.png","8e0e0559a95bce058e8ec90568997eb2"],["D:/hexo/public/images/微信图片_20200930105726.jpg","91521162e197f5a1944a83bf8593b4c8"],["D:/hexo/public/images/微信图片_20200930105734.jpg","aa7510538e421e32421755d59c941a38"],["D:/hexo/public/images/微信图片_20200930105738.jpg","484a0328e049ff80f5e30a1b9830200d"],["D:/hexo/public/images/微信图片_20200930105740.jpg","6e14011134c2c332362a2c9a4c01f44d"],["D:/hexo/public/images/微信图片_20200930105745.jpg","0d66db34f6e8ceb8904081bc1220ea3f"],["D:/hexo/public/images/微信图片_20200930105749.jpg","dadef0b1eb5f561344bffffa048b1035"],["D:/hexo/public/images/搜狗截图20180129151045.png","32ccf45eea5acca03197633ddef9d4ed"],["D:/hexo/public/images/搜狗截图20180129151112.png","0b7ebe430f9d6db6996b5d03300d8c92"],["D:/hexo/public/images/搜狗截图20180129224104.png","36a76756e768cc525e35d622ff900044"],["D:/hexo/public/images/搜狗截图20180130161620.png","e1cd9a5d6fad50205dc7d588bb8b98c1"],["D:/hexo/public/images/搜狗截图20180131220946.png","337f6c65f683b280d826e436fd1fcec3"],["D:/hexo/public/images/搜狗截图20180131221411.png","8a4448248bde08d34f9b9d273ddc4546"],["D:/hexo/public/images/搜狗截图20180203164743.png","3427f2cf3e1f6d83086bf420fdc189d8"],["D:/hexo/public/images/搜狗截图20180203181108.png","09630bb6ecd281564bb075ae1e5cf607"],["D:/hexo/public/images/搜狗截图20180203181751.png","1eb2062e67061945f91d23d8b24b253e"],["D:/hexo/public/images/搜狗截图20180211130621.png","944545549c9dbc914298c7f75dd06110"],["D:/hexo/public/images/搜狗截图20180211130721.png","146046ab452f8f6b80fa3692b050ff7d"],["D:/hexo/public/images/搜狗截图20180211134506.png","398f017a88a181ad2cb7713632b74235"],["D:/hexo/public/images/搜狗截图20180226173408.png","2d314aa4ad7f050deb17d829ed8ec157"],["D:/hexo/public/images/搜狗截图20180226173527.png","272deb8306b563043ea3d3e8845a4d67"],["D:/hexo/public/images/搜狗截图20180226180347.png","78fe44db0d738c6c528cd697fcbcd0f4"],["D:/hexo/public/images/搜狗截图20180226180504.png","c5dea80336305ba5e1d33ff396953392"],["D:/hexo/public/images/搜狗截图20180228135513.png","39e6016bfe8b2d8cbd7cc78442afaf6e"],["D:/hexo/public/images/搜狗截图20180301142915.png","9727319b3a0dac8b1a02d18fc247fa58"],["D:/hexo/public/images/搜狗截图20180302114401.png","5976cf831cf2f366f32b57781500f27a"],["D:/hexo/public/images/搜狗截图20180302144835.png","a9498b3c9cc37cd584f4cc7ab33bceea"],["D:/hexo/public/images/搜狗截图20180302144910.png","1fab6eb94cba5acdf5c1a1a639ce553e"],["D:/hexo/public/images/搜狗截图20180302221835.png","b192b776d60e65d6b24d6eef3ed98b56"],["D:/hexo/public/images/搜狗截图20180303145450.png","b72094f2dc137f642b258d659ba7c5de"],["D:/hexo/public/images/搜狗截图20180303145531.png","0192e016514ae6de37acb335483c6365"],["D:/hexo/public/images/搜狗截图20180303165113.png","57658a824fedd4daf6c46fb28ddf9a2e"],["D:/hexo/public/images/搜狗截图20180305194443.png","2dac84a86c0ba78de4520f8d983edf3a"],["D:/hexo/public/images/搜狗截图20180306105412.png","76a313ae8af0ec0a841ad45704ce2fb8"],["D:/hexo/public/images/搜狗截图20180306145727.png","47c4980736ad35a211aba130f2fcd116"],["D:/hexo/public/images/搜狗截图20180306145855.png","f99a90f28a4216d3ede462d9bd7c2b81"],["D:/hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/hexo/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/hexo/public/index.html","f4ea159c50e7f6e327bd5e62482f0598"],["D:/hexo/public/js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["D:/hexo/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/hexo/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/hexo/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["D:/hexo/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/hexo/public/js/yangyuhou.js","d9c3dd0bdd29be1f38f0e2b3145ebf9a"],["D:/hexo/public/link/index.html","e667acdf35d690e6c93c6ec13a014c2f"],["D:/hexo/public/music/index.html","099f02f617bf083bbf77a06818b5ca99"],["D:/hexo/public/page/2/index.html","e041e04fa4834f43a8ce2b8f884db8e0"],["D:/hexo/public/photos/index.html","d370a592d581a41aee21c3065f401ca0"],["D:/hexo/public/posts/16fcf8c4.html","f1874690aba08fa83985dd5e84d52448"],["D:/hexo/public/posts/22603.html","ef140907fb6ec7a06fe791f02c6d3a1b"],["D:/hexo/public/posts/24021.html","6e60b69eb4e22b20d4e82842a33a2afe"],["D:/hexo/public/posts/240225.html","c3ad157945c02d9a572cced21f94ac2f"],["D:/hexo/public/posts/34379.html","cfbef0c0c0a91343eef4bd0a98f9bc43"],["D:/hexo/public/posts/43405.html","18453d29bac490f65de5ce1109df35f7"],["D:/hexo/public/posts/47248.html","51c5d488b67b407cf2ff79cd333255bb"],["D:/hexo/public/posts/53627.html","07f5ad79b6c44b4e14278ae285371dd4"],["D:/hexo/public/posts/541bf5af.html","3bb6181c9803faa4c141c4d9ce6e5114"],["D:/hexo/public/posts/59292.html","004eb60210f54b2610346bc768025e61"],["D:/hexo/public/posts/6de61336.html","096b176e5a3640123359977a8451204f"],["D:/hexo/public/posts/undefined.html","6e01352903d40bd1f21a3ab8a732dd28"],["D:/hexo/public/self/Kimbiedark.css","bdef73cbc20acaad310e3b5f4d27b022"],["D:/hexo/public/self/head.js","ac499f1535b1ef96dd92714af2504038"],["D:/hexo/public/shuoshuo/index.html","1b68fe52783c5723753796829e0d6720"],["D:/hexo/public/tags/400-404-500-405/index.html","9b89c90c93bc8c02c14553d64c6dcc98"],["D:/hexo/public/tags/Hibernate/index.html","b3a75a9d4058c459686936912620874e"],["D:/hexo/public/tags/Java爬虫/index.html","60682628529f21e8841fb59233ffc790"],["D:/hexo/public/tags/Java爬虫实战/index.html","1933574960234545c3e56640a7aab969"],["D:/hexo/public/tags/Markdowm语法/index.html","7ec96d6be3c44f1c7a9ce21fd1688664"],["D:/hexo/public/tags/Maven/index.html","6275cb545c9df9f40ea9721c6821a861"],["D:/hexo/public/tags/SpringMVC/index.html","f1d79b58df121422db390b878b7f5573"],["D:/hexo/public/tags/Struts2/index.html","b310a8ddcef0df78d12d30c03ad92fc0"],["D:/hexo/public/tags/VPN/index.html","684742e280393d9afb7928fb15ec9c18"],["D:/hexo/public/tags/github/index.html","0262d9034ec394869095e4fdfc2fbdda"],["D:/hexo/public/tags/hexo/index.html","36b965b30c7824a2f6ec1b524a2a60f0"],["D:/hexo/public/tags/index.html","846003cc51faaf61bc7b8f43fc7cdf92"],["D:/hexo/public/tags/java/index.html","85395eeca4070faacd65bd8ccd599d94"],["D:/hexo/public/tags/javaweb/index.html","fc1e0f6c95766dacc3a8f42f48039026"],["D:/hexo/public/tags/jekyll/index.html","a59d170fca875b59fe8ae008073a9e84"],["D:/hexo/public/tags/mysql8/index.html","424f17c0efec50ee2430083dce0a9904"],["D:/hexo/public/tags/servlet/index.html","b2726e96db731d8515afa7a79ae69ce0"],["D:/hexo/public/tags/springBoot/index.html","91a01787560071985076ea1ce16ec558"],["D:/hexo/public/tags/分布式系统/index.html","c56a782fde93374a832c1004ef9fe143"],["D:/hexo/public/tags/博客/index.html","59e3516955ae31a659f044823d829db4"],["D:/hexo/public/tags/搭建博客/index.html","d94863467563b6673824102bc6c30953"],["D:/hexo/public/wallpaper/index.html","65e2d05dacd684a74f767e5dadbc79c1"],["D:/hexo/public/wallpaper/wall/index.html","5d99d3dd95d4fca33cd7a3f06d6aec8e"],["D:/hexo/public/新建文件夹/README.html","16704ec29c5869b4ed966b91ec5093e9"],["D:/hexo/public/新建文件夹/yangyuhou.css","eed82998255779015ddb6212adb47c42"],["D:/hexo/public/新建文件夹/yangyuhou.js","d9c3dd0bdd29be1f38f0e2b3145ebf9a"]];
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







