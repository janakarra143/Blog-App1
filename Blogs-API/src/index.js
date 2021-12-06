const express = require("express");
const blogRouter = require("./routers/blog");
const cors = require('cors');
require('./db/mongoose')

const app = express();

app.use(express.json());

// app.all('/*', (req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Method', "");
//     res.header('Access-Control-Allow-Headers', '*');
//     next();
// })

app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use(blogRouter);

app.listen(3000, () =>
{
    console.log("app is running on port 3000")
}
)