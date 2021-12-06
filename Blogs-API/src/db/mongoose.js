const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/blogs-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log('Connected to Database');
}).catch(error =>{
    console.log("Unable to Connect", error);
})