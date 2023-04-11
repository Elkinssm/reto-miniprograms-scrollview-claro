Page({
  data: {
    productList: [],
    cartItems: []
  },

  onLoad(options) {
    // Generar 30 productos
    const productList = [];
    for (let i = 1; i <= 30; i++) {
      productList.push({
        id: i,
        name: `Producto ${i}`,
        description: `Descripción del producto ${i}`,
        price: Math.floor(Math.random() * 100) + 0.99
      });
    }

    this.setData({ productList });
  },
  addToCart(event) {
    const itemId = event.currentTarget.dataset.itemId;
    const item = this.data.productList.find(item => item.id === itemId);
    if (!item) return;
    this.setData({ cartItems: [...this.data.cartItems, item] });
    console.log(item);
    my.alert({
      content: "Item añadido al carrito de compras",
      showCancel: false,
      buttonText: "Aceptar"
    });
  },

  startPuzzle() {
    my.navigateTo({
      url: `/pages/cart/cart?cartItems=${JSON.stringify(this.data.cartItems)}`
    });
  }
});
