import plugin from "tailwindcss/plugin";

export function tailwindConfig(app) {
  const config = {
    content: ["../../packages/ui/src/components/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
      extend: {
        colors: {
          "vitreus-green-400": "var(--vitreus-luminous-green-800)",
          "vitreus-red": "var(--vitreus-red)",
          "custom-gray-100": "#e9ecef",
          "custom-gray-300": "#dee2e6",
          "custom-gray-500": "#ced4da",
          "custom-gray-300": "#adb5bd",
          "custom-gray-900": "#1a1a1a",

          "custom-red-error": "#ba181b",

          "custom-red-400": "#a4161a",
          "custom-red-600": "#660708",
          "custom-red-800": "#6f1d1b",

          "custom-green-400": "#008000",
          "custom-green-600": "#006400",
          "custom-green-800": "#004b23",

          "custom-yellow-600": "#ffc300",

          "custom-blue-700": "#003566",
          "custom-blue-800": "#001d3d"
        },
        spacing: [
          0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 15, 16, 17, 18, 19, 20, 22, 24,
          26, 28, 32, 36, 40, 44, 45, 46, 48, 50, 56, 60, 64, 68, 70, 72, 80,
          88, 90, 96, 100, 115, 210, 240, 260
        ].reduce(
          (result, value) => {
            result[value] = `${value}px`;
            return result;
          },
          { px: "1px", 1: "1px", 2: "2px" }
        ),

        screens: {
          "2xl": { max: "1728px" },
          xl: { max: "1440px" },
          lg: { max: "1280px" },
          md: { max: "1024px" },
          sm: { max: "768px" },
          xs: { max: "420px" }
        },
        borderRadius: {
          none: "0",
          full: "9999px",
          sm: "5px",
          md: "10px",
          large: "20px"
        },
        maxWidth: {
          container: "1728px"
        },
        animation: {
          "overlay-fade-in": "overlay-fade-in 250ms linear",
          "slide-down": "slide-down 300ms cubic-bezier(0.87, 0, 0.13, 1)",
          "slide-up": "slide-up 300ms cubic-bezier(0.87, 0, 0.13, 1)",
          "slide-left-right": "slide-left-right 150ms linear",
          "slide-right-left": "slide-right-left 150ms linear",
          "slide-bottom-top": "slide-bottom-top 150ms linear",
          "marquee-a": "marquee-a linear infinite",
          "marquee-b": "marquee-b linear infinite"
        },
        keyframes: {
          "marquee-a": {
            from: { transform: "translateX(100%)" },
            to: { transform: "translateX(-100%)" }
          },
          "marquee-b": {
            from: { transform: "translateX(0)" },
            to: { transform: "translateX(-200%)" }
          },
          "slide-down": {
            from: { height: 0 },
            to: { height: "var(--radix-accordion-content-height)" }
          },
          "slide-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: 0 }
          },
          "overlay-fade-in": {
            from: { opacity: 0 },
            to: { opacity: 0.4 }
          },
          "slide-left-right": {
            from: { left: "-100%" },
            to: { left: "0" }
          },
          "slide-right-left": {
            from: { right: "-100%" },
            to: { right: "0" }
          },
          "slide-bottom-top": {
            from: { bottom: "-99%" },
            to: { bottom: "0" }
          }
        }
      }
    },
    plugins: [
      plugin(function ({ addUtilities }) {
        addUtilities({
          ".no-scrollbar::-webkit-scrollbar": {
            display: "none"
          },
          ".no-scrollbar": {
            "-ms-overflow-style": "none",
            "scrollbar-width": "none"
          },
          ".wrapper": {
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "var(--margin, auto)",
            paddingRight: "var(--margin, auto)"
          }
        });
      })
    ]
  };

  if (app) {
    config.content.push(
      `../../apps/${app}/app/**/*.{js,ts,jsx,tsx,mdx}`,
      `../../apps/${app}/components/**/*.{js,ts,jsx,tsx,mdx}`
    );
  }

  return config;
}
