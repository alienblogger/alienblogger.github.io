import { promises as fs } from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';
import serializeDate from 'lib/serialize-date';

export default async () => {
  try {
    const ignoreFiles = ['.DS_Store'];

    const postRoot = path.join(process.cwd(), 'public', 'wallpapers');
    const files = (await fs.readdir(postRoot))
      .filter((item) => ignoreFiles.indexOf(item) < 0)
      .map((item) => ({
        name: titleCase(item.split('-').join(' ')),
        link: item,
      }));
    return files;
  } catch (err) {
    throw err;
  }
};

function titleCase(string) {
  var sentence = string.toLowerCase().split(' ');
  for (var i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  return sentence.join(' ');
}
