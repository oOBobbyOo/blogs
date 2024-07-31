import { defineComponent, ref, onMounted, onUnmounted, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { p5i } from "p5i";
import { useEventListener } from "@vueuse/core";
const pointMax = 150;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ArtParticles",
  __ssrInlineRender: true,
  setup(__props) {
    const el = ref(null);
    const {
      mount,
      unmount,
      createCanvas,
      background,
      noFill,
      line,
      stroke,
      strokeWeight,
      noiseSeed,
      resizeCanvas
    } = p5i();
    let w = window.innerWidth;
    let h = window.innerHeight;
    const mouse = { x: null, y: null, max: 2e4 };
    const existingPoints = /* @__PURE__ */ new Set();
    const points = [];
    function addPoints() {
      for (let i = 0; i < pointMax; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        const moveX = Math.random() * 2 - 1;
        const moveY = Math.random() * 2 - 1;
        const id = `${x}-${y}`;
        if (existingPoints.has(id))
          continue;
        existingPoints.add(id);
        points.push({
          x,
          y,
          moveX,
          moveY,
          max: 6e3
        });
      }
    }
    function setup() {
      createCanvas(w, h);
      background("#fff");
      stroke("#ccc");
      noFill();
      noiseSeed(+/* @__PURE__ */ new Date());
      addPoints();
    }
    function draw({ point }) {
      background("#fff");
      const allDots = [mouse].concat(points);
      for (const dot of points) {
        dot.x += dot.moveX;
        dot.y += dot.moveY;
        dot.moveX *= dot.x > w || dot.x < 0 ? -1 : 1;
        dot.moveY *= dot.y > h || dot.y < 0 ? -1 : 1;
        strokeWeight(1.5);
        stroke("#ccc");
        point(dot.x - 0.5, dot.y - 0.5, 1);
        for (let i = 0; i < allDots.length; i++) {
          const tempDot = allDots[i];
          if (dot === tempDot || tempDot.x === null || tempDot.y === null)
            continue;
          const _x = dot.x - tempDot.x;
          const _y = dot.y - tempDot.y;
          const dis = _x * _x + _y * _y;
          let ratio;
          if (dis < tempDot.max) {
            if (tempDot === mouse && dis > tempDot.max / 2) {
              dot.x -= _x * 0.03;
              dot.y -= _y * 0.03;
            }
            ratio = (tempDot.max - dis) / tempDot.max;
            strokeWeight(ratio / 2);
            stroke(0, 0, 0, ratio * 100);
            line(dot.x, dot.y, tempDot.x, tempDot.y);
            stroke(0);
          }
        }
        allDots.splice(allDots.indexOf(dot), 1);
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
      useEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      });
      useEventListener("mouseout", () => {
        mouse.x = null;
        mouse.y = null;
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Art/ArtParticles.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
