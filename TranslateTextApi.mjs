import express from 'express';
import request from 'request';
const app = express();

//const client= require('redis')

import { createClient } from 'redis';
const client = createClient();
await client.connect();

//Endpoint Defination

//https://localhost:8000/translate/tiger/kn

//op: ಹುಲಿ

app.get('/', (req, res) => {
    res.send("Api is up on !!")
})

// Source-> String to be Translated

// lang-> Language that to be converted

app.get('/translate/:Source/:lang', async (req, res) => {

    const options = {
        method: 'GET',
        url: 'https://nlp-translation.p.rapidapi.com/v1/translate',
        qs: { text: req.params.Source, to: req.params.lang },
        headers: {
            'x-rapidapi-host': 'nlp-translation.p.rapidapi.com',
            'x-rapidapi-key': 'Enter key here',
            useQueryString: true
        }
    };

    const str1 = req.params.Source;

    const str2 = req.params.lang;

    const newString = str1.concat('+', str2)

    client.get(newString).then(response => {
        if (response != null) {
            res.send('cache hit : '+ response)
            
        }
        else {

            request(options, function (error, response, body) {

                if (error) throw new Error(error);

                const { translated_text } = JSON.parse(body)
                //parse the particular content that is needed
                const data = Object.values(translated_text)[0];

                res.send(data)

                client.setEx(newString, 15000, data)

                console.log("success");
            });
        }
    }).catch((err) => {
        console.error(err)
    })

});


app.listen(8000, err => {
    if (err)
        console.log("Error while starting server")
    else
        console.log("Server has been started at port 8000")
})
