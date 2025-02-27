const mongoose = require('mongoose');

const connectDb = async () => { 
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        });
        console.log('MongoDB connection SUCCESS');
    } catch (error) {
        console.error('MongoDB connection FAIL', error.message);
        process.exit(1);
    }
}

module.exports = connectDb;