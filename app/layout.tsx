"use client";

import { ThemeProvider, createTheme } from "@mui/material";
import { Rubik } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@smastrom/react-rating/style.css";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Yummy Yard | Home",
  description:
    "Welcome to Yummy Yard, a delightful dining experience offering a diverse menu of delicious dishes. From sizzling steaks to mouthwatering seafood and flavorful vegetarian options, we strive to satisfy every palate. Join us for an unforgettable culinary journey in a warm and inviting atmosphere.",
  keywords: [
    "restaurant",
    "dining",
    "menu",
    "delicious",
    "steaks",
    "seafood",
    "vegetarian",
    "culinary journey",
    "warm atmosphere",
    "inviting",
  ],
};

const theme = createTheme({
  typography: {
    fontFamily: ["Rubik", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      light: "#c084fc",
      main: "#a855f7",
      dark: "#7e22ce",
      contrastText: "#fff",
    },
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <ThemeProvider theme={theme}>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
