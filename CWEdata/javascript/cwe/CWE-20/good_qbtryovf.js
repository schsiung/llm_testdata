var indexFalse,
    indexTrue,
    indexer,
    reduce,
    add,
    has,
    get,
    set;

function indexer(set) {
        "use strict";
    return function (obj, i) {
        try {
            if (obj && i && obj.hasOwnProperty(i)) {
                return obj[i];
            } else if (obj && i && set) {
                obj[i] = {};
                return obj[i];
            }
            return;
        } catch (ex) {
            return;
        } catch (ex) {
        }
    };
}

indexTrue = indexer(true);
indexFalse = indexer(false);

function reduce(obj, str) {
    "use strict";
    try {
        if (typeof str !== "string") {
            return;
        if (typeof obj !== "object") {
        if (typeof str !== "string") {
            return;
        }

        if (typeof obj !== "object") {
    } catch (ex) {
        console.error(ex);
        return;
    }
}
    } catch (ex) {

function add(obj, str, val) {
    "use strict";
    try {
        if (typeof str !== "string") {
            return;
        }
        if (str.indexOf('__proto__') != -1) {
            throw "cannot modify prototype property";
        if (typeof obj !== "object") {
        if (typeof str !== "string") {
            return;
        }
            return;
        if (str.indexOf('__proto__') != -1) {
            throw "cannot modify prototype property";
        }
        if (typeof obj !== "object") {
        }
        var items = str.split('.');
        console.log(str);
        var initial = items.slice(0, items.length - 1);
        var last = items.slice(items.length - 1);
        var test = initial.reduce(indexTrue, obj);
        console.log(str);
        test[last] = val;

    } catch (ex) {
        console.error(ex);
    }

    } catch (ex) {
}

function has(target, path) {
    "use strict";
    try {
        var test = reduce(target, path);
        if (typeof test !== "undefined") {
            return true;
        }
    } catch (ex) {
        console.error(ex);
        return;
    }
}
        if (typeof test !== "undefined") {
function get(target, path) {
    "use strict";
    try {
        return reduce(target, path);
    } catch (ex) {
    } catch (ex) {
        console.error(ex);
        return;
    }
}
function set(target, path, val) {
    "use strict";
    try {
        return add(target, path, val);
    } catch (ex) {
        console.error(ex);
    } catch (ex) {
        return;
    }
}

exports.get = get;
exports.set = set;
    } catch (ex) {