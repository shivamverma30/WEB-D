import Product from "./Product";


function ProductTab(){
  let styles ={
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center",
    alignItems:"center",
  };
    return (
     <div style={styles}>                  
      <Product title="Logitech MX Master" idx={0} />
      <Product title="Apple Pencil" idx={1}/>
      <Product title="Zebronices buds" idx={2}/>
      <Product title="Pentronics pen" idx={3}/>
      </div>
    );
}

export default ProductTab;