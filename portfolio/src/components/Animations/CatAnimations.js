import gsap from "gsap";

/* -------------------------------
  Parpadeo
--------------------------------*/
export function blink(cat) {
  if (!cat) return;

  const leftEye = cat.querySelector("#eye-left");
  const rightEye = cat.querySelector("#eye-right");

  if (!leftEye || !rightEye) return;

  gsap.to([leftEye, rightEye], {
    ry: 0.5,
    duration: 0.12,
    repeat: -1,
    yoyo: true,
    repeatDelay: gsap.utils.random(2, 5),
  });
}

/* -------------------------------
  Movimiento de cola
--------------------------------*/
export function tailWag(cat) {
  if (!cat) return;

  const tail = cat.querySelector("#tail");
  if (!tail) return;

  gsap.to(tail, {
    rotation: 8,
    transformOrigin: "top left",
    duration: 1.2,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut",
  });
}

/* -------------------------------
  Posición sentado
--------------------------------*/
export function sitPose(cat) {
  if (!cat) return;

  const legs = cat.querySelector("#legs");

  gsap.to(legs, {
    y: 2,
    duration: 0.4,
    ease: "power2.out",
  });
}

/* -------------------------------
  Caminando
--------------------------------*/
export function walking(cat) {
  if (!cat) return;

  const legs = cat.querySelector("#legs");

  gsap.to(legs, {
    y: -2,
    duration: 0.25,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });
}

/* -------------------------------
  Durmiendo
--------------------------------*/
export function sleep(cat) {
  if (!cat) return;

  const head = cat.querySelector("#cat-head");

  gsap.to(head, {
    rotation: -10,
    transformOrigin: "50% 60%",
    duration: 2,
    ease: "sine.inOut",
  });
}
