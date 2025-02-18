export const SelectComponent = ({opcoes, onchange})=>{

    return (

        <select name="" id="selecionar" onChange={onchange}>
            {opcoes && opcoes.map((e)=>(
                <option id="opcoes" value={e.valor} >{e.texto}</option>

            ))}

        </select>

    )



}