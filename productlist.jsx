import ProductCard from "./productcard.jsx";

function ProductList(){
    const product=[{name:"Product1", price :"21000",rating : 4.3 ,image:img1},
        {name:"Product2", price :"28000",rating : 4.2 ,image:img2},
        {name:"Product3", price :"25000",rating : 4.8 ,image:img3},
        {name:"Product4", price :"35000",rating : 5.0 ,image:img4}
    ]

    return(<>
    <ProductCard data={product}/>
    </>)
}
export default ProductList