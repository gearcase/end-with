'use strict';

module.exports = function (str, suffix, len) {

  if (typeof suffix === 'undefined' || suffix === null) {
    return false;
  }

  str    = String(str);
  suffix = String(suffix);

  if(len === undefined || len > str.length) {
    len = str.length;
  }

  var i = suffix.length;
  var l = len - i;

  while (i--) {
    if (suffix.charAt(i) !== str.charAt(l + i)) {
      return false;
    }
  }
  return true;
};
