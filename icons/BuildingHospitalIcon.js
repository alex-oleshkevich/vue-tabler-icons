import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'BuildingHospitalIcon',
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
      "class": "icon icon-tabler icon-tabler-building-hospital"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "3",
        y1: "21",
        x2: "21",
        y2: "21"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "10",
        y1: "9",
        x2: "14",
        y2: "9"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "12",
        y1: "7",
        x2: "12",
        y2: "11"
      }
    }), " "]);
  }
};