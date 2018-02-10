const request =
	'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,TH,XRP,BCH,ADA,LTC,XLM,NEO,EOS&tsyms=EUR';

fetch(request)
	.then(response => response.json())
	.then(response => {
		let data = [];
		Object.keys(response.RAW).forEach(k => {
			data.push({
				y: response.RAW[k] ? response.RAW[k].EUR.PRICE : 0,
				label: k
			});
		});
		drawChart(data);
	});