var twoDArray= [];//initialize array
var dataArray= []; 
var nx = 100;
var ny = 100

for (var i = 0 ; i < nx; i++) {
    twoDArray[i] = [];//initialize inner array
    dataArray[i] = (Math.random() * 100); 
    for (var j = 0; j < ny; j++) {//i++ = j++
        twoDArray[i][j] = (Math.random() * 100);
    }
}

var myPlot = g3.plot('.plot_div')
	.height(400)
	.xDomain([0, 500])
	.yDomain([0, 300])
	.draw(); 

var wigglePlot = g3.plot('.wiggle_plot_div')
  .height(400)
  .xDomain([-600, 600])
  .yDomain([0, twoDArray[0].length])
  .draw();

var wig = g3.wiggle(wigglePlot, twoDArray)
  .skip(10)
  .xMult(1)
  .sampleRate(10)
  .xTrans(-500)
  .draw();

// var seismicPlot = g3.plot('.seismic_plot_div')
//   .height(400)
//   .xDomain([0, twoDArray.length - 1])
//   .yDomain([0, twoDArray[0].length - 1])
//   .draw();

// var max = Math.max(twoDArray);
// var colorScale = d3.scale.linear()
//   .domain([-max, 0, max])
//   .range(['#FF0000', '#FFF', '#0000FF']);

// var seismic = g3.seismic(seismicPlot, [twoDArray])
//   .nDColorMap([colorScale])
//   .draw();

// Get a cross section from the 2d array
// var arr = [];
// for(var i = 0; i < twoDArray.length; i++){
//   arr.push(twoDArray[i][0]);
// }

// // Grab the min and max values from the array
// var max = d3.max(arr);
// var min = d3.min(arr);

// var horizonPlot = g3.plot('.horizon_plot_div')
// .height(400)
// .xDomain([0, twoDArray.length])
// .yDomain([min, max])
// .draw();

// var horizon = g3.horizon(horizonPlot, arr).draw();

var myLogPlot = g3.plot('.log_plot_div')
  .height(400).xDomain([0, 300])
  .yDomain([0, dataArray.length])
  .draw();

var myLog = g3.log(myLogPlot, dataArray).draw();
  
var myLog2 = g3.log(myLogPlot, dataArray)
  .color('black')
  .xMult(0.5)
  .xTrans(200)
  .draw();

