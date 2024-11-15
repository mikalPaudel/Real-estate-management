// server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const propertyRoutes = require("./routes/propertyRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://mikalpaudel58:mikal@cluster0.pt8fq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("MongoDB connection error:", error);
});

app.use("/api/properties", propertyRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});