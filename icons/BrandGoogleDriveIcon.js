import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'BrandGoogleDriveIcon',
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
      "class": "icon icon-tabler icon-tabler-brand-google-drive"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 10l-6 10l-3 -5l6 -10z"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M9 15h12l-3 5h-12"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M15 15l-6 -10h6l6 10z"
      }
    }), " "]);
  }
};