import "./product.css";
import Price from "./price";

 function Product ({title,idx}){
   let oldPrices =["12,495","11,980","1,599","599"];
   let newPrices =["8,999","9,199","899","278"];
   let Description=[
    ["8,000 DPI","instutive surface"],
    ["instutive surface","designed for ipad pro"],
    ["designed for ipad pro","instutive surface"],
    ["wireless","instutive surface"]
];
    return (
        <div className="Product" >
            <h4>{title}</h4>
           <p>{Description[idx][0]}</p>
           <p>{Description[idx][1]}</p>
           <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );
}

export default Product;
