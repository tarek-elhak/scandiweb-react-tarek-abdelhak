import {Component} from "react";
import classes from "./Productattribute.module.css"
import ProductAttributeItem from "./ProductAttributeItem/ProductAttributeItem";

class ProductAttribute extends Component
{
    render() {
        const items = this.props.items.map(item => <ProductAttributeItem key={item.id} {...item} class={this.props.class} />)
        const classNames = [classes.ProductAttribute,classes[this.props.class || ""]]
        return (
            <div className={classNames.join(" ")}>
                {!this.props.class && <h3 className={classes.AttributeName}>{this.props.name}</h3>}
                <div className={classes.AttributeItems}>
                    {items}
                </div>
            </div>
        );
    }
}

export default ProductAttribute