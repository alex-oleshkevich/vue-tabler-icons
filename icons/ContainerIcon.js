import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'ContainerIcon',
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
      "class": "icon icon-tabler icon-tabler-container"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M20 4v.01"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M20 20v.01"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M20 16v.01"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M20 12v.01"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M20 8v.01"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "8",
        y: "4",
        width: "8",
        height: "16",
        rx: "1"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M4 4v.01"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M4 20v.01"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M4 16v.01"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M4 12v.01"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M4 8v.01"
      }
    }), " "]);
  }
};