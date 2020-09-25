import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'TrafficConeIcon',
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
      "class": "icon icon-tabler icon-tabler-traffic-cone"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "4",
        y1: "20",
        x2: "20",
        y2: "20"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "9.4",
        y1: "10",
        x2: "14.6",
        y2: "10"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "7.8",
        y1: "15",
        x2: "16.2",
        y2: "15"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M6 20l5 -15h2l5 15"
      }
    }), " "]);
  }
};