// ==UserScript==
// @name         reload outlook every 9 minutes
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://outlook.office.com/*
// @grant        none
// @run_at       document_end
// @license      MIT
// ==/UserScript==

(function() {
    const seconds = s => s * 1000;
    const minutes = m => seconds(m * 60);
    const log = msg => console.log('StayLoggedIn', msg) //

    const calc = () => minutes(4) + seconds(55)
    const result = calc();
    clearTimeout(window.theTimer);
    window.theTimer = setTimeout(() => {
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
    setTimeout(() => {
      log('reload set for '+calc.toString().replace('() => ', '')+' from now');
    }, 1);
})();
