import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'FoldUpIcon',
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
      "class": "icon icon-tabler icon-tabler-fold-up"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 13v-8l-3 3m6 0l-3 -3"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "9",
        y1: "17",
        x2: "10",
        y2: "17"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "14",
        y1: "17",
        x2: "15",
        y2: "17"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "19",
        y1: "17",
        x2: "20",
        y2: "17"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "4",
        y1: "17",
        x2: "5",
        y2: "17"
      }
    }), " "]);
  }
};