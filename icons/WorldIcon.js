import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'WorldIcon',
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
      "class": "icon icon-tabler icon-tabler-world"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "9"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "3.6",
        y1: "9",
        x2: "20.4",
        y2: "9"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "3.6",
        y1: "15",
        x2: "20.4",
        y2: "15"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M11.5 3a17 17 0 0 0 0 18"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12.5 3a17 17 0 0 1 0 18"
      }
    }), " "]);
  }
};