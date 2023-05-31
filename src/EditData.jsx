import React from "react";

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: props.data.nama,
      location: props.data.location,
      info: props.data.location,
    };
    this.handleNamaChange = this.handleNamaChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleInfoChange = this.handleInfoChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }


  handleNamaChange(event) {
    this.setState({ nama: event.target.value });
  }

  handleLocationChange(event) {
    this.setState({ location: event.target.value });
  }

  handleInfoChange(event) {
    this.setState({ info: event.target.value });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const { id, nama, location, info } = this.props.data;
    const {nama: newNama, location: newLocation, info: newInfo } = this.state;
  
    if (newNama === nama && newLocation === location && newInfo === info) {
      this.props.onCancel();
    } else {
      const updatedData = {
        id,
        nama: newNama,
        location: newLocation,
        info: newInfo,
      };
      this.props.onSave(updatedData);
    }
  }
  
  handleCancel() {
    this.props.onCancel();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        
         <input
          className='edit-name' 
          type="text"
          value={this.state.nama}
          onChange={this.handleNamaChange}
        />
        <input
          className='edit-location' 
          type="text"
          value={this.state.location}
          onChange={this.handleLocationChange}
        />
        <input
          className='edit-info' 
          type="text"
          value={this.state.info}
          onChange={this.handleInfoChange}
        />
        
        <div className="btnContainer">
          <button type="submit">Save</button>
          <button className="cancelBtn" type="button" onClick={this.handleCancel}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default EditForm;
