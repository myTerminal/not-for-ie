/* global navigator document */

let isRunningInIe;

(function () {
    const userAgentString = navigator.userAgent;

    isRunningInIe = userAgentString.indexOf('MSIE') > -1 ||
        userAgentString.indexOf('Trident/') > -1 ||
        userAgentString.indexOf('Edge/') > -1;
})();

const activate = function (className) {
        if (isRunningInIe) {
            document.body.className += ` ${className}`;
        }
    },
    isIe = function () {
        return isRunningInIe;
    };

export {
    isIe,
    activate
};
