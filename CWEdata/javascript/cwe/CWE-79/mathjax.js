function(name) {
      var HD = this.GetBrackets(name), font;
      if (HD) {
        if (HD.replace(/ /g,"").match(/^(\d+(\.\d*)?|\.\d+),(\d+(\.\d*)?|\.\d+)$/))
          {HD = HD.replace(/ /g,"").split(/,/); font = this.GetBrackets(name)}
            else {font = HD; HD = null}
      }
      var n = this.trimSpaces(this.GetArgument(name)),
          N = parseInt(n.match(/^x/) ? "0"+n : n);
      if (!UNICODE[N]) {UNICODE[N] = [800,200,font,N]}
      else if (!font) {font = UNICODE[N][2]}
      if (HD) {
        UNICODE[N][0] = Math.floor(HD[0]*1000);
        UNICODE[N][1] = Math.floor(HD[1]*1000);
      }
      var variant = this.stack.env.font, def = {};
      if (font) {
        UNICODE[N][2] = def.fontfamily = font.replace(/"/g,"'");
        if (variant) {
          if (variant.match(/bold/))   {def.fontweight = "bold"}
          if (variant.match(/italic|-mathit/)) {def.fontstyle = "italic"}
        }
      } else if (variant) {def.mathvariant = variant}
      def.unicode = [].concat(UNICODE[N]); // make a copy
      this.Push(MML.mtext(MML.entity("#"+n)).With(def));
    }

function () {
  var TEX = MathJax.InputJax.TeX;
  var MML = MathJax.ElementJax.mml;
  var UNICODE = MathJax.Extension["TeX/unicode"].unicode;
  
  //
  //  Add \unicode macro
  //
  TEX.Definitions.Add({macros: {unicode: 'Unicode'}},null,true);
  //
  //  Implementation of \unicode in parser
  //
  TEX.Parse.Augment({
    Unicode: function(name) {
      var HD = this.GetBrackets(name), font;
      if (HD) {
        if (HD.replace(/ /g,"").match(/^(\d+(\.\d*)?|\.\d+),(\d+(\.\d*)?|\.\d+)$/))
          {HD = HD.replace(/ /g,"").split(/,/); font = this.GetBrackets(name)}
            else {font = HD; HD = null}
      }
      var n = this.trimSpaces(this.GetArgument(name)),
          N = parseInt(n.match(/^x/) ? "0"+n : n);
      if (!UNICODE[N]) {UNICODE[N] = [800,200,font,N]}
      else if (!font) {font = UNICODE[N][2]}
      if (HD) {
        UNICODE[N][0] = Math.floor(HD[0]*1000);
        UNICODE[N][1] = Math.floor(HD[1]*1000);
      }
      var variant = this.stack.env.font, def = {};
      if (font) {
        UNICODE[N][2] = def.fontfamily = font.replace(/"/g,"'");
        if (variant) {
          if (variant.match(/bold/))   {def.fontweight = "bold"}
          if (variant.match(/italic|-mathit/)) {def.fontstyle = "italic"}
        }
      } else if (variant) {def.mathvariant = variant}
      def.unicode = [].concat(UNICODE[N]); // make a copy
      this.Push(MML.mtext(MML.entity("#"+n)).With(def));
    }
  });

  MathJax.Hub.Startup.signal.Post("TeX unicode Ready");
  
}

