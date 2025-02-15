/*globals angular*/

"use strict";

/* Filters */

angular.module("lookAroundApp.filters", []).filter("interpolate", [
  "version",
  function (version) {
    return function (text) {
      return String(text).replace(/\%VERSION\%/gm, version);
    };
  },
]);
