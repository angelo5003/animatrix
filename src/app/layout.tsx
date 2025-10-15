import type { Metadata } from "next";
import { Provider as ChakraProvider } from "@/components/ui/provider";
import "./globals.css";
import ApolloProviderWrapper from "@/libs/graphql/apollo/ApolloWrapper/ApolloWrapper";
import NavBar from "@/components/shared/Navbar/NavBar";
import { Container } from "@chakra-ui/react";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
          <ChakraProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
            <Container pb={{ base: "120px", md: 0 }}>{children}</Container>
          </ChakraProvider>
        </ApolloProviderWrapper>
      </body>
    </html>
  );
}
