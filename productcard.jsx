function ProductCard(props){
    return (<>
    <table border="1">
        {
            props.data.filter((p)=> p.rating>4).map((p)=>
            <tr>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td><img src={p.image} width="100"/></td>
                <td>{p.rating}</td>

            </tr>)
        }
    </table>
    </>)
}
export default ProductCard;