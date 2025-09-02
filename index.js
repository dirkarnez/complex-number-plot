var pointCount = 3142;
var i, r;

var x = [];
var y = [];
var z = [];
var c = [];

for(i = 0; i < pointCount; i++)
 {
     r = 1;
     x.push(Math.sin(i / 60));
     y.push(Math.cos(i / 60));
     z.push(i);
     c.push(i)
 }

Plotly.newPlot('myDiv', [{
     type: 'scatter3d',
     mode: 'lines',
     x: x,
     y: y,
     z: z,
     opacity: 0.7,
     line: {
       width: 10,
       color: c,
       colorscale: 'Viridis'}
    }]);
