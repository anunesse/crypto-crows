const request =
	'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH,BTC&tsyms=EUR';

fetch()
	.then(response => response.json())
	.then(response => {
		console.info(response);
	});