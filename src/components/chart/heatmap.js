
/**
 * ECharts Vue Wrapper
 * Michael Wang
 */
import colors from 'vuetify/es5/util/colors';
import _object from 'lodash/object';

const ECharts = window.echarts || undefined;
if (ECharts === undefined) {
  console.error('ECharts is not defined');
}
// set color palette
const colorPalette = [];
Object.entries(colors).forEach((item) => {
  if (item[1].base) {
    colorPalette.push(item[1].base);
  }
});

// default 
// const colorPalette = ['#d87c7c', '#919e8b', '#d7ab82', '#6e7074', '#61a0a8', '#efa18d', '#787464', '#cc7e63', '#724e58', '#4b565b'];
// ECharts.registerTheme('material', {
//   color: colorPalette,
//   graph: {
//     color: colorPalette
//   }
//   textStyle: {

//   }
// });
(function () {
  const throttle = function (type, name, obj) {
    obj = obj || window;
    let running = false;
    let func = function () {
      if (running) { return }
      running = true;
      requestAnimationFrame(function () {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };
  /* init - you can init any event */
  throttle('resize', 'optimizedResize');
})();

export default {
  name: 'v-echart',

  render (h) {
    const data = {
      staticClass: 'v-echart',
      style: this.canvasStyle,
      ref: 'canvas',
      on: this.$listeners
    };
    return h('div', data);
  },

  props: {
    // args of  ECharts.init(dom, theme, opts)
    width: { type: String, default: 'auto' },
    height: { type: String, default: '400px' },
    merged: {
      type: Boolean,
      default: true,
    },
    // instace.setOption 
    pathOption: [Object, Array],
    option: Object, 
    // general config
    textStyle: Object,
    title: Object,
    legend: [Object, Array],
    tooltip: Object,
    grid: { type: [Object, Array] },
    xAxis: [Object, Array],
    yAxis: [Object, Array],
    series: [Object, Array],
    axisPointer: Object,        
    dataset: Array, //{ type: [Object, Array], default () { return {} } }, // option.dataSet
    colors: Array, // echarts.option.color
    backgroundColor: [Object, String],
    toolbox: { type: [Object, Array] },
    // resize delay
    widthChangeDelay: {
      type: Number,
      default: 450
    }
  },
  computed: {
    canvasStyle () {
      return {
        width: this.width,
        height: this.height,
      };
    },
  },
  data: () => ({
    _defaultOption: {
      tooltip : {},
      visualMap: {
        min: 0,
        max: 5000,
        type: 'piecewise',
        orient: 'horizontal',
        left: 'center',
        top: 65,
        textStyle: {
          color: '#000'
        }
      },
      calendar: {
        top: 120,
        left: 30,
        right: 30,
        cellSize: ['auto', 13],
        range: ['2018-07-01', '2019-03-17'],
        itemStyle: {
          normal: {borderWidth: 0.5}
        },
        yearLabel: {show: false}
      },
      series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: []
      }
    }
  }),
  methods: {
    init () {
      const { widthChangeDelay } = this;

      this.$data._defaultOption.series.data = this.getVirtulData(2016)          
      this.chartInstance = ECharts.init(this.$refs.canvas, 'material');
      this.chartInstance.setOption(_object.merge(this.option, this.$data._defaultOption));

      window.addEventListener('optimizedResize', (e) => {
        setTimeout(_ => {
          this.chartInstance.resize();
        }, this.widthChangeDelay);
      });
    },

    getVirtulData (year) {
      year = year || '2017'
      let submissionData = this.$store.getters.getSubmissionsRawData
      let data = []
      let submissionDict = {}

      for (let key in submissionData) {
        let submission = submissionData[key]
        let data = []
        if (submission.result != "AC" || submission.point <= 0) {
          continue
        }

        let dt = new Date(0)
        dt.setUTCSeconds(submission.epoch_second)
        let yr = dt.getFullYear()
        let mn = ("00" + (dt.getMonth()+1)).slice(-2)
        let dy = ("00" + dt.getDate()).slice(-2)
        let dateStr = yr + "-" + mn + "-" + dy

        if(submissionDict[dateStr]){
          submissionDict[dateStr] += submission.point
        }
        else {
          submissionDict[dateStr] = submission.point
        }
      }

      // console.log(submissionDict)
      // var date = +echarts.number.parseDate(year + '-01-01')
      // var end = +echarts.number.parseDate((+year + 1) + '-01-01')
      
      // var dayTime = 3600 * 24 * 1000
      // var data = []


      // for (var time = date; time < end; time += dayTime) {
      //     data.push([
      //       echarts.format.formatTime('yyyy-MM-dd', time),
      //       Math.floor(Math.random() * 10000)
      //     ]);
      // }

      for (let key in submissionDict) {
        data.push([
          key,
          submissionDict[key]
        ])
      }

      return data;
    },

    resize () {
      this.chartInstance.resize();
    },
    clean () {
      window.removeEventListener('resize', this.chartInstance.resize);
      this.chartInstance.clear();
    },
  },
  mounted () {
    this.init();
  },

  beforeDestroy () {
    this.clean();
  }
};
