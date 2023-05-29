import React from "react";

class InputData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            name: "",
            location: "",
            info: "",
        };
        /// bind event handler
        this.onDateChangeEventHandler = this.onDateChangeEventHandler.bind(this);
        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onLocationChangeEventHandler = this.onLocationChangeEventHandler.bind(this);
        this.onInfoChangeEventHandler = this.onInfoChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onDateChangeEventHandler(event) {
        this.setState({
            date: event.target.value
        });
    }

    onNameChangeEventHandler(event) {
        this.setState({
            date: event.target.value
        });
    }

    onLocationChangeEventHandler(event) {
        this.setState({
            date: event.target.value
        });
    }

    onInfoChangeEventHandler(event) {
        this.setState({
            date: event.target.value
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addData(this.state);
        // clear columns
        this.setState({
          date: "",
          name: "",
          location: "",
          info: ""
        });
      }

      render () {
        return (
            <form className="input-new-event" align="center" onSubmit={this.onSubmitEventHandler}>
                <div >
                    <input
                    className="input-date"
                    type="date"
                    placeholder="Input date"
                    value={this.setState.date}
                    onChange={this.onDateChangeEventHandler}/>
                </div>

                <div >
                    <input
                    className="input-name"
                    type="text"
                    placeholder="Input event name"
                    value={this.setState.name}
                    onChange={this.onNameChangeEventHandler}/>
                </div>

                <div >
                    <input
                    className="input-location"
                    type="text"
                    placeholder="Input location"
                    value={this.setState.location}
                    onChange={this.onLocationChangeEventHandler}/>
                </div>

                <div >
                    <input
                    className="input-info"
                    type="text"
                    placeholder="Input more information"
                    value={this.setState.info}
                    onChange={this.onInfoChangeEventHandler}/>
                </div>

                <button className="addButton" align="center" type="submit">Add Event</button>
            </form>
        )
      }
}

export default InputData;