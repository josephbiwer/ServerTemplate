const express = require('express');
const app = express();

app.use(express.json({extended: false}))

app.get('/ping', (req, res) => {
	console.log('ping command received');
	res.send('pong');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
