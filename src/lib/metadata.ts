import { Metadata } from "next";

export const siteName = "leerowoon.dev";
export const title = `이로운 개발 블로그`;
export const description = "개발 관련된 이야기를 합니다.";
export const keywords = ["개발자 블로그", "소프트웨어 엔지니어"];
export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const siteMetadata: Metadata = {
  title,
  description,
  keywords,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: title,
    description: description,
    locale: "ko_KR",
    type: "website",
    siteName: siteName,
    url: baseUrl,
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [`${baseUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": 160,
    },
  },
};
