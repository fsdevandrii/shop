import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "Всё",
        },
        {
          key: "rose",
          name: "Роза",
        },
        {
          key: "tulip",
          name: "Тюльпан",
        },
        {
          key: "carnation",
          name: "Гвоздика",
        },
        {
          key: "chamomile",
          name: "Ромашка",
        },
        {
          key: "сomposition",
          name: "Композиция",
        },
      ],
    };
  }

  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div onClick={() => this.props.chooseCategory(el.key)} key={el.key}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
