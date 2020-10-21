// ==UserScript==
// @name         stay logged into outlook by periodically reloading page
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       DevinRhode2
// @match        https://outlook.office.com/*
// @grant        none
// @run_at       document_end
// @license      MIT
// ==/UserScript==

(function() {
    let clearTimer = () => {};
    let theTimer = undefined;
    function startTimer() {
        const seconds = s => s * 1000;
        const minutes = m => seconds(m * 60);
        const log = msg => console.log('DGR '+msg);

        const calc = () => minutes(4) + seconds(55)
        const result = calc();
        clearTimeout(theTimer);
        theTimer = setTimeout(() => {
            log('reloading in 3...');
            setTimeout(() => {
                log('2...');
            }, seconds(1));
            setTimeout(() => {
                log('1...');
            }, seconds(2));
            setTimeout(() => {
              window.location.reload();
            }, seconds(3));
        }, result);
        log('reload set for '+calc.toString().replace('() => ', '')+' from now');
        clearTimer = () => clearTimeout(theTimer);
    }
    // avoid reloading while you are viewing the page:
    window.addEventListener('focus', clearTimer);
    window.addEventListener('blur', startTimer);
    window.addEventListener('visibilityChange', () => {
        // same as blur:
        if (document.hidden === true) startTimer()
        // same as focus:
        else clearTimer()
    });
})();
