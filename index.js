/* const { WebClient } = require('@slack/web-api');

console.log('Getting started with Node Slack SDK');

const web = new WebClient(process.env.SLACK_TOKEN);
*/
var http = require('http');

function requestListener(request, response) {
	response.writeHead(200);
	response.end('Coucou');

	if (request.method === 'GET') {
		console.log('requête reçue');
	} else if (request.method === 'POST') {
		console.log('no puedo');
	}
};

var server = http.createServer(requestListener);

server.listen(8080);
