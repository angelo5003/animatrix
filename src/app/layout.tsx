import type { Metadata } from "next";
import { Provider as ChakraProvider } from "@/components/ui/provider";
import "./globals.css";
import ApolloProviderWrapper from "@/libs/graphql/apollo/ApolloWrapper/ApolloWrapper";

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
          <ChakraProvider>{children}</ChakraProvider>
        </ApolloProviderWrapper>
      </body>
    </html>
  );
}
