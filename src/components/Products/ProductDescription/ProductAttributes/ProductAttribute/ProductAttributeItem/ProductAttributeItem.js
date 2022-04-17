import {Component} from "react";
import classes from "./ProductAttributeItem.module.css"

class ProductAttributeItem extends Component
{

    render() {
        let attributeChangedHandler
        if (this.props.inProductDescription && this.props.noCartOverlay)
        {
            attributeChangedHandler = this.props.changeAttribute
        }else {
            attributeChangedHandler = (e) => this.props.changeAttribute(e,this.props.productId)
        }
        const classNames = [classes.ProductAttributeItem,classes[this.props.class || ""]]
        return (
            <>
                <input id={this.props.id} type="radio" name={`${this.props.contentName}|${this.props.productId}|${this.props.attributeName}`}
                       value={this.props.value} checked={this.props.attributeValue === this.props.value}
                       onChange={attributeChangedHandler}/>
                <label htmlFor={this.props.id} className={classNames.join(" ")}>
                    {this.props.displayValue}
                </label>
            </>
        );
    }
}

export default ProductAttributeItem