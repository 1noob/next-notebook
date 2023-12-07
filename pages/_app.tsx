// These styles apply to every route in the application
import './globals.css'
import { JetBrains_Mono } from 'next/font/google'


// https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
const jetbrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }) {
    return (
        <main className={`${jetbrainsMono.variable} font-mono ios-pt`}>
            <Component {...pageProps} />
        </main>
    )
}
