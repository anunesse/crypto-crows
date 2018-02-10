drawChart = (data) => {

	const chart = new CanvasJS.Chart("chartContainer", {
		title:{
			text: "Data"
		},
		data: [{
			type: "column",
			dataPoints: data
		}]
	});

	chart.render();

};