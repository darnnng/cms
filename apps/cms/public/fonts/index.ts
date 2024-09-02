import { Poppins } from "next/font/google";

export const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});
