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
        </form>
      </div>
    )
  }
}

export default ItemForm;
