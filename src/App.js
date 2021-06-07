import React, { useEffect, useState} from 'react'
import Contact from './components/contact/contact'
import Home from './components/home/home'
import About from './components/about/about'
import NavBar from './components/navbar/navbar'




function App() {
  const [ativaCor , setAtivaCor] = useState(false);

  useEffect(function(){
    function posicaoScroll(){
     
  
      if(window.scrollY > 100){
          setAtivaCor(true);
      }else{
        setAtivaCor(false);
      }
    }
  
    window.addEventListener('scroll', posicaoScroll)
  },[]);



  return (
   <>
   <NavBar acao={ativaCor}/>
  <Home/>
  <About/>
  <Contact/>


   </>
  );
}

export default App;
