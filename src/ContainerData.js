import React from "react";
import {EventName} from './utils/DataNama';
import List from "./ListData";
import InputData from "./Inputdata";
import "./index.css"

class ContainerData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: EventName() 
        };
        // bind event handler on delete sama yang add data
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddDataHandler = this.onAddDataHandler.bind(this);
    }
    onDeleteHandler(id) {
        const dataList = this.state.dataList.filter(event => event.id !== id);
        this.setState({ dataList });
      }
    
    onAddDataHandler({ date, name, location, info }) {
        this.setState(prevState => {
            return {
                dataList: [
                    ...prevState.dataList,
                    {
                        id: +new Date(),
                        date,
                        name,
                        location,
                        info,
                    }
                ]
            };
        });
    }
    render() {
        return (
          <div>
            <div className="title-event">Event Calendar</div>
            <InputData addData={this.onAddDataHandler} />
            <List dataList={this.state.dataList} onDelete={this.onDeleteHandler} />
          </div>
        );
    }
}

export default ContainerData;