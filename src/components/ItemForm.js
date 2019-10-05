import React from 'react';

class ItemForm extends React.Component {
  state = {
    item: this.props.activeItem || {
        name: '',
        price: '',
        imageUrl: '',
        description: '',
        shipping: ''
      }
  }

  changeHandler = e => {
    e.persist();
    let value = e.target.value;

    this.setState(prevState => ({
        item: {...prevState.item, [e.target.name]: value}
    }))
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(e, this.state.item);
    this.setState({
      name: '',
      price: '',
      imageUrl: '',
      description: '',
      shipping: ''
    })
  }

  render() {
    return (
      <div>
        <h2>Add new item</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={this.changeHandler}
            placeholder="Name"
            value={this.state.item.name}
          />

          <input
            type="text"
            name="price"
            onChange={this.changeHandler}
            placeholder="Price"
            value={this.state.item.price}
          />

          <input
            type="text"
            name="imageUrl"
            onChange={this.changeHandler}
            placeholder="Image URL"
            value={this.state.item.imageUrl}
          />

          <input
            type="text"
            name="description"
            onChange={this.changeHandler}
            placeholder="Description"
            value={this.state.item.description}
          />

          <input
            type="text"
            name="shipping"
            onChange={this.changeHandler}
            placeholder="Shipping"
            value={this.state.item.shipping}
          />

          <button>Add new item</button>
        </form>
      </div>
    )
  }
}

export default ItemForm;
