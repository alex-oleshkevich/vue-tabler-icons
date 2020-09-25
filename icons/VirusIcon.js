import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'VirusIcon',
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
      "class": "icon icon-tabler icon-tabler-virus"
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
        r: "5"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 7v-4m-1 0h2"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 7v-4m-1 0h2",
        transform: "rotate(45 12 12)"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 7v-4m-1 0h2",
        transform: "rotate(90 12 12)"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 7v-4m-1 0h2",
        transform: "rotate(135 12 12)"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 7v-4m-1 0h2",
        transform: "rotate(180 12 12)"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 7v-4m-1 0h2",
        transform: "rotate(225 12 12)"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 7v-4m-1 0h2",
        transform: "rotate(270 12 12)"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 7v-4m-1 0h2",
        transform: "rotate(315 12 12)"
      }
    }), " "]);
  }
};