import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'BrandRedditIcon',
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
      "class": "icon icon-tabler icon-tabler-brand-reddit",
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
      "d": "M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14z"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 8l1 -5l6 1"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "19",
      "cy": "4",
      "r": "1"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "9",
      "cy": "13",
      "r": ".5",
      "fill": "currentColor"
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "15",
      "cy": "13",
      "r": ".5",
      "fill": "currentColor"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5"
    }, null), _createTextVNode(" ")]);
  }

};