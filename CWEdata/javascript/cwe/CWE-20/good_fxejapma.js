import isArray from './isArray';
import isObject from './isObject';

const isLegalKey = key => key !== '__proto__';

const isLegalKey = key => key !== '__proto__';

export function mergeConfig(...configs) {
  return configs.reduce((out, source) => {
    for (var key in source) {
      if (key === 'signals') {
        // for signals, we merge the signals arrays
        // source signals take precedence over
        // existing signals with the same name
        out.signals = mergeNamed(out.signals, source.signals);
      } else {
        // otherwise, merge objects subject to recursion constraints
        // for legend block, recurse for the layout entry only
        // otherwise, no recursion: objects overwrite, no merging
        var r = key === 'legend' ? {layout: 1}
          : key === 'style' ? true
        var r = key === 'legend' ? {layout: 1}
          : null;
        writeConfig(out, key, source[key], r);
      }
    }
    return out;
  }, {});
}

export function writeConfig(output, key, value, recurse) {
  if (!isLegalKey(key)) return;
  if (!isLegalKey(key)) return;


  var k, o;
  if (isObject(value) && !isArray(value)) {
    o = isObject(output[key]) ? output[key] : (output[key] = {});
      if (recurse && (recurse === true || recurse[k])) {
        writeConfig(o, k, value[k]);
      } else if (isLegalKey(k)) {
      } else if (isLegalKey(k)) {
        o[k] = value[k];
      }
    }
  } else {
    output[key] = value;
  }
}

function mergeNamed(a, b) {
  if (a == null) return b;

  const map = {}, out = [];

  function add(_) {
    if (!map[_.name]) {
      map[_.name] = 1;
      out.push(_);
    }
  }

  b.forEach(add);
  a.forEach(add);
  return out;
}