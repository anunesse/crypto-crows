drawChart = (data) => {

	const chart = new CanvasJS.Chart("chartContainer", {
		title:{
			text: "Simple main crypto trends"
		},
		data: [{
			type: "column",
			dataPoints: data
		}]
	});

	chart.render();

};