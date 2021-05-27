const express = require("express");
const app = express();

app.use(express.static('public'))
// simple route
app.get("/", (req, res) => {
	res.sendFile('./public/index.html', { root: __dirname });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
