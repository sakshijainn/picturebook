const mongoose = require('mongoose');





mongoose.connect("mongodb://localhost:27017/picture",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log(`Connection sucessful!!`);
}).catch((e)=>{
    console.log(`No connection! Sorry.`);
})



