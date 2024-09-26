const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const ddb_connection = await mongoose.connect(process.env.MONGO_URI);
        // console.log('MongoDB connected successfully:',ddb_connection);
        return// ddb_connection;
    } catch (err) {
        console.error("Database connection error", err);
        process.exit(1);
    }
};

module.exports = { connectDB };

/*
below is the config file that has been removed from the config file, as it is not needed for mongo driver v 4.0.0 or above.
{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
*/