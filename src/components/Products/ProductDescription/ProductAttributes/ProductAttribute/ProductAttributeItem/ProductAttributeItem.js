import {Component} from "react";
import classes from "./ProductAttributeItem.module.css"

class ProductAttributeItem extends Component
{

    render() {
        const classNames = [classes.ProductAttributeItem,classes[this.props.class || ""]]
        return (
            <>
                <input id={this.props.id} type="radio" name={this.props.attributeName}
                       value={this.props.value} checked={this.props.attributeValue === this.props.value}
                       onChange={this.props.changeAttribute}/>
                <label htmlFor={this.props.id} className={classNames.join(" ")}>
                    {this.props.displayValue}
                </label>
            </>
        );
    }
}

export default ProductAttributeItem