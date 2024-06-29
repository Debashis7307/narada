import {Inter, Ubuntu} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"], variable: "--font-inter"});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  weight: ["400", "700"],
});

export const metadata = {
  title: "Narada Bot",
  description: "The one and only bot that understands natural human language and adds events to your calendar hehe",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ubuntu.variable}`}>{children}</body>
    </html>
  );
}
