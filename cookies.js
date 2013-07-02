// Based off of http://www.quirksmode.org/js/cookies.html

/*jslint browser: true */
/*jslint indent: 2 */

"use strict";

var Cookies = {

  set: function (name, value, days) {
    var date,
      expires = "";
    if (days) {
      date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toGMTString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
    return this;
  },

  get: function (name) {
    var nameEQ = name + "=",
      ca = document.cookie.split(';'),
      i,
      c;
    for (i = 0; i < ca.length; i += 1) {
      c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  },

  clear: function (name) {
    Cookies.set(name, "", -1);
    return this;
  }

};
