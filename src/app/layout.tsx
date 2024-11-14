import type { Metadata } from "next";
import { primaryTheme } from "@/themes/primary/theme";
import "./globals.css";

export const metadata: Metadata = {
  title: "Design System",
  description: "Design System criado com NextJS, Styled Components e Storybook",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={primaryTheme.fontFamilyClassName.poppins}>
        {children}
      </body>
    </html>
  );
}
