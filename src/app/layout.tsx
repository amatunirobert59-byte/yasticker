import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext"
import Script from "next/script"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ЯСтикер",
  description: "Премиум магазин стикеров",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}
        <footer
  style={{
    background: "#0a0a0a",
    color: "rgba(255,255,255,.7)",
    padding: "40px 20px",
    marginTop: "100px",
    borderTop: "1px solid rgba(255,255,255,.08)",
    textAlign: "center",
    fontSize: "14px",
    lineHeight: 1.8
  }}
>

  <div>
    © 2026 ЯСтикер
  </div>

  <div>
    ИНН: 760405915638
  </div>

  <div>
    Все эксклюзивные предложения в нашем Telegram-канале
  </div>

  <a
    href="https://t.me/Ystickmos"
    target="_blank"
    style={{
      color: "#ffb300",
      textDecoration: "none"
    }}
  >
    t.me/Ystickmos
  </a>

</footer>
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
{`
window.dataLayer = window.dataLayer || [];

function gtag(){
  dataLayer.push(arguments);
}

gtag('js', new Date());

gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
`}
</Script>
<Script id="yandex-metrika">

{`
(function(m,e,t,r,i,k,a){
m[i]=m[i]||function(){
(m[i].a=m[i].a||[]).push(arguments)
};

m[i].l=1*new Date();

for (var j = 0; j < document.scripts.length; j++) {
  if (document.scripts[j].src === r) {
    return;
  }
}

k=e.createElement(t),
a=e.getElementsByTagName(t)[0],
k.async=1,
k.src=r,
a.parentNode.insertBefore(k,a)

})

(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(109472158, "init", {
  clickmap:true,
  trackLinks:true,
  accurateTrackBounce:true,
  webvisor:true
});
`}

</Script>
<noscript>

<div>

<img
  src="https://mc.yandex.ru/watch/109472158"
  style={{
    position: "absolute",
    left: "-9999px"
  }}
  alt=""
/>

</div>

</noscript>
</body>
    </html>
  );
}
