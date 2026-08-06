import Encabezado from "./components/encabezado";
import Preguntas from "./components/preguntas";

export default function Home() {
  return (
    <>
      <header>
        <Encabezado />
      </header>
      <main>
        <section>
          <Preguntas />
        </section>
      </main>
    </>
  );
}
