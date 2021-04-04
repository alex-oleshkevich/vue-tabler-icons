import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'VaccineIcon',
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
      "class": "icon icon-tabler icon-tabler-vaccine"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M17 3l4 4"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M19 5l-4.5 4.5"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M11.5 6.5l6 6"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M16.5 11.5l-6.5 6.5h-4v-4l6.5 -6.5"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M7.5 12.5l1.5 1.5"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M10.5 9.5l1.5 1.5"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M3 21l3 -3"
      }
    }), " "]);
  }

};