const request =
	'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH,BTC&tsyms=EUR';
const data = [
	{ y: 67, label: "Inbox" },
	{ y: 28, label: "Archives" },
	{ y: 10, label: "Labels" },
	{ y: 7, label: "Drafts"},
	{ y: 15, label: "Trash"},
	{ y: 6, label: "Spam"}
];

fetch(request)
	.then(response => response.json())
	.then(response => {
		drawChart(data);
		const app = new Vue({
			el: '#app',
			data: {
				result: response.DISPLAY
			}
		});
	});