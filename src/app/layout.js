import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script'


const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Systrocode- digital marketing, Web Design Company in India",
  description: "Welcome to Systrocode, your gateway to digital excellence. Specializing in web development, digital marketing, data analysis & Python automation, we empower businesses to thrive in the digital era. Our innovative solutions, tailored strategies & expert team set the foundation for your online success.",
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-normal text-lg antialiased`}>
        {children}
      </body>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js"  />
    </html>
  );
}
