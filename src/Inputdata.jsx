import React from "react";

class InputData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            nama: "",
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
            nama: event.target.value
        });
    }

    onLocationChangeEventHandler(event) {
        this.setState({
            location: event.target.value
        });
    }

    onInfoChangeEventHandler(event) {
        this.setState({
            info: event.target.value
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addData(this.state);
        // hrusny clear column kl gabisa brrti berak
        this.setState(() => {
            return{
                date: "",
                nama: "",
                location: "",
                info: "",
            }
        })
    }
    // {
    //     event.preventDefault();
    //     this.props.addData(this.state);
    //     // clear columns
    //     this.setState({
    //       date: "",
    //       nama: "",
    //       location:  "",
    //       info: ""
    //     });
    //   }

      render () {
        return (
            <form className="input-new-event" align="center" onSubmit={this.onSubmitEventHandler}>
                <div >
                    <input
                    className="input-date"
                    type="date"
                    placeholder="Input date"
                    value={this.state.date}
                    onChange={this.onDateChangeEventHandler}/>
                </div>

                <div >
                    <input
                    className="input-name"
                    type="text"
                    placeholder="Input event name"
                    value={this.state.nama}
                    onChange={this.onNameChangeEventHandler}/>
                </div>

                <div >
                    <input
                    className="input-location"
                    type="text"
                    placeholder="Input location"
                    value={this.state.location}
                    onChange={this.onLocationChangeEventHandler}/>
                </div>

                <div >
                    <input
                    className="input-info"
                    type="text"
                    placeholder="Input more information"
                    value={this.state.info}
                    onChange={this.onInfoChangeEventHandler}/>
                </div>

                <button className="addButton" align="center" type="submit">Add Event</button>
            </form>
        )
      }
}

export default InputData;