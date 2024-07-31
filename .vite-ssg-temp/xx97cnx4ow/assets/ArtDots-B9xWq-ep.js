import { defineComponent, ref, onMounted, onUnmounted, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { p5i } from "p5i";
import { useEventListener } from "@vueuse/core";
const SCALE = 200;
const LENGTH = 10;
const SPACING = 15;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ArtDots",
  __ssrInlineRender: true,
  setup(__props) {
    const el = ref(null);
    const {
      mount,
      unmount,
      createCanvas,
      background,
      noFill,
      stroke,
      noise,
      noiseSeed,
      resizeCanvas,
      cos,
      sin,
      TWO_PI
    } = p5i();
    let w = window.innerWidth;
    let h = window.innerHeight;
    const offsetY = window.scrollY;
    function getForceOnPoint(x, y, z) {
      return (noise(x / SCALE, y / SCALE, z) - 0.5) * 2 * TWO_PI;
    }
    const existingPoints = /* @__PURE__ */ new Set();
    const points = [];
    function addPoints() {
      for (let x = -SPACING / 2; x < w + SPACING; x += SPACING) {
        for (let y = -SPACING / 2; y < h + offsetY + SPACING; y += SPACING) {
          const id = `${x}-${y}`;
          if (existingPoints.has(id))
            continue;
          existingPoints.add(id);
          points.push({ x, y, opacity: Math.random() * 0.5 + 0.5 });
        }
      }
    }
    function setup() {
      createCanvas(w, h);
      background("#ffffff");
      stroke("#ccc");
      noFill();
      noiseSeed(+/* @__PURE__ */ new Date());
      addPoints();
    }
    function draw({ circle }) {
      background("#ffffff");
      const t = +/* @__PURE__ */ new Date() / 1e4;
      for (const p of points) {
        const { x, y } = p;
        const rad = getForceOnPoint(x, y, t);
        const length = (noise(x / SCALE, y / SCALE, t * 2) + 0.5) * LENGTH;
        const nx = x + cos(rad) * length;
        const ny = y + sin(rad) * length;
        stroke(200, 200, 200, (Math.abs(cos(rad)) * 0.8 + 0.2) * p.opacity * 255);
        circle(nx, ny - offsetY, 1);
      }
    }
    function restart() {
      if (el.value)
        mount(el.value, { setup, draw });
    }
    onMounted(() => {
      restart();
      useEventListener("resize", () => {
        w = window.innerWidth;
        h = window.innerHeight;
        resizeCanvas(w, h);
        addPoints();
      });
    });
    onUnmounted(() => {
      unmount();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "el",
        ref: el,
        "pointer-events-none": "",
        fixed: "",
        "bottom-0": "",
        "left-0": "",
        "right-0": "",
        "top-0": "",
        "z--1": "",
        "dark:invert": ""
      }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Art/ArtDots.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
