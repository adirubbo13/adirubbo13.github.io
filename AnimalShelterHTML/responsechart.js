new Chartist.Line('.ct-chart', {
  labels: [1+" Day", 2+" Days", 3+" Days", 4+" Days", 5+" Days", 6+" Days", 1+" Week", ],
  series: [
    [8, 3, 1, 0, 0, 0, 0,0 ],
  ]
}, {
  high: 8,
  low: 0,
  fullWidth: true,
  // As this is axis specific we need to tell Chartist to use whole numbers only on the concerned axis
  axisY: {
    onlyInteger: true,
    offset: 20
  }
});

