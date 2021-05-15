import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'ShoppingCartOffIcon',
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
      "class": "icon icon-tabler icon-tabler-shopping-cart-off",
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
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "6",
      "cy": "19",
      "r": "2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M17 17a2 2 0 1 0 2 2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M17 17h-11v-11"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M9.239 5.231l10.761 .769l-1 7h-2m-4 0h-7"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M3 3l18 18"
    }, null), _createTextVNode(" ")]);
  }

};