// const franc = require('franc');
import { franc, francAll } from 'franc';
import langs from 'langs';
import colors from 'colors';
const input = process.argv[2];

const langCode = franc(input);

if (langCode === 'und') {
  console.log('Try with a longer sample of text!');
} else {
  const language = langs.where('3', langCode);
  console.log(`The language is likely to be: ${language.name}`.rainbow);
}
