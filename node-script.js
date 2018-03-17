const fs = require('fs');
const request = require('request');

/*fs.readFile('./package.json', (err, data) => {
	console.info('File read');
	if (err) throw err;
	const packageJson = JSON.parse(data);
	console.log('Name:' + packageJson.name);

	console.info('Request homepage');
	request.get(packageJson.homepage, (error, response) => {
		if (error) throw error;
		console.log('Response:', response);
	});
});*/

const readFileAsync = (filePath) => {
	return new Promise((resolve, reject) => {
		fs.readFile(filePath, (err, data) => {
			if (err) reject(err);
			resolve(data);
		});
	});
};

const getAsync = (url) => {
	return new Promise((resolve, reject) => {
		request.get(url, (err, data) => {
			if (err) reject(err);
			resolve(data);
		});
	});
};

readFileAsync('./package.json')
	.then(data => JSON.parse(data))
	.then(parsedData => getAsync(parsedData.homepage))
	.then(response => console.info(response))
	.catch(error => console.error(error));

//Promise.all([readFileAsync('./package.json'), getAsync('https://www.google.de')])
Promise.race([readFileAsync('./package.json'), getAsync('https://www.google.de')])
	.then(data => {
		console.info('Race: package, google??', data);
	})
	.catch(error => console.error(error));

console.info('here');
