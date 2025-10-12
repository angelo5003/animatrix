import type { Metadata } from "next";
import { Provider as ChakraProvider } from "@/components/ui/provider";
import "./globals.css";
import ApolloProviderWrapper from "@/libs/graphql/apollo/ApolloWrapper/ApolloWrapper";
import NavBar from "@/components/shared/Navbar/NavBar";
import { Container } from "@chakra-ui/react";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Animatrix",
  description: "Animatrix - Your ultimate anime companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ApolloProviderWrapper>
          <ChakraProvider>
            <Container>{children}</Container>
            <NavBar />
          </ChakraProvider>
        </ApolloProviderWrapper>
      </body>
    </html>
  );
}
