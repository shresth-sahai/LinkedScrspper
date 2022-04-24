const puppeteer = require('puppeteer');

async function scrapeProduct(url)
{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.goto(url);

    const [el] = await page.$x('//*[@id="search"]/div[1]/div[1]/div/span[3]/div[2]/div[2]/div/div/div/div/div/div/div[1]/div/span/a/div');
    
    const src = await el.getProperty('src');
    const srcTxt = await src.jsonValue();
}
scrapeProduct('https://www.amazon.in/s?k=sneakers+shoes+for+men&i=shoes&rh=n%3A1571283031%2Cp_89%3APuma&dc&page=2&crid=2B9FTPTA5X6OK&qid=1631862179&rnid=3837712031&sprefix=sneakers%2Caps%2C310&ref=sr_pg_2');