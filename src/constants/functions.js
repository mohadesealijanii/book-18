export const sumProducts = (products) => {
  const itemsCounter = products.reduce(
    (counter, product) => counter + product.quantity,
    0
  )
  const total = products
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2)

  return { itemsCounter, total }
}

export const productQuantity = (state, id) => {
  console.log(state.selectedItems)

  const index = state.selectedItems.findIndex((item) => item.id === id)
  if (index === -1) {
    return 0
  } else {
    return state.selectedItems[index].quantity
  }
}

