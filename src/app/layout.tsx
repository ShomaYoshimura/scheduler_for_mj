import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideBar from "@/components/SideBar";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "scheduler_for_mj",
  description: "Generated by create next app",
};

type Props = {
  children: React.ReactNode;

}

export default function RootLayout({children}: Props) {
  return (
<>
  <Head>
    <title>charts-sample</title>
  </Head>
  <div className="flex h-screen">
    <SideBar />
    {/* メインコンテンツ */}
    <main className="flex-1 bg-gray-200">
      {children}
    </main>
  </div>
</>
  );
}
