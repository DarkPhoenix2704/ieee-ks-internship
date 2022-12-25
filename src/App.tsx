import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { VStack, HStack, Image } from "@chakra-ui/react";
import { Social } from "./components/Social";
import { ContactForm } from "./views/ContactForm";

export default function App() {
  return (
    <VStack minHeight="100vh">
      <Navbar />
      <HStack>
        <Image display={{
          base: 'none',
          md: 'block'
        }} height="100%" object-fit="cover" src="https://img.freepik.com/free-vector/pastel-ombre-background-pink-purple_53876-120750.jpg?w=2000" width={{
          md: '50vw'
        }} />
        <ContactForm />
      </HStack>
      <Footer />
      <Social />
    </VStack>
  )
}