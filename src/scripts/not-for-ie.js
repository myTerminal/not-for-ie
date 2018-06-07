/* global document */

let isRunningInIe;

(function () {
    isRunningInIe = false;
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
