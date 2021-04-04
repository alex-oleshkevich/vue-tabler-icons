import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'PizzaIcon',
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
      "class": "icon icon-tabler icon-tabler-pizza"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M12 21.5c-3.04 0 -5.952 -.714 -8.5 -1.983l8.5 -16.517l8.5 16.517a19.09 19.09 0 0 1 -8.5 1.983z"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M5.2 15.772a14.939 14.939 0 0 0 6.995 1.728a14.944 14.944 0 0 0 6.638 -1.545"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "13",
        "y1": "11.01",
        "x2": "13",
        "y2": "11"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "11",
        "y1": "14",
        "x2": "11",
        "y2": "13.99"
      }
    }), " "]);
  }

};