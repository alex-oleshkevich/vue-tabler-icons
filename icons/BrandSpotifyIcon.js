import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'BrandSpotifyIcon',
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
      "class": "icon icon-tabler icon-tabler-brand-spotify"
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
        r: "9"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M8 11.973c2.5-1.473 5.5-.973 7.5.527"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M9 15c1.5-1 4-1 5 .5"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M7 9c2-1 6-2 10 .5"
      }
    }), " "]);
  }
};