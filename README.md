```
var data = [];
// Parametric curve
for (var t = 0; t < 25; t += 0.001) {
  var x = Math.cos(t);
  var y = Math.sin(t);
  var z = t;
  data.push([x, y, z]);
}
console.log(data.length);
option = {
  tooltip: {},
  backgroundColor: '#fff',
  xAxis3D: {
    type: 'value',
    name: "Real (X)"
  },
  yAxis3D: {
    type: 'value',
    name: "Imaginary (Y)"
  },
  zAxis3D: {
    type: 'value',
    name: "Time (Z)"
  },
  grid3D: {
    viewControl: {
      projection: 'orthographic'
    }
  },
  series: [
    {
      type: 'line3D',
      data: data,
      lineStyle: {
      
        width: 10
      }
    }
  ]
};
```
