// Additional underscore.js utilities
_.clone = function(obj) {
    if (obj === undefined)
        return obj;
    return JSON.parse(JSON.stringify(obj));
};

_.parameter = function(name, url) {
    url = url || location.search;
    return(decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(url)||[,""])[1].replace(/\+/g, '%20'))||null);
};


JDtoDateArray = function() {
    var y = 4716;
    var j = 1401;
    var m = 2;
    var n = 12;
    var r = 4;
    var p = 1461;
    var v = 3;
    var u = 5;
    var s = 153;
    var w = 2;
    var B = 274277;
    var C = -38;
    
    return function(J) {
        var f = J + j + Math.floor((Math.floor((4 * J + B)/146097) * 3)/4) + C;
        var e = r * f + v;
        var g = Math.floor((e%p)/r);
        var h = u * g + w;
        var D = Math.floor((h%s)/u) + 1;
        var M = (Math.floor(h/s) + m)%n + 1;
        var Y = Math.floor(e/p) - y + Math.floor((n + m - M)/n);

        return [D, M, Y];
    };
}();
