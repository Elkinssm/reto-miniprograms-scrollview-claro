Page({
  data: {
    cartItems: [],
    piezas: {
      x: 0,
      y: 0
    },
    rompecabezasCompleto: false,
    mostrarRompecabezas: false
  },

  onLoad(options) {
    const cartItems = JSON.parse(options.cartItems);
    console.log(cartItems);
    this.setData({ cartItems });
  },

  onTouchMove(e) {
    console.log(e);
    const { x, y } = e.detail;
    console.log(e.detail);
    const { piezas } = this.data;
    console.log(piezas);
    console.log(x, y);
    const id = e.target.id;
    if (id === "pieza2") {
      console.log(`Soy ${id}`);
      if (piezas.x >= 90 && piezas.y <= 0) {
        this.setData({ rompecabezasCompleto: true });
      }
      console.log(`${x} y ${y}`);
    }
    this.setData({
      "piezas.x": x,
      "piezas.y": y
    });
  },

  onConfirmarCompra() {
    this.setData({
      mostrarRompecabezas: true
    });
    if (this.data.rompecabezasCompleto) {
      my.alert({
        title: "¡Compra confirmada!",
        content: "¡Gracias por tu compra!",
        showCancel: false,
        buttonText: "Aceptar",
        success: () => {
          my.navigateBack({ delta: 1 });
        }
      });
    } else {
      my.alert({
        title: "Se necesita completar el rompecabezas para confirmar la compra",
        buttonText: "Aceptar",
        duration: 2000
      });
    }
  }
});
