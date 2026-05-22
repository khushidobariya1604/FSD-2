function Map(){
    const students=[{rollno :1 ,name:"ABC",std:5},
        {rollno :2 ,name:"PQR",std:5},
        {rollno :3 ,name:"DEF",std:3},
        {rollno :4 ,name:"XYZ",std:4}
    ]
    return(
        <>
        {
            students.filter((s)=>s.std===5).map((s)=>
            <div key={s.rollno}> 
                <h2> Student Name : {s.name}</h2>
                <h3> Standard : {s.std}</h3>
            </div>)
        }
        </>
    )
}
export default Map;