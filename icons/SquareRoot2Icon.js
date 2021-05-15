import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'SquareRoot2Icon',
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
      "class": "icon icon-tabler icon-tabler-square-root-2",
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
      "d": "M13 12h1c1 0 1 1 2.016 3.527c.984 2.473 .984 3.473 1.984 3.473h1"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 19c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M3 12h1l3 8l3 -16h10"
    }, null), _createTextVNode(" ")]);
  }

};