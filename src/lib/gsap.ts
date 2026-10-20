import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);
// no celular, a barra de endereço muda a altura da tela a cada rolagem: ignorar evita
// recálculos dos trechos fixados (que faziam a página "pular" e piscar)
ScrollTrigger.config({ ignoreMobileResize: true });

export { gsap, ScrollTrigger, SplitText, useGSAP };

export const reduzMovimento = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const ehToque = () => window.matchMedia("(hover: none)").matches;

// celulares/tablets ou telas pequenas: cena 3D em versão leve
export const modoLeve = () => window.matchMedia("(hover: none), (max-width: 700px)").matches;
