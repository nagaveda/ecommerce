require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

//Routes

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const order = require('./models/order');


//DB Connection
mongoose.connect(process.env.DATABASE,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true 
    }).then(()=>{
        console.log("DB CONNECTED...!");
    }).catch((err)=>{
        console.log("Unable to connect to the Database due to some error..!");
    });

// Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My Routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);

//Port
const port = process.env.PORT || 8000;

//Starting a server
app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`);
});