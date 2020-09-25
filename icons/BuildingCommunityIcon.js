import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'BuildingCommunityIcon',
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
      "class": "icon icon-tabler icon-tabler-building-community"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "13",
        y1: "7",
        x2: "13",
        y2: "7.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "17",
        y1: "7",
        x2: "17",
        y2: "7.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "17",
        y1: "11",
        x2: "17",
        y2: "11.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "17",
        y1: "15",
        x2: "17",
        y2: "15.01"
      }
    }), " "]);
  }
};