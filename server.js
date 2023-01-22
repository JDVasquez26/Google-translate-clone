const PORT = 4040;

//help us make get requests b/c we're getting the data from DB
const axios = require("axios").default;
//express help us with routine
const express = require("express");
//allows us to acesss routs in Nodejs from a different domain, and that wil be from react application
const cors = require("cors");
//helps us read info from .env file we will create to store api key
require("dotenv").config();

//have to realize all the express magic and use any methods that come with express like .listen, .use,
const app = express();
app.use(cors());

app.get('/languages', async (req, res) => {
  const options = {
    method: "GET",
    url: process.env.URL,
    headers: {
      "X-RapidAPI-Host": process.env.APIHost,
      "X-RapidAPI-Key": process.env.APIKey,
    },
  }

  try {
    //url from api
    const response = await axios(options)
    //get the data
    // console.log("response.data:", response.data); // { code: 200, data: { auto: 'Detect Language, af: 'afrikaans, sq: 'Albanian', ar: 'Arabic'.. }}
    //we want to get the data-obj inside, but only the keys -->Object.keys(response.data.data) ---> ['auto', 'af', 'sq', 'am', 'ar', 'hy',...]
    //then map the keys and put each key as an element in an array ---> .map(key => response.data.data[key]
    //result: ['Detect Language', 'Afrikaans', 'Albanian', 'Amharic', 'Arabic',...] --> getting each key's value
    const arrOfData = Object.keys(response.data.data).map(key => response.data.data[key]);
    res.status(200).json(arrOfData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err });
  }
});

//THIS WORKS TOO,from API's way
// axios.request(options).then(function (response) {
// 	console.log(response.data);
//     const arrOfData = Object.keys(response.data.data).map(key => response.data.data[key]);
//     res.status(200).json(arrOfData);
// }).catch(function (error) {
// 	console.error(error);
// });
// });

//ANOTHER WAY W/ THE URL & OPTIONS
app.get('/translation', async (req, res) => {
    //passing them as a query, from our  front-end
    const { textToTranslate, outputLanguage, inputLanguage } = req.query
  
    const options = {
      method: 'GET',
      params: {
        text: textToTranslate,
        tl: outputLanguage,
        sl: inputLanguage,
      },
      headers: {
        "X-RapidAPI-Host": process.env.APIHost,
      "X-RapidAPI-Key": process.env.APIKey,
      },
    }
  
    try {
      const response = await axios(
        'https://google-translate20.p.rapidapi.com/translate',
        options
      )
      res.status(200).json(response.data.data.translation)
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: err })
    }
  })

//help us listen to the port, the consolelog message with port,
app.listen(PORT, () => console.log("Running on port " + PORT));
