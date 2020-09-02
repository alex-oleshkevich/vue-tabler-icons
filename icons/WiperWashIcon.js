import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'WiperWashIcon',
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
      "class": "icon icon-tabler icon-tabler-wiper-wash"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z"
      }
    }), "   ", h("circle", {
      attrs: {
        cx: "12",
        cy: "20",
        r: "1"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M3 11l5.5 5.5a5 5 0 0 1 7 0l5.5 -5.5a12 12 0 0 0 -18 0"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 20v-14"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M4 6a4 4 0 0 1 .4 -1.8"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M7 2.1a4 4 0 0 1 2 0"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 6a4 4 0 0 0 -.4 -1.8"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 6a4 4 0 0 1 .4 -1.8"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M15 2.1a4 4 0 0 1 2 0"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M20 6a4 4 0 0 0 -.4 -1.8"
      }
    }), " "]);
  }
};