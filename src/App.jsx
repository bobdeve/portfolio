import CORE_CONCEPTS from './data'

import CoreConcept from '../CoreConcept'
import Header from '../Header';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id='core-concepts'>
          <ul>
            {CORE_CONCEPTS.map((core) => (
              <CoreConcept
               title={core.title}
                image={core.image}
                 description={core.description}
               
                     />
            ) )}
          
          </ul>

        </section>
        <h2 className='outro-cont' > 📧 bobdeve77@gmail.com</h2>
        <h2 className='outro'>© 2024</h2>
      </main>
    </div>
  );
}

export default App;
