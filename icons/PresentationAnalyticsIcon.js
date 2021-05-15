import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'PresentationAnalyticsIcon',
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
      "class": "icon icon-tabler icon-tabler-presentation-analytics",
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
      "d": "M9 12v-4"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M15 12v-2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 12v-1"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M3 4h18"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 16v4"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M9 20h6"
    }, null), _createTextVNode(" ")]);
  }

};