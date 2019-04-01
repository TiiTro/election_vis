var ctx = document.getElementById("genderElectedChart");


var genderElectedChart = new Chart(ctx, {
   type: 'bar',
   data: {
			labels: ["Miehet", "Naiset"],
			datasets: [
				{
					label: "Valittuja",
					data: [5469, 3530],
					backgroundColor: [
						'rgba(54, 162, 235, 0.3)',
						'rgba(255, 99, 132, 0.3)'
					],
					borderColor: [
						'rgba(54, 162, 235, 1)',
						'rgba(255, 99, 132, 1)'
					],
					borderWidth: 1
				}
			]
		},
    options: {
			layout: {
				padding: {
					left: 10,
					right: 5,
					top: 5,
					bottom: 5
				}
			},
			title: {
        display: true,
				text: 'Kuntavaaleissa valitut sukupuolen mukaan',
				fontSize: 20,
				fotnFamily: 'Roboto'
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
						// min: 5,
						// stepSize: 1000
					}
				}]
				
			}
		}  
			
});




/////////////////////////////////////////////////////////////

// 
// 
// }
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });
// var bgColor = [];
// var json = [
//   1200,
//   1400,
//   1600,
//   1500,
//   1600,
//   1500,
//   1200
// ];

// var json2 = [
//   1300,
//   1200,
//   1400,
//   1600,
//   1700,
//   1800,
//   1300
// ];

// json.forEach(function (e, i) {
//   if(i != json.length -1) {
//     bgColor.push('blue');
//   } else {
//     bgColor.push('red');
//   }
// });

// // var i;
// //for(i = 0; i < json.length; i++) {
//  //if(i != json.length -1) {
//  //   bgColor.push('blue');
//  // } else {
//  //   bgColor.push('red');
//  // }
// //}
// //console.log(bgColor);

// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange", "Violet"],
//         datasets: [{
//             data: json2,
//             type: 'line',
//             //xAxisID: 'x-linear-axis',
//             steppedLine: true
//             }, {
//             label: '# of Votes',
//             data: json,
//             backgroundColor: bgColor,
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1,
//             //xAxisID: 'x-bar-axis'
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }],
//           // kahden x-akselin testaus
//           //  xAxes: [{
//           //    id: 'x-bar-axis',
//           //  }, {
//           //    id: 'x-linear-axis',
//           //    
//           //  }]
//         }
//     }
// });