var chartDom = document.getElementById('barRace');
var myChart = echarts.init(chartDom);
var option;

const data = [];
for (let i = 0; i < 5; ++i) {
  data.push(Math.round(Math.random() * 200));
}
option = {

  grid: {
    left: '3%',
    right: '10%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    max: 'dataMax'
  },
  yAxis: {
    type: 'category',
    data: ['MYR', 'VND', 'THB', 'AUD', 'SGD'],
    inverse: true,
    animationDuration: 1000,
    animationDurationUpdate: 1000,
    max: 4 // only the largest 3 bars will be displayed
  },
  series: [
    {
      realtimeSort: true,
      name: 'Exchange Rates / 100$',
      type: 'bar',
      data: data,
      label: {
        show: true,
        position: 'right',
        valueAnimation: true
      }
    }
  ],
  legend: {
    show: true
  },
  animationDuration: 0,
  animationDurationUpdate: 3000,
  animationEasing: 'linear',
  animationEasingUpdate: 'linear'
};
function run() {
  for (var i = 0; i < data.length; ++i) {
    if (Math.random() > 0.9) {
      data[i] += Math.round(Math.random() * 2000);
    } else {
      data[i] += Math.round(Math.random() * 200);
    }
  }
  myChart.setOption({
    series: [
      {
        type: 'bar',
        data
      }
    ]
  });
}
setTimeout(function () {
  run();
}, 0);
setInterval(function () {
  run();
}, 3000);

option && myChart.setOption(option);