import { useEffect, useState } from 'react'
import './App.css'
import { CardComponent } from './components/card/Card'
import { SelectComponent } from './components/select/select'
import { especiesOp, generosOp, statusOp } from './utils/opcoes/opcoes'

function App() {
  const [personagem, setPersonagem] = useState()
  const [nome, setNome] = useState("")
  const [status, setStatus] = useState("")
  const [genero, setGenero] = useState("")
  const [especie, setEspecie] = useState("")

  async function BuscarOuFiltrar(url){
    setPersonagem(null)
    const resposta = await fetch(url)
    const dados = await resposta.json()
    setPersonagem(dados.results)

  }

  useEffect(()=>{
    if (nome || status || genero || especie){
      BuscarOuFiltrar(`https://rickandmortyapi.com/api/character?name=${nome}&species=${especie}&gender=${genero}&status=${status}`)

    }else{
      BuscarOuFiltrar(`https://rickandmortyapi.com/api/character`)
    }

  }, [nome, especie, genero, status])

  return (
    <>
    <div className="img-rick-morty">
      <img
        src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png"
        alt="Imagem logo"
        className="img_logo"
        
      />

      </div>
    <div id='input-div'>
      <input type="text"   name='name' id='pesquisar' onChange={(element)=> setNome(element.target.value)}/>

    </div>
    <div id='div-select'>


    <SelectComponent
    opcoes={generosOp}
    onchange={(element) => setGenero(element.target.value)}
      />

    <SelectComponent 
    opcoes={especiesOp}
    onchange={(element)=> setEspecie(element.target.value)}
    />

    <SelectComponent 
    opcoes={statusOp}
    onchange={(element)=> setStatus(element.target.value)}
      />



    </div>
   
    <section className='container'>
   {personagem && personagem.map((e)=>(

   <CardComponent
    element={e}
   />
   ))}

    </section>
     
    </>
  )
}

export default App
