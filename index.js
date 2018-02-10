const request =
	'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH,BTC&tsyms=EUR';

fetch(request)
	.then(response => response.json())
	.then(response => {
		const app = new Vue({
			el: '#app',
			data: {
				result: response.DISPLAY
			}
		});
	});