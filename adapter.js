(function(karma, requirejs, locationPathname) {

// monkey patch seajs


// make it async
karma.loaded = function() {};

})(window.__karma__, window.seajs, window.location.pathname);
