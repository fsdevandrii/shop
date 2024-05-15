import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Композиция",
          img: "flow_01.jpg",
          desc: "lorem ipsum dolor sit amot, conceptual rose",
          category: "сomposition",
          art: "Арт 1453",
          price: "49.99",
        },
        {
          id: 2,
          title: "Композиция",
          img: "flow_02.jpg",
          desc: "lorem ipsum dolor sit amot, conceptual rose",
          category: "сomposition",
          art: "Арт 1455",
          price: "52.99",
        },
        {
          id: 3,
          title: "Роза",
          img: "flow_03.jpg",
          desc: "lorem ipsum dolor sit amot, conceptual rose",
          category: "rose",
          art: "Арт 1456",
          price: "59.99",
        },
        {
          id: 4,
          title: "Ромашка",
          img: "flow_03.jpg",
          desc: "lorem ipsum dolor sit amot, conceptual rose",
          category: "chamomile",
          art: "Арт 1457",
          price: "29.99",
        },
      ],
    };
    this.state.currentItems = this.state.items;
    this.adToOrder = this.adToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.items} onAdd={this.adToOrder} />
        <Footer />
      </div>
    );
  }

  chooseCategory(category) {
    console.log(category);
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
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
