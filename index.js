const request =
	'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,TH,XRP,BCH,ADA,LTC,XLM,NEO,EOS&tsyms=EUR';

const requestData = () => {
	fetch(request)
		.then(response => response.json())
		.then(responseJSON => {
			let data = [];
			Object.keys(responseJSON.RAW).forEach(k => {
				data.push({
					y: responseJSON.RAW[k] ? responseJSON.RAW[k].EUR.PRICE : 0,
					label: k
				});
			});
			drawChart(data);
		})
		.then(() => {
			console.info('data loaded');
		})
};

requestData();
setInterval(requestData, 5000);