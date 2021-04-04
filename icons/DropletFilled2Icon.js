import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'DropletFilled2Icon',
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
      "class": "icon icon-tabler icon-tabler-droplet-filled-2"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M6.8 11a6 6 0 1 0 10.396 0l-5.197 -8l-5.2 8z"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M6 14h12"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M7.305 17.695l3.695 -3.695"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M10.26 19.74l5.74 -5.74l-5.74 5.74z"
      }
    }), " "]);
  }

};