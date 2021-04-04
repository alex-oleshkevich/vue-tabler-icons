import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'RechargingIcon',
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
      "class": "icon icon-tabler icon-tabler-recharging"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M7.038 4.5a9 9 0 0 0 -2.495 2.47"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M3.186 10.209a9 9 0 0 0 0 3.508"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M4.5 16.962a9 9 0 0 0 2.47 2.495"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M10.209 20.814a9 9 0 0 0 3.5 0"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M16.962 19.5a9 9 0 0 0 2.495 -2.47"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M20.814 13.791a9 9 0 0 0 0 -3.508"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M19.5 7.038a9 9 0 0 0 -2.47 -2.495"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M13.791 3.186a9 9 0 0 0 -3.508 -.02"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M12 8l-2 4h4l-2 4"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M12 21a9 9 0 0 0 0 -18"
      }
    }), " "]);
  }

};