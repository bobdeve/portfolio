import CORE_CONCEPTS from './src/data'
import profilePic from './src/assets/bob2.png';


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
  export default Header;