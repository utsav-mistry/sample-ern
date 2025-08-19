const express = require("express");
const path = require("path");
const app = express();

// Serve static files from React
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

const PORT = process.env.PORT || 12000;
app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
