var chartDom = document.getElementById('pie');
var myChart = echarts.init(chartDom);
var option;

option = {
  title: {
    text: 'OS Systems',
    subtext: 'Just Fake',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Window' },
        { value: 735, name: 'MacOS' },
        { value: 580, name: 'Ubuntu' },
        { value: 484, name: 'Mint' },
        { value: 300, name: 'Fedora' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

option && myChart.setOption(option);