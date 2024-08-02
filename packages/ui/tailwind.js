import plugin from "tailwindcss/plugin";

export function tailwindConfig(app) {
  const config = {
    content: ["../../packages/ui/src/components/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
      extend: {
        screens: {
          sm: "375px",
          xl: "1440px",
          "2xl": "1728px",
        },
        animation: {
          "overlay-fade-in": "overlay-fade-in 250ms linear",
          "slide-down": "slide-down 300ms cubic-bezier(0.87, 0, 0.13, 1)",
          "slide-up": "slide-up 300ms cubic-bezier(0.87, 0, 0.13, 1)",
          "slide-left-right": "slide-left-right 150ms linear",
          "slide-right-left": "slide-right-left 150ms linear",
          "slide-bottom-top": "slide-bottom-top 150ms linear",
          "marquee-a": "marquee-a linear infinite",
          "marquee-b": "marquee-b linear infinite",
        },
        keyframes: {
          "marquee-a": {
            from: { transform: "translateX(100%)" },
            to: { transform: "translateX(-100%)" },
          },
          "marquee-b": {
            from: { transform: "translateX(0)" },
            to: { transform: "translateX(-200%)" },
          },
          "slide-down": {
            from: { height: 0 },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "slide-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: 0 },
          },
          "overlay-fade-in": {
            from: { opacity: 0 },
            to: { opacity: 0.4 },
          },
          "slide-left-right": {
            from: { left: "-100%" },
            to: { left: "0" },
          },
          "slide-right-left": {
            from: { right: "-100%" },
            to: { right: "0" },
          },
          "slide-bottom-top": {
            from: { bottom: "-99%" },
            to: { bottom: "0" },
          },
        },
      },
    },
    plugins: [
      plugin(function ({ addUtilities }) {
        addUtilities({
          ".no-scrollbar::-webkit-scrollbar": {
            display: "none",
          },
          ".no-scrollbar": {
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
          },
          ".wrapper": {
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "var(--margin, auto)",
            paddingRight: "var(--margin, auto)",
          },
        });
      }),
    ],
  };

  if (app) {
    config.content.push(
      `../../apps/${app}/app/**/*.{js,ts,jsx,tsx,mdx}`,
      `../../apps/${app}/components/**/*.{js,ts,jsx,tsx,mdx}`,
    );
  }

  return config;
}
