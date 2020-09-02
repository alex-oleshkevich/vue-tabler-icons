import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'BrandTailwindIcon',
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
      "class": "icon icon-tabler icon-tabler-brand-tailwind"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M11.667 6 c -2.49 0 -4.044 1.222 -4.667 3.667 c 0.933 -1.223 2.023 -1.68 3.267 -1.375 c 0.71 0.174 1.217 0.68 1.778 1.24 c 0.916 0.912 1.975 1.968 4.288 1.968 c 2.49 0 4.044 -1.222 4.667 -3.667 c -0.933 1.223 -2.023 1.68 -3.267 1.375 c -0.71 -0.174 -1.217 -0.68 -1.778 -1.24 c -0.916 -0.912 -1.975 -1.968 -4.288 -1.968 z m-4 6.5 c -2.49 0 -4.044 1.222 -4.667 3.667 c 0.933 -1.223 2.023 -1.68 3.267 -1.375 c 0.71 0.174 1.217 0.68 1.778 1.24 c 0.916 0.912 1.975 1.968 4.288 1.968 c 2.49 0 4.044 -1.222 4.667 -3.667 c -0.933 1.223 -2.023 1.68 -3.267 1.375 c -0.71 -0.174 -1.217 -0.68 -1.778 -1.24 c -0.916 -0.912 -1.975 -1.968 -4.288 -1.968 z"
      }
    }), " "]);
  }
};