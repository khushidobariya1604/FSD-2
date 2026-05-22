// function Events(){
//     const myclick=()=>{
//         alert("Hello")
//     }
//     return(
//         <>
//         <button onClick={myclick}>Click Here</button>
//         </>
//     )
// }
// export default Events;


function Events(){
    const myclick=(n)=>{
        alert(`Hello ${n}`)
    }
    return(
        <>
        <button onClick={()=>myclick("ABC")}>Click Here</button>
        </>
    )
}
export default Events;