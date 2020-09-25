import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'BrandEdgeIcon',
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
      "class": "icon icon-tabler icon-tabler-brand-edge"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M20.978 11.372a9 9 0 1 0 -1.593 5.773"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M20.978 11.372c.21 2.993-5.034 2.413-6.913 1.486 1.392-1.6.402-4.038-2.274-3.851-1.745.122-2.927 1.157-2.784 3.202.28 3.99 4.444 6.205 10.36 4.79"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M3.022 12.628c-.283 -4.043 8.717 -7.228 11.248 -2.688"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12.628 20.978c-2.993.21-5.162-4.725-3.567-9.748"
      }
    }), " "]);
  }
};