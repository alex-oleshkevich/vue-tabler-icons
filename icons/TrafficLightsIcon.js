import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'TrafficLightsIcon',
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
      "class": "icon icon-tabler icon-tabler-traffic-lights"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "7",
        y: "2",
        width: "10",
        height: "20",
        rx: "5"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "12",
        cy: "7",
        r: "1"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "1"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "12",
        cy: "17",
        r: "1"
      }
    }), " "]);
  }
};