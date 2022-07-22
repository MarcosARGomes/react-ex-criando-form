import React, {useState} from "react";
import { Botao } from "./components/Botao";
import { Pessoa } from "./components/Pessoa";

const App = () => {

    const[nome, setname] = useState('');
    const[sobrenome, setsobrenome] = useState('');
    const[idade, setage] = useState('');
    const[show, setshow] = useState(false);

    const handleInputName = (event:React.FormEvent<HTMLInputElement>) =>{
      setname(event.target.value);
    }

    const handleInputSobrenome = (event:React.FormEvent<HTMLInputElement>) =>{
      setsobrenome(event.target.value);
    }

    const handleInputAge = (event:React.FormEvent<HTMLInputElement>) =>{
      setage(event.target.value);
    }

    let  textoDoBotao = 'Clicar no botão';
    const botaoEventAction = (txt:string) => {
      alert("Frase do App:"+ txt);
    }

    let list = [
      {name: 'Marcos', age: '25'},
      {name: 'João', age: 20},
      {name: 'Pedro', age: 6},
      {name: 'samanta', age: 24},
      {name: 'maria32', age: 215},
    ];

    const handleClick = () => {

     setshow(!show);
    }

  return (
    <div>
      <div>
        <div>
          Nome:
          <input type="text" value={nome} onChange={handleInputName} />
        </div>

        <div>
          Sobrenome:
          <input type="text" value={sobrenome} onChange={handleInputSobrenome}/>
        </div>

        <div>
          Idade:
          <input type="text" value={idade} onChange={handleInputAge}/>
        </div>

        <hr/>

        Olá {`${nome} ${sobrenome}`}, tudo bem?<br/>
        Você tem {idade} anos.
      </div>
      <div>
        <Botao text={textoDoBotao} clickFn={botaoEventAction}/> {/*Passando a função como prop */}
      </div>

      <div>
        <h2>Lista de presença</h2>
        <ul>
          {list.map((item, index)=>(
            <Pessoa key ={index} data={item}/>
          ))}
        </ul>
      </div>

      <div>
        <button onClick={handleClick}>{show ? 'Ocultar':'Mostrar'}</button>

        {show === true && 
          <div>
            texto texto texto
          </div>
        }
        
        
      </div>
    
    </div>
  )
}

export default App;