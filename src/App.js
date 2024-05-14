import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "Стул серый",
          img: "flow_01.jpg",
          desc: "lorem ipsum dolor sit amot, conceptual rose",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 2,
          title: "Стул чёрный",
          img: "flow_02.jpg",
          desc: "lorem ipsum dolor sit amot, conceptual rose",
          category: "tables",
          price: "52.99",
        },
        {
          id: 3,
          title: "Стул красный",
          img: "flow_03.jpg",
          desc: "lorem ipsum dolor sit amot, conceptual rose",
          category: "tables",
          price: "59.99",
        },
      ],
    };
    this.adToOrder = this.adToOrder.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} />
        <Items items={this.state.items} onAdd={this.adToOrder} />
        <Footer />
      </div>
    );
  }

  adToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
