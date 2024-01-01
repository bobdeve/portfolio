import CORE_CONCEPTS from './src/data'

function CoreConcept(props) {
  return (
    <li onClick={()=>handleClick(props.image)} >
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
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
    console.log("worked to load");
  }


  export default CoreConcept;