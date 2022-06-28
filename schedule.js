const schedule = require('node-schedule');
const puppeteer = require('puppeteer');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/music-together', (error, mongoConnectionInstance) => {
    if (error) return console.error("Mongoose connection error: " + error);
    if (!process.env.NODE_ENV) {
        const { host, port, name } = mongoConnectionInstance;
        console.log("Mongoose connect:", host, port, name);
    }
});

const runSchedule = () => {

    // every month: 0 0 1 * *
    const job = schedule.scheduleJob('0 0 1 * *', function () {
        console.log('The answer to life, the universe, and everything!');
    });

}

const countrySchema = new mongoose.Schema({
    countryName: { type: String, required: true },
    englishTitle: { type: String, required: true },
    englishBody: { type: String, required: true },
    hebrewTitle: { type: String },
    hebrewBody: { type: String },
    arabicTitle: { type: String },
    arabicBody: { type: String },
    songsList: [
        {
            songName: { type: String, required: true },
            songArtist: { type: String, required: true },
            songPath: { type: String, required: true }
        }
    ]
})

const infoSchema = new mongoose.Schema({
    asia: [countrySchema],
    africa: [countrySchema],
    oceania: [countrySchema],
    europe: [countrySchema],
    northAmerica: [countrySchema],
    southAmerica: [countrySchema],
})

const runPuppeteer = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const continents = ['asia', 'africa', 'oceania', 'europe', 'north-america', 'south-america'];

    for (let i of continents) {
        // get all countries hrefs of region:
        await page.goto(`https://folkcloud.com/folk-music/${continents[i]}`);
        const countriesHrefs = await page.$$eval('.fadeCountryCell > span > a', as => as.map(a => a.href));

        console.log(countriesHrefs);
    }
    //     // get all songs hrefs of the first country:
    //     await page.goto(countriesHrefs[0]);
    //     const songsHrefs = await page.$$eval('a.GridLink', as => as.map(a => a.href));
        
    //     // get the mp3 href of the first song:
    //     await page.goto(songsHrefs[0]);
    //     const mp3Href1 = await page.$$eval('[value^="https"][value$=".mp3"]', el => el.map(input => input.value));
    //     await page.goto(songsHrefs[1]);
    //     const mp3Href2 = await page.$$eval('[value^="https"][value$=".mp3"]', el => el.map(input => input.value));
        
    // console.log(mp3Href1[0]);
    // console.log(mp3Href2[0]);

    await browser.close();
}

module.exports = {
    runPuppeteer
}



    // mix two audio files with ffmpeg:
    // new ffmpeg({ source: 'https://folkcloud.com/uploads/Afghanistan/22638120-fc3b-4958-bf17-f08872d54883.mp3' })
    //     .addInput('https://folkcloud.com/uploads/Afghanistan/9e5e475f-8473-4055-8adc-a956667a8545.mp3')
    //     .complexFilter('amix')
    //     .on('end', () => console.log("DONE!"))
    //     .saveToFile('./new.mp3')