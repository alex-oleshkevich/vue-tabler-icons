import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'FormsIcon',
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
      "class": "icon icon-tabler icon-tabler-forms"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 3a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M6 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M13 7h7a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-7"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M5 7h-1a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h1"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M17 12h.01"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M13 12h.01"
      }
    }), " "]);
  }
};