import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'AlienIcon',
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
      "class": "icon icon-tabler icon-tabler-alien"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M11 17a2.5 2.5 0 0 0 2 0"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 3C7.336 3 4.604 5.331 4.138 8.595a11.816 11.816 0 0 0 1.998 8.592 10.777 10.777 0 003.199 3.064h0c1.666.999 3.664.999 5.33 0h0a10.777 10.777 0 0 0 3.199 -3.064 11.89 11.89 0 001.998-8.592C19.396 5.33 16.664 3 12 3z"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "8",
        y1: "11",
        x2: "10",
        y2: "13"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "16",
        y1: "11",
        x2: "14",
        y2: "13"
      }
    }), " "]);
  }
};