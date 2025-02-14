import Navbar from "@/components/Navbar";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Medium",
  description: "Blog Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
