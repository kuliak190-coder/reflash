import { useEffect, useRef } from "react";

const KATAKANA =
  "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロゴゾドボポヴッン";
const LATIN = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMS = "0123456789";
const ALPHABET = KATAKANA + LATIN + NUMS;

const FONT_SIZE = 16;

/**
 * Full-screen "Matrix rain" canvas, ported from the prototype.
 * Renders fixed behind the page content (see .matrix-canvas in index.css).
 */
export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let drops: number[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const columns = Math.ceil(canvas.width / FONT_SIZE);
      drops = new Array(columns).fill(1);
    };
    resize();

    let lastTime = 0;
    let raf = 0;
    const FRAME_MS = 33; // ~30fps, matches the prototype's setInterval(30)

    const draw = (time: number) => {
      raf = requestAnimationFrame(draw);
      if (time - lastTime < FRAME_MS) return;
      lastTime = time;

      // Fade the previous frame to create the trailing effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ff66";
      ctx.font = `${FONT_SIZE}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = ALPHABET.charAt(
          Math.floor(Math.random() * ALPHABET.length),
        );
        ctx.fillText(text, i * FONT_SIZE, drops[i] * FONT_SIZE);

        if (drops[i] * FONT_SIZE > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-canvas" aria-hidden="true" />;
}
