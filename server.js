const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(require("cors")());

const lineRoutes = require("./routes/lineRoutes");
const stationRoutes = require("./routes/stationRoutes");
const routeRoutes = require("./routes/routeRoutes");

app.use("/api/lines", lineRoutes);
app.use("/api/stations", stationRoutes);
app.use("/api/route", routeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
