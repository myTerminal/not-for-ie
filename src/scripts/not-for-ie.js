/* global navigator document */

let isRunningInIe;

(() => {
    const userAgentString = navigator.userAgent;

    isRunningInIe = userAgentString.indexOf('MSIE') > -1
        || userAgentString.indexOf('Trident/') > -1
        || userAgentString.indexOf('Edge/') > -1;
})();

const activate = className => {
    if (isRunningInIe) {
        document.body.className += ` ${className}`;
    }
};
const isIe = () => isRunningInIe;

export {
    isIe,
    activate
};
