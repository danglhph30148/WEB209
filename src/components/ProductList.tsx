import React from "react";
import IProduct from "../interface/Product";
import Addtocart from "./Addtocart";

type Props = {
  products: IProduct[];
};

const Productlist = (props: Props) => {
  const products: any[] = props.products;
  console.log(products);
  return (
    <div className="content">
      <div className="container">
        <div className="row">
          {products.map((product: IProduct, index: number) => {
            return (<div key={product.id} className="item col-6 col-sm-4 col-md-3">
              <img src={product.image} />
              <h3>{product.name}</h3>
              <span>{product.price}</span>
              <p><Addtocart pid={product.id}/></p>
            </div>)
          })}
        </div>
      </div>
    </div>
  );
};
export default Productlist;