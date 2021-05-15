import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'MailOpenedIcon',
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
    const ctxData = { ...ctx.$data,
      width: attrs.width || size,
      height: attrs.height || size
    };
    return _createVNode("svg", _mergeProps({
      "xmlns": "http://www.w3.org/2000/svg",
      "class": "icon icon-tabler icon-tabler-mail-opened",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24",
      "stroke-width": "2",
      "stroke": "currentColor",
      "fill": "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, ctxData), [_createTextVNode("   "), _createVNode("path", {
      "stroke": "none",
      "d": "M0 0h24v24H0z",
      "fill": "none"
    }, null), _createTextVNode("   "), _createVNode("polyline", {
      "points": "3 9 12 15 21 9 12 3 3 9"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "3",
      "y1": "19",
      "x2": "9",
      "y2": "13"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "15",
      "y1": "13",
      "x2": "21",
      "y2": "19"
    }, null), _createTextVNode(" ")]);
  }

};