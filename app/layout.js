import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Enrollment Partner - International Schooling",
  description:
    "International Schooling, trusted by 14000+ students & parents in 135+ countries, is an accredited online school, offering Elementary, Middle & Online High School programs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className + ` bg-[#F7FBFF]`}>{children}</body>
    </html>
  );
}
