import "./globals.scss";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import Script from "next/script";
import { Metadata } from "next";
import type { Viewport } from "next";
import Header from "@/components/header";
import AppInit from "./app";
import { ConfigProvider } from "antd";
import dayjs from "dayjs";
dayjs.locale("en");
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "Chatbond - AI Chatbot Builder",
  description:
    "Integrate your knowledge base with AI chatbots to enhance accuracy and user experience. Learn steps, best practices, and see successful case studies.",
  applicationName: "Chatbond | Free AI Chatbot Builder",
  keywords: [
    "free ai chat",
    "Chatbond",
    "chatbot",
    "train chatgpt",
    "bing ai chat",
    "ai chat generator",
  ],
  alternates: {
    canonical: "https://www.chatbond.co",
  },
  openGraph: {
    title:
      "Integrate Your Knowledge Base to Build an Effective and Free AI Chatbot",
    description:
      "Integrate your knowledge base with AI chatbots to enhance accuracy and user experience. Learn steps, best practices, and see successful case studies.",
    type: "website",
  },
  twitter: {
    title:
      "Integrate Your Knowledge Base to Build an Effective and Free AI Chatbot",
    description:
      "Integrate your knowledge base with AI chatbots to enhance accuracy and user experience. Learn steps, best practices, and see successful case studies.",
  },
  robots: {
    index: false,
    follow: true,
  },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <Script
        async
        id="googletagmanager"
        src="https://www.googletagmanager.com/gtag/js?id=G-SNWJ8BTHLZ"
      />

      <Script id="gtag">
        {`
          window.dataLayer = window.dataLayer || []
          function gtag() {
            dataLayer.push(arguments)
          }
          gtag('js', new Date())
        
          gtag('config', 'G-SNWJ8BTHLZ', { 'debug_mode':true })
        `}
      </Script>
      <Script type="application/ld+json" id="json">
        {`{
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Chatbond | AI Chatbot Builder",
      "alternateName": "Chatbond | Chatbot",
      "url": "https://www.chatbond.co"
    }`}
      </Script>

      <body>
        {/* 不加hashPriority="high"，部署以后样式会失效，:where的原因 */}
        <AntdRegistry hashPriority="high">
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#0AC655",
              },
            }}
          >
            <div id="app">
              {/* 这里是额外传参的，不然用useSession不刷新，不知道为啥 */}
              <AppInit session={session}/>
              <Header session={session} />
              {children}
            </div>
          </ConfigProvider>
        </AntdRegistry>
        {/*   <Script
        id='iframe'

          src="/iframe.min.js"
          data-chatbotId="super"
          strategy="lazyOnload"
        /> */}
      </body>
    </html>
  );
}
