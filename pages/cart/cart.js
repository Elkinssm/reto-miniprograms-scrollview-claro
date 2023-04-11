Page({
  data: {
    cartItems: []
  },
  onLoad(options) {
    const cartItems = JSON.parse(options.cartItems);
    console.log(cartItems);
    this.setData({ cartItems });
  },

});
