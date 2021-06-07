import React from 'react'
import './home.css'

function ClickMe(){
  alert('TESTADO com sucesso');
}
function Home() {
  return (
   <>

   <div className="HomeHeader">
     
    
    <div className="btnc">
      <button className="btn"onClick={ClickMe} >Peça seu cartão </button>
    </div>
        <div className="cont2">
            <img src="https://www.kinesis.money/assets/media/2020/10/09_MoreThanJustADebitCard_471x471pt.png"/>
        </div>
            <div className="cont3">
                      <h1>Mesa, seu banco digital no jogo Half Life </h1>
                      <h2>Compre itens no jogo com cashback e descontos especiais para clientes Mesa.</h2>
            </div>   
        </div> 
   </>
  );
}

export default Home;
