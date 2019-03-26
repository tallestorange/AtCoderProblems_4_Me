/**
 * ECharts Vue Wrapper
 * Michael Wang
 */
import colors from "vuetify/es5/util/colors";
import _object from "lodash/object";

const ECharts = window.echarts || undefined;
if (ECharts === undefined) {
  console.error("ECharts is not defined");
}
// set color palette
const colorPalette = [];
Object.entries(colors).forEach(item => {
  if (item[1].base) {
    colorPalette.push(item[1].base);
  }
});

(function() {
  const throttle = function(type, name, obj) {
    obj = obj || window;
    let running = false;
    let func = function() {
      if (running) {
        return;
      }
      running = true;
      requestAnimationFrame(function() {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };
  /* init - you can init any event */
  throttle("resize", "optimizedResize");
})();

export default {
  name: "v-echart",

  render(h) {
    const data = {
      staticClass: "v-echart",
      style: this.canvasStyle,
      ref: "canvas",
      on: this.$listeners
    };
    return h("div", data);
  },

  props: {
    // args of  ECharts.init(dom, theme, opts)
    width: { type: String, default: "auto" },
    height: { type: String, default: "400px" },
    merged: {
      type: Boolean,
      default: true
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
    canvasStyle() {
      return {
        width: this.width,
        height: this.height
      };
    }
  },
  data: () => ({
    _defaultOption: {
      tooltip: {},
      visualMap: {
        min: 0,
        max: 10000,
        type: "piecewise",
        orient: "horizontal",
        left: "center",
        top: 65,
        textStyle: {
          color: "#000"
        }
      },
      calendar: {
        top: 120,
        left: 30,
        right: 30,
        cellSize: ["auto", 13],
        range: "2019",
        itemStyle: {
          normal: { borderWidth: 0.5 }
        },
        yearLabel: { show: false }
      },
      series: {
        type: "heatmap",
        coordinateSystem: "calendar",
        data: []
      }
    }
  }),
  methods: {
    init() {
      const { widthChangeDelay } = this;

      this.$data._defaultOption.series.data = this.getVirtulData();
      this.chartInstance = ECharts.init(this.$refs.canvas, "material");
      this.chartInstance.setOption(
        _object.merge(this.option, this.$data._defaultOption)
      );

      window.addEventListener("optimizedResize", e => {
        setTimeout(_ => {
          this.chartInstance.resize();
        }, this.widthChangeDelay);
      });
    },

    getVirtulData() {
      let result = [];
      const userName = this.$store.getters.getUserName;
      const heatMapDict = this.$store.getters.getSubmissions(userName)

      for (let key in heatMapDict) {
        let data = heatMapDict[key]
        if (data.accepted_count > 0) {
          result.push([key, data.point_sum]);
        }
      }
      return result;
    },

    resize() {
      this.chartInstance.resize();
    },
    clean() {
      window.removeEventListener("resize", this.chartInstance.resize);
      this.chartInstance.clear();
    }
  },
  mounted() {
    this.init();
  },

  beforeDestroy() {
    this.clean();
  }
};
