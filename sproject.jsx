function Sproject(props){
    return(
        <div>
            {props.data.map((d)=>
            <div><h1>Name : {d.name}</h1>
                <h3>Desc : {d.desc}</h3>
                <img src={d.image} width="250"/>
            </div>)}
        </div>
    )
}export default Sproject;