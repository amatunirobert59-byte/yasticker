import type { Metadata } from "next"
import "./globals.css"
import Script from "next/script"
import { CartProvider } from "@/context/CartContext"

export const metadata: Metadata = {
  title: "Ястикер",
  description: "Премиум магазин стикеров",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>

        <CartProvider>

{children}

</CartProvider>

        <footer
          style={{
            background: "#0a0a0a",
            color: "rgba(255,255,255,.7)",
            padding: "40px 20px",
            marginTop: "100px",
            borderTop: "1px solid rgba(255,255,255,.08)",
            textAlign: "center",
            fontSize: "14px",
            lineHeight: 1.8,
          }}
        >
          <div>© 2026 Ястикер</div>

          <div>ИНН: 760405915638</div>

          <div>
            Все эксклюзивные предложения в нашем Telegram-канале
          </div>

          <a
            href="https://t.me/Ystickmos"
            target="_blank"
            style={{
              color: "#ffb300",
              textDecoration: "none",
            }}
          >
            t.me/Ystickmos
          </a>
        </footer>

        {/* GOOGLE ANALYTICS */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5RGKL6BHXW"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-5RGKL6BHXW');
          `}
        </Script>
      </body>
    </html>
  )
}