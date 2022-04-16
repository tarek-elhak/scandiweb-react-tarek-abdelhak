import {Component} from "react";
import ProductAttribute from "./ProductAttribute/ProductAttribute"
import classes from "./ProductAttributes.module.css"
class ProductAttributes extends Component
{
    render() {
        const attributesElements = this.props.attributes.map(attribute => <ProductAttribute key={attribute.id} {...attribute} class={this.props.class}/>)
        const classNames = [classes.ProductAttributes,classes[this.props.class || ""]]
        return (
            <div className={classNames.join(" ")}>
                {attributesElements}
            </div>
        );
    }
}

export default ProductAttributes