import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SessionProviderWrapper from "../components/Sessionpovider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get Me A Chai- A Crowdfunding platform for Creators",
  description:
    "Get Me A Chai is a crowdfunding platform for creators. Get funded by your fans and followers. Start Now!",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body className="min-h-full min-w-full flex flex-col">
      <SessionProviderWrapper>
        <Navbar />
        <div className=" min-h-[87vh] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-size-[20px_20px] text-white">
          {children}
        </div>

        <Footer />
      </SessionProviderWrapper>
      </body>
    </html>
  );
}
