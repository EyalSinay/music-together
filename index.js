const ffmpeg = require('fluent-ffmpeg');
const puppeteer = require('puppeteer');

const start = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const region = 'asia';

    // get all countries hrefs of region:
    await page.goto(`https://folkcloud.com/folk-music/${region}`);
    const countriesHrefs = await page.$$eval('.fadeCountryCell > span > a', as => as.map(a => a.href));

    // get all songs hrefs of the first country:
    await page.goto(countriesHrefs[0]);
    const songsHrefs = await page.$$eval('a.GridLink', as => as.map(a => a.href));

    // get the mp3 href of the first song:
    await page.goto(songsHrefs[0]);
    const mp3Href1 = await page.$$eval('[value^="https"][value$=".mp3"]', el => el.map(input => input.value));
    await page.goto(songsHrefs[1]);
    const mp3Href2 = await page.$$eval('[value^="https"][value$=".mp3"]', el => el.map(input => input.value));

    console.log(mp3Href1[0]);
    console.log(mp3Href2[0]);

    await browser.close();

    // mix two audio files with ffmpeg:
    // new ffmpeg({ source: 'https://folkcloud.com/uploads/Afghanistan/22638120-fc3b-4958-bf17-f08872d54883.mp3' })
    //     .addInput('https://folkcloud.com/uploads/Afghanistan/9e5e475f-8473-4055-8adc-a956667a8545.mp3')
    //     .complexFilter('amix')
    //     .on('end', () => console.log("DONE!"))
    //     .saveToFile('./new.mp3')

}
start();