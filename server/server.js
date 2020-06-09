import express from 'express'
import fs from 'fs'
import path from 'path'

import React from 'react';
import ReactDomServer from 'react-dom/server'
import { StaticRouter } from 'react-router'

import App from '../src/App'

const PORT = process.env.PORT || 8000;

const app = express()




app.use('^/$', (req, res,next) => {
    
    const context = {}
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
            return res.status(500).send("Internal Server Error. Build is not readable");
        }
        return res.send(data.replace('<div id="root"></div>', `<div id="root">${ReactDomServer.renderToString(
            <StaticRouter
                location={req.url}
                context={context}
            ><App /></StaticRouter>
        )}</div>`));

    });
});

app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.listen(PORT, () => {
    console.log(`App Launched Successfully on Port ${PORT}`)
})