const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/js-api", (req, res) => {
    res.json({ message: "Hello from JavaScript backend!" });
});

app.listen(5003, () => console.log("JS Server running on port 5003"));
