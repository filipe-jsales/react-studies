import CoreConcept from './components/CoreConcept';
import Header from './components/Header';
import TabButton from './components/TabButton';
import { CORE_CONCEPTS } from './data';


function App() {
  function handleSelect(selectedButton) {
    if (selectedButton === 'components') console.log('Components selected');
    if (selectedButton === 'jsx') console.log('JSX selected');
    if (selectedButton === 'props') console.log('Props selected');
    if (selectedButton === 'state') console.log('State selected');
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
