import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'ReportMedicalIcon',
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
      "class": "icon icon-tabler icon-tabler-report-medical"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "9",
        y: "3",
        width: "6",
        height: "4",
        rx: "2"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "10",
        y1: "14",
        x2: "14",
        y2: "14"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "12",
        y1: "12",
        x2: "12",
        y2: "16"
      }
    }), " "]);
  }
};