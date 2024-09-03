import Heading from "./Heading";
import Search from "./Search";
import Body from "./Body";
import Footer from "./Footer";
import Contact from "./Contact";

export default function App() {
  return (
    <div className="py-5">
      <Heading />
      <Search />
      <Body />
      <Footer />
      <Contact />
    </div>
  );
}
