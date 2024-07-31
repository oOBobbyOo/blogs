import { defineComponent, ref, onMounted, onUnmounted, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { p5i } from "p5i";
import { useEventListener } from "@vueuse/core";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ArtBubbles",
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
      resizeCanvas
    } = p5i();
    let w = window.innerWidth;
    let h = window.innerHeight;
    const bubbleMax = w * 0.06;
    const bubbles = [];
    function addBubbles() {
      for (let i = 0; i < bubbleMax; i++) {
        bubbles.push({
          x: w * Math.random(),
          y: h + Math.random() * 100,
          alpha: 0.1 + Math.random() * 0.3,
          // 气泡透明度
          speed: 0.1 + Math.random() * 0.4,
          // 气泡上升速度
          scale: 0.2 + Math.random() * 0.5
          // 气泡大小
        });
      }
    }
    function setup() {
      createCanvas(w, h);
      background("#fff");
      stroke("#ccc");
      noFill();
      addBubbles();
    }
    function draw({ ellipse, fill }) {
      background("#fff");
      for (const b of bubbles) {
        b.y -= b.speed;
        b.alpha -= 2e-4 + Math.random() * 5e-4;
        b.scale += Math.random() * 2e-3;
        stroke(0, 0, 0, b.alpha * 10);
        fill(0, 0, 0, b.alpha * 150);
        ellipse(b.x, b.y, b.scale * 10);
        if (b.alpha < 0) {
          bubbles.splice(bubbles.indexOf(b), 1);
          bubbles.push({
            x: w * Math.random(),
            y: h + Math.random() * 100,
            alpha: 0.1 + Math.random() * 0.3,
            speed: 0.1 + Math.random() * 0.4,
            scale: 0.2 + Math.random() * 0.5
          });
        }
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Art/ArtBubbles.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
