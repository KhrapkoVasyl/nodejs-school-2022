import * as fs from 'fs/promises';
import * as path from 'path';
import * as _process from 'process';
import * as https from 'https';

const writeHtmlToFile = async (
  url: string,
  fileName: string,
  pathToFile: string
): Promise<void> => {
  https.get(url, res => {
    if (res.statusCode !== 200) {
      const { statusCode, statusMessage } = res;
      console.log(`Status Code: ${statusCode} ${statusMessage}`);
      return;
    }
    res.setEncoding('utf8');
    const buffer = [];
    res.on('data', chunk => {
      buffer.push(chunk);
    });
    res.on('end', async () => {
      const data = buffer.join();
      try {
        await fs.writeFile(`${pathToFile}/${fileName}.html`, data);
      } catch (err) {
        console.log(err);
        return;
      }
    });
  });
};

const createFilesFromLinksInJSON = async (
  dirPath: string = __dirname
): Promise<void> => {
  try {
    const pathToJSON: string = _process.argv[2];
    if (!pathToJSON) {
      throw new Error('Path to the JSON-file must be specified');
    }
    const data = await fs.readFile(pathToJSON, { encoding: 'utf-8' });
    const linkArr: string[] = JSON.parse(data);
    const jsonFileName: string = path.parse(pathToJSON).name;
    const folderForHtml: string = path.join(dirPath, `${jsonFileName}_pages`);
    await fs.mkdir(folderForHtml);
    linkArr.forEach(
      async (link, i) =>
        await writeHtmlToFile(link, i.toString(), folderForHtml)
    );
  } catch (err) {
    console.log(err.message);
    return;
  }
};

createFilesFromLinksInJSON();
