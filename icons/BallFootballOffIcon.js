import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'BallFootballOffIcon',
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
      "class": "icon icon-tabler icon-tabler-ball-football-off"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M20.041 16.046a9 9 0 0 0 -12.084 -12.09m-2.323 1.683a9 9 0 0 0 12.726 12.73"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M12 7l4.755 3.455l-.566 1.743l-.98 3.014l-.209 .788h-6l-1.755 -5.545l1.86 -1.351l2.313 -1.681z"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M12 7v-4"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "15",
        "y1": "16",
        "x2": "17.5",
        "y2": "19"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M16.755 10.455l3.745 -1.455"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M9.061 16.045l-2.561 2.955"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M7.245 10.455l-3.745 -1.455"
      }
    }), "   ", h("line", {
      "attrs": {
        "x1": "3",
        "y1": "3",
        "x2": "21",
        "y2": "21"
      }
    }), " "]);
  }

};