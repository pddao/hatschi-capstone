import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <h1>Homepage</h1>
      <p>Hallo! Hier kommt deine Pollenvorhersage für "Stadt" am "Datum"</p>
      <Link to="/dictionary">Dictionary</Link>
    </>
  );
}
