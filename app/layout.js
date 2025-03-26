import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Switch to Octopus Energy and get £50 for free!",
  description: "Get £50 when you switch to Octopus Energy with this exclusive referral code! This Octopus Energy referral link is your key to unlocking a £50 reward when you sign up. It's the same as a ‘Recommend a Friend’ offer, giving you and your friend £50 each when you join the UK’s leading renewable energy provider. Don't miss out—start saving with Octopus Energy today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
