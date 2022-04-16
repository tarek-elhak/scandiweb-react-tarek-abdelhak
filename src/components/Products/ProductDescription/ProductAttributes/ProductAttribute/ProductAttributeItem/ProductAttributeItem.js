import {Component} from "react";
import classes from "./ProductAttributeItem.module.css"

class ProductAttributeItem extends Component
{
    render() {
        const classNames = [classes.ProductAttributeItem,classes[this.props.class || ""]]
        return (
            <div className={classNames.join(" ")}>
                {this.props.displayValue}
            </div>
        );
    }
}

export default ProductAttributeItem