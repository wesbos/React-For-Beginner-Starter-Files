import React from 'react';

class AddFishForm extends React.Component {
  createFish(e) {
    e.preventDefault();
    const fish = {
      name: this.name.value,
      prcie: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value
    }
    this.props.addFish(fish);
    this.fishForm.reset();
  }

  render() {
    return (
      <form ref={(input) => this.fishForm = input} className="fish-edit" onSubmit={(e) => this.createFish(e)}>
        <input ref={(input) => this.name = input} type="text" placeholder="Fish Name"/>
        <input ref={(input) => this.price = input} type="text" placeholder="Fish Price"/>
        <select ref={(input) => this.status = input}>
          <option value="avaliable">Fresh!</option>
          <option value="unavaliable">Sold Out!</option>
        </select>
        <textarea ref={(input) => this.desc = input} type="text" placeholder="Fish Desc"></textarea>
        <input ref={(input) => this.image = input} type="text" placeholder="Fish Image"/>
        <button type="submit">Add Dat Fish</button>
      </form>
    )
  }
}

export default AddFishForm;
