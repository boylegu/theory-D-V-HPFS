(function () {
    'use strict';
    var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
        // [::1] is the IPv6 localhost address.
        window.location.hostname === '[::1]' ||
        // 127.0.0.1/8 is considered localhost for IPv4.
        window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
        )
    );

    window.addEventListener('load', function () {
        if ('serviceWorker' in navigator &&
            (window.location.protocol === 'https:' || isLocalhost)) {
            navigator.serviceWorker.register('service-worker.js')
                .then(function (registration) {
                    registration.onupdatefound = function () {
                        if (navigator.serviceWorker.controller) {
                            //判断当前页面是否已被service worker介入控制
                            // 对service worker进行初始化
                            var installingWorker = registration.installing;
                            installingWorker.onstatechange = function () {
                                switch (installingWorker.state) {
                                    case 'installed':
                                        // onstatechange会监听service worker状态
                                        // 它会根据不同的策略将旧数据清除，将新数据存入缓存信息中
                                        break;
                                    case 'redundant':
                                        // 一旦发生异常或失效，状态会出现redundant并抛出异常
                                        throw new Error('service worker已失效.');
                                    default:
                                }
                            };
                        }
                    };

                }).catch(function (e) {
                console.error('service worker 注册失败:', e);
            });
        }
    });
})();
