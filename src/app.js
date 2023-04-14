const cheerio = require('cheerio');
const axios = require('axios');
const db = require('./model');

const getMobilInfo = async () => {
    try {
        const response = await axios.get("https://www.flipkart.com/search?q=samsung%20mobiles&otracker=search&      otracker1=search&marketplace=FLIPKART&as-show=on&as=off")

        const $ = await cheerio.load(response.data);

        const allMobile = $('div[class="_2kHMtA"]').toArray();
        allMobile.forEach(mobile => {
            const mobileName = $(mobile).find('div[class="_4rR01T"]').text();
            const imgUrl = $(mobile).find('img[class="_396cs4"]').attr('src');
            const mobilePrice = $(mobile).find('div[class="_30jeq3 _1_WHN1"]').text().toString();

            db.mobileInfo.create({ name: mobileName, price: mobilePrice, imgUrl });
        })

    } catch (error) {
        console.log(error)
    }
}

getMobilInfo()

db.connection()
    .then(() => {
        console.log('database connected')
    })
    .catch((err) => {
        console.log('something went wrong while connected to database', err)
    })