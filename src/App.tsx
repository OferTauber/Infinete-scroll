import List from './components/List';
import Nav from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Hero />
        <List />;
      </main>
    </>
  );
}

export default App;
