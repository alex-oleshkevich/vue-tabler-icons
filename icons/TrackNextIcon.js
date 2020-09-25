import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'TrackNextIcon',
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
      "class": "icon icon-tabler icon-tabler-track-next"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M13.69 4.198l6.56 6.25c1 .798 1 2.306 0 3.105l-6.564 6.252c-.67 .48 -1.686 0 -1.686 -.805v-4l-5.394 4.808c-.669 .478 -1.606 0 -1.606 -.808v-14c0 -.812 .936 -1.285 1.602 -.809l5.398 4.809v-4c0 -.816 1.02 -1.28 1.69 -.802z"
      }
    }), " "]);
  }
};