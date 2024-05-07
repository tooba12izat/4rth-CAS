import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: '4rth CAS',
    template: '%s | 4rth CAS',
  },
  description: '4rth CAS sailing',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <ul className="flex justify-between m-10 item-center">
            <div className="w-full flex gap-10">
            
              <Link href="/players">
                <li>Registered Players List</li>
              </Link>
            

              {/*<Link href="/register">*/}
              {/*    <li>Register</li>*/}
              {/*</Link>*/}

            </div>
          </ul>
        </div>
        {children}</body>
    </html>
  );
}
