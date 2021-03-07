const mongoose = require('mongoose');

const URI =`mongodb+srv://samad:universe1@cluster0.srnxf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const connectDB = async()=>{
    await mongoose.connect(URI , {useNewUrlParser:true ,useUnifiedTopology: true } );
    console.log('Mongo Atlas Connected ...')


}
 module.exports= connectDB