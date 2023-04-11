Page({
  data: {
    productList: [
      {
        id: 1,
        name: "Producto 1",
        description: "Descripción del producto 1",
        price: 10.99
      },
      {
        id: 2,
        name: "Producto 2",
        description: "Descripción del producto 2",
        price: 15.99
      },
      {
        id: 3,
        name: "Producto 3",
        description: "Descripción del producto 3",
        price: 20.99
      },
      {
        id: 4,
        name: "Producto 4",
        description: "Descripción del producto 4",
        price: 25.99
      },
      {
        id: 5,
        name: "Producto 5",
        description: "Descripción del producto 5",
        price: 30.99
      }
    ],
    cartItems: []
  },

  addToCart(event) {
    const itemId = event.currentTarget.dataset.itemId;
    const item = this.data.productList.find(item => item.id === itemId);
    if (!item) return;
    this.setData({ cartItems: [...this.data.cartItems, item] });
    console.log(item);
    my.showToast({
      content: "Item añadido al carrito de compras",
      delay: 100
    });
  },

  startPuzzle() {
    my.navigateTo({
      url: `/pages/cart/cart?cartItems=${JSON.stringify(this.data.cartItems)}`
    });
  }
});
