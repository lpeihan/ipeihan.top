const marked = require('marked');
const highlight = require('highlight.js');

export default function(markdown) {
  return marked(markdown, {
    renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: true,
    smartLists: true,
    smartypants: true,
    highlight: function (code) {
      return highlight.highlightAuto(code).value;
    }
  });
};
