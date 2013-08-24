var path, fs, i$, ref$, len$, i, name, slice$ = [].slice;
path = require("path");
fs = require("fs");
for (i$ = 0, len$ = (ref$ = fs.readdirSync(__dirname)).length; i$ < len$; ++i$) {
  i = ref$[i$];
  if (i.match(/index/) == null) {
    name = slice$.call(i.split("."), 0, -2 + 1 || 9e9).join(".");
    exports[name] = require(path.resolve(__dirname, name));
  }
}
