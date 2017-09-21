const express = require('express');
const bodyParser = require('body-parser');
const port = 8080;
const messages = [];
const app = express();
app.use(express.static('assets'))
app.use(bodyParser.json())
app.get('/messages', function(req, res, next){
	res.status(200).json({ messages: messages });
})
app.post('/messages', (req, res, next) => {
	messages.push({
		name: req.body.name,
		message: req.body.message,
		time: new Date()
	});
	res.status(200).json({		
		messages: messages
	});

	// console.log(req.body);
});

app.listen(port, () => {
	console.log(`Listening on port: ${port}`)
})
