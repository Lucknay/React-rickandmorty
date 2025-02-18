export const CardComponent = ({element}) =>{
    return(

        <div className="card" key={element.id}>

          <img src={element.image} alt={element.name} />
          <h2>{element.name}</h2>
          <div className="card-info">
          
          <p> Status: <span>{element.status}</span></p>
          <p>Genero: <span>{element.gender}</span></p>
          <p>Espécie: <span>{element.species}</span></p>
          </div>
          
        </div>
    )


}