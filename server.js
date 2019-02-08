var express = require('express')
var app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlroutes')(app);

require('./routes/apiroutes')(app);

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log("Server running on 3000")
})