import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'MailOpenedIcon',
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
      "class": "icon icon-tabler icon-tabler-mail-opened"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("polyline", {
      attrs: {
        points: "3 9 12 15 21 9 12 3 3 9"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "3",
        y1: "19",
        x2: "9",
        y2: "13"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "15",
        y1: "13",
        x2: "21",
        y2: "19"
      }
    }), " "]);
  }
};