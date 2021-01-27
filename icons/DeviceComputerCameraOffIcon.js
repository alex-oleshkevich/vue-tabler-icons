import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'DeviceComputerCameraOffIcon',
  props: {
    size: {
      type: String,
      default: '24'
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        "stroke-width": "2",
        stroke: "currentColor",
        fill: "none",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "icon icon-tabler icon-tabler-device-computer-camera-off"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M6.15 6.153a7 7 0 0 0 9.696 9.696m2.003 -2.001a7 7 0 0 0 -9.699 -9.695"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M9.13 9.122a3 3 0 0 0 3.743 3.749m2.001 -2.009a3 3 0 0 0 -3.737 -3.736"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M8 16l-2.091 3.486a1 1 0 0 0 .857 1.514h10.468a1 1 0 0 0 .857 -1.514l-2.091 -3.486"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "3",
        y1: "3",
        x2: "21",
        y2: "21"
      }
    }), " "]);
  }
};