import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'AffiliateIcon',
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
      "class": "icon icon-tabler icon-tabler-affiliate"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M11.683 12.317l5.759 -5.759"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "5.5",
        "cy": "5.5",
        "r": "1.5"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "18.5",
        "cy": "5.5",
        "r": "1.5"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "18.5",
        "cy": "18.5",
        "r": "1.5"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "8.5",
        "cy": "15.5",
        "r": "4.5"
      }
    }), " "]);
  }

};