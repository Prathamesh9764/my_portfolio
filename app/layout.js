import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
  display: "swap",
});

export const metadata = {
  title: "Prathamesh Vijaywar | Full-Stack Web Developer & Data Analytics Enthusiast",
  description:
    "Portfolio of Prathamesh Vijaywar, a passionate B.Tech Information Technology graduate specializing in Web Development (React, Next.js, Node.js), Software Engineering, and Data Analytics.",
  keywords: [
    "Prathamesh Vijaywar",
    "Portfolio",
    "Full-Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js",
    "Software Engineer",
    "Data Analytics",
    "YCCE Nagpur",
    "Python Developer",
  ],
  authors: [{ name: "Prathamesh Vijaywar" }],
  creator: "Prathamesh Vijaywar",
  openGraph: {
    title: "Prathamesh Vijaywar | Full-Stack Web Developer",
    description: "Explore projects, skills, services, and experience of Prathamesh Vijaywar.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${outfit.variable} ${ovo.variable} font-sans antialiased text-slate-800 bg-[#f8fafc] dark:bg-darkTheme dark:text-slate-100 min-h-screen selection:bg-indigo-500 selection:text-white`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[999] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-indigo-600 focus:text-white focus:shadow-lg"
        >
          Skip to main content
        </a>
        <div id="main-content">
          {children}
        </div>
      </body>
    </html>
  );
}
