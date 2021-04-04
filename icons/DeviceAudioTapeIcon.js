import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'DeviceAudioTapeIcon',
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
      "class": "icon icon-tabler icon-tabler-device-audio-tape"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("rect", {
      "attrs": {
        "x": "3",
        "y": "5",
        "width": "18",
        "height": "14",
        "rx": "2"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M3 17l4 -3h10l4 3"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "7.5",
        "cy": "9.5",
        "r": ".5",
        "fill": "currentColor"
      }
    }), "   ", h("circle", {
      "attrs": {
        "cx": "16.5",
        "cy": "9.5",
        "r": ".5",
        "fill": "currentColor"
      }
    }), " "]);
  }

};