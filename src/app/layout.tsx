import type { Metadata } from "next";
import { Provider as ChakraProvider } from "@/components/ui/provider";
import "./globals.css";
import ApolloProviderWrapper from "@/libs/graphql/apollo/ApolloWrapper/ApolloWrapper";
import NavBar from "@/components/shared/Navbar/NavBar";
import { Container } from "@chakra-ui/react";

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
      <body>
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
