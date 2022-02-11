import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import ProductS1 from "../components/product-s1";
import ProductS2 from "../components/product-s2";
import ProductS3 from "../components/product-s3";
import ProductS4 from "../components/product-s4";

class Product extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <ProductS1/>
                <ProductS2/>
                <ProductS3/>
                <ProductS4/>
            </Container>    
        );
    }
}

export default Product;