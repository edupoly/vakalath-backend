const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require("./routes/userRoutes");
const caseRoutes = require("./routes/caseRoutes");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json());
app.use(cors());


dotenv.config();
connectDB();

app.use("/api/users", userRoutes);
app.use("/api/cases", caseRoutes);


const PORT = process.env.PORT || 4500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
