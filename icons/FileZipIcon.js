import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'FileZipIcon',
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
      "class": "icon icon-tabler icon-tabler-file-zip"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M6 20.735a2 2 0 0 1 -1 -1.735v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-1"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M11 17a2 2 0 0 1 2 2v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a2 2 0 0 1 2 -2z"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "11",
        y1: "5",
        x2: "10",
        y2: "5"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "13",
        y1: "7",
        x2: "12",
        y2: "7"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "11",
        y1: "9",
        x2: "10",
        y2: "9"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "13",
        y1: "11",
        x2: "12",
        y2: "11"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "11",
        y1: "13",
        x2: "10",
        y2: "13"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "13",
        y1: "15",
        x2: "12",
        y2: "15"
      }
    }), " "]);
  }
};