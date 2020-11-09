import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'Plant2Icon',
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
      "class": "icon icon-tabler icon-tabler-plant-2"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M2 9a10 10 0 1 0 20 0"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 19a10 10 0 0 1 10 -10"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M2 9a10 10 0 0 1 10 10"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 4a9.7 9.7 0 0 1 2.99 7.5"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5"
      }
    }), " "]);
  }
};