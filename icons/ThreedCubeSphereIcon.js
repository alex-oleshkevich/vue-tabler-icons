import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'ThreedCubeSphereIcon',
  props: {
    size: {
      type: String,
      default: '24'
    }
  },
  functional: true,

  render(ctx) {
    const size = parseInt(ctx.$props.size) + 'px';
    const attrs = ctx.$data.attrs || {};
    const data = { ...ctx.$data,
      width: attrs.width || size,
      height: attrs.height || size
    }; // const size = parseInt(ctx.props.size) + 'px';
    // const attrs = ctx.data.attrs || {};
    // attrs.width = attrs.width || size;
    // attrs.height = attrs.height || size;
    // ctx.data.attrs = attrs;

    return _createVNode("svg", _mergeProps({
      "xmlns": "http://www.w3.org/2000/svg",
      "class": "icon icon-tabler icon-tabler-3d-cube-sphere",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24",
      "stroke-width": "2",
      "stroke": "currentColor",
      "fill": "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, ctx.data), [_createTextVNode("   "), _createVNode("path", {
      "stroke": "none",
      "d": "M0 0h24v24H0z",
      "fill": "none"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M6 17.6l-2 -1.1v-2.5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4 10v-2.5l2 -1.1"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M10 4.1l2 -1.1l2 1.1"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M18 6.4l2 1.1v2.5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M20 14v2.5l-2 1.12"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M14 19.9l-2 1.1l-2 -1.1"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "12",
      "y1": "12",
      "x2": "14",
      "y2": "10.9"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "18",
      "y1": "8.6",
      "x2": "20",
      "y2": "7.5"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "12",
      "y1": "12",
      "x2": "12",
      "y2": "14.5"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "12",
      "y1": "18.5",
      "x2": "12",
      "y2": "21"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 12l-2 -1.12"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "6",
      "y1": "8.6",
      "x2": "4",
      "y2": "7.5"
    }, null), _createTextVNode(" ")]);
  }

};