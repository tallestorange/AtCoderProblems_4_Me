
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
      staticClass: 'v-chart',
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
  data: () => ({
    tooltip: {
      position: 'top',
      formatter: function (p) {
          var format = echarts.format.formatTime('yyyy-MM-dd', p.data[0]);
          return format + ': ' + p.data[1];
      }
    },
    visualMap: {
        min: 0,
        max: 1000,
        calculable: true,
        orient: 'vertical',
        left: '670',
        top: 'center'
    },

    calendar: [
    {
        orient: 'vertical',
        range: '2015'
    },
    {
        left: 300,
        orient: 'vertical',
        range: '2016'
    },
    {
        left: 520,
        cellSize: [20, 'auto'],
        bottom: 10,
        orient: 'vertical',
        range: '2017',
        dayLabel: {
            margin: 5
        }
    }],

    series: [{
        type: 'heatmap',
        coordinateSystem: 'calendar',
        calendarIndex: 0,
        data: getVirtulData(2015)
    }, {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        calendarIndex: 1,
        data: getVirtulData(2016)
    }, {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        calendarIndex: 2,
        data: getVirtulData(2017)
    }]
  }),
  computed: {
    canvasStyle () {
      return {
        width: this.width,
        height: this.height,
      };
    },
    getVirtulData(year) {
      year = year || '2017';
      var date = +echarts.number.parseDate(year + '-01-01');
      var end = +echarts.number.parseDate((+year + 1) + '-01-01');
      var dayTime = 3600 * 24 * 1000;
      var data = [];
      for (var time = date; time < end; time += dayTime) {
          data.push([
              echarts.format.formatTime('yyyy-MM-dd', time),
              Math.floor(Math.random() * 1000)
          ]);
      }
      return data;
    }

  },
  methods: {
    init () {
      const { widthChangeDelay } = this;
      // set 

      if (this.pathOption) {
        this.pathOption.forEach((p) => {
          _object.set(this.$data._defaultOption, p[0], p[1]);
        });
      }

      this.chartInstance = ECharts.init(this.$refs.canvas, 'material');
      this.chartInstance.setOption(_object.merge(this.option, this.$data._defaultOption));
      window.addEventListener('optimizedResize', (e) => {
        setTimeout(_ => {
          this.chartInstance.resize();
        }, this.widthChangeDelay);
      });      
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
