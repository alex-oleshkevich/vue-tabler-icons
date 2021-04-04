import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'PhysotherapistIcon',
  props: {
    size: {
      type: String,
      default: '24'
    }
  },
  functional: true,

  render(h, ctx) {
    const size = parseInt(ctx.props.size) + 'px';
    const attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "stroke-width": "2",
        "stroke": "currentColor",
        "fill": "none",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "icon icon-tabler icon-tabler-physotherapist"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M9 15l-1 -3l4 -2l4 1h3.5"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "4",
        "cy": "19",
        "r": "1"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "12",
        "cy": "6",
        "r": "1"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M12 17v-7"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M8 20h7l1 -4l4 -2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M18 20h3"
      }
    }), " "]);
  }

};