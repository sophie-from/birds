const express = require("express");
const axios = require("axios");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path")

dotenv.config({ debug:true,
    path: path.resolve(__dirname, "birds/.env")});
    console.log(__dirname);
    console.log(dotenv.config({ debug:true,
        path: path.resolve(__dirname, "birds/.env")}));
    
    
console.log("Loaded API Key:", process.env.VITE_NUTHATCH_API_KEY);
 const app = express();
 const PORT = 5000;
 app.use(cors({
    origin: "http://localhost:5173", // Allow frontend domain
    methods: "GET,POST",
    allowedHeaders: ["api_key"]
}));
 app.get("/", async (req, res) => {
    try {

        console.log("Request received at /birds");
        console.log("Using API Key:", process.env.VITE_NUTHATCH_API_KEY); // Check API key

        const response = await axios.get("https://nuthatch.lastelm.software/v2/birds?family=Strigidae&hasImg=true", {
           // headers: { "api-key": "77078385-7d10-44ef-8165-ce01c31e5c85"}
           headers: { "api-key": process.env.VITE_NUTHATCH_API_KEY}

        });

        console.log("Bird data received:", response.data);
        res.json(response.data);
    } catch (error) {
        console.error("API call failed:", error.response?.data || error);
        res.status(500).json({ error: "Failed to fetch birds" });
    }})


app.listen(PORT, ()=> {console.log(`Server running on http://localhost:${PORT}`)});