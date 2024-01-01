import CORE_CONCEPTS from './data'
import profilePic from './assets/bob2.png'


const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
const handleClick = (img) =>{
  console.log(img)
  let linkUrl = (img === '/portfolio/assets/trivia-383f892c.png' )? "https://bobdeve.github.io/Quizapp/":
                 (img === '/portfolio/assets/tenzies-7c3729da.png' )? "https://bobdeve.github.io/tenzies-app/":
                 (img === '/portfolio/assets/fastfood-ff54b982.png' )? "https://fanciful-kheer-9622ad.netlify.app/":
                 (img === '/portfolio/assets/oldgram-32abc1d1.png' )? "https://merry-chaja-afde48.netlify.app/":
                 (img === '/portfolio/assets/twimba-7b975a13.png')? "https://celadon-pithivier-139612.netlify.app/":
                 (img === '/portfolio/assets/basketball-6f4c1d85.png')? "https://serene-bubblegum-66c8e3.netlify.app/":
                 "https://cerulean-donut-b47ac7.netlify.app/"
  window.open(linkUrl, '_blank');
}
function CoreConcept(props) {
  return (
    <li onClick={()=>handleClick(props.image)} >
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

function Header(){
  return (
    <header>
        <img src={profilePic} alt="Stylized atom" />
        <h1>HEY, I'M Bereket Tilahun</h1>
        <p>
         I am a full-stack developer with experience in creating various types of dynamic front-end web applications. 
        <strong>Check out my cool project 👇</strong>  
        </p>
      </header>
  )
}

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
