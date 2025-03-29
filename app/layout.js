import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {GoogleAnalytics, GoogleTagManager} from "@next/third-parties/google";
config.autoAddCss = false

export const metadata = {
    title: '윤지수 포트폴리오',
    description: '풀스택 개발자 윤지수의 포트폴리오입니다.',
    keywords: ['윤지수', '포트폴리오', '풀스택', '개발자', 'React', 'Next.js'],
    openGraph: {
        title: '윤지수 포트폴리오',
        description: '개발자 윤지수의 기술과 프로젝트를 소개합니다.',
        url: 'https://your-vercel-url.vercel.app',
        siteName: '윤지수 포트폴리오',
        type: 'website',
    },
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
    <GoogleTagManager gtmId="G-V95031MM33" />
    <GoogleAnalytics gaId="G-V95031MM33" /> {/* GA4 ID 입력 */}
    <body
      >
        {children}
      </body>
    </html>
  );
}
