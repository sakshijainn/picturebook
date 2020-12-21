const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/picturedata',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log(`Connection sucessful!!`);
}).catch((e)=>{
    console.log(`No connection! Sorry.`);
})


