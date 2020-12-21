var unified = require("unified");
var english = require("retext-english");
var stringify = require("retext-stringify");
var equality = require("retext-equality");
var profanities = require('retext-profanities')

export const checkTerm = (term) => {
  if(term ===""){
    return "emptySearch";
  }
  let results;
  unified()
    .use(english)
    .use(equality)
    .use(profanities)
    .use(stringify)
    .process(term, function (err, file) {
      results = file;
    });
  if (results.messages[0] === undefined) {
    //Term not identified and non-inclusive
    return null;
  } else {
    //Found term return alternatives
    return results.messages;
  }
};
