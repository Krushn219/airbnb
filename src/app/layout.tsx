import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";

import Model from "./components/models/Model";
import RegisterModel from "./components/models/RegisterModel";
import RentModel from "./components/models/RentModel";
import LoginModel from "./components/models/LoginModel";

import ToasterProvider from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "airbnb clone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={nunito.className}>
        {/* <Model actionLabel='Submit' title='Hello World' isOpen/> */}
        <ClientOnly>
        <ToasterProvider />
        <RentModel />
        <LoginModel />
        <RegisterModel />
        <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
