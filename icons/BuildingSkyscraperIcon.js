import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'BuildingSkyscraperIcon',
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
      "class": "icon icon-tabler icon-tabler-building-skyscraper"
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
        d: "M5 21v-14l8 -4v18"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M19 21v-10l-6 -4"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "9",
        y1: "9",
        x2: "9",
        y2: "9.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "9",
        y1: "12",
        x2: "9",
        y2: "12.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "9",
        y1: "15",
        x2: "9",
        y2: "15.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "9",
        y1: "18",
        x2: "9",
        y2: "18.01"
      }
    }), " "]);
  }
};