import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'WindmillIcon',
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
      "class": "icon icon-tabler icon-tabler-windmill"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 12c2.76 0 5-2.01 5-4.5S14.76 3 12 3v9z"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 12c0 2.76 2.01 5 4.5 5s4.5-2.24 4.5-5h-9z"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 12c-2.76 0-5 2.01-5 4.5S9.24 21 12 21v-9z"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 12c0-2.76-2.01-5-4.5-5S3 9.24 3 12h9z"
      }
    }), " "]);
  }
};