export const query = `
query data{
  categories{
    name
    products{
      id
      name
      inStock
      gallery
      description
      category
      attributes{
        id
        name
        type
        items{
          displayValue
          value
          id
        }
      }
      prices{
        currency{
          label,symbol
        }
        amount
      }
      brand
    }
  }
}
`
export const graphQLEndPoint = "http://localhost:4000"