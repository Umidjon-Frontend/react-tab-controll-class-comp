import React, { Component } from "react";
import Invoice1 from "../Invoice/Invoice1";
import Invoice2 from "../Invoice/Invoice2";
import Invoice3 from "../Invoice/Invoice3";
import Invoice4 from "../Invoice/Invoice4";
import "./TabControll.css";

class TabControll extends Component {
  state = {
    active: 1,
  };
  activeTabControll = (num) => {
    this.setState({
      active: num,
    });
  };
  render() {
    const { active } = this.state;
    return (
      <div className="tab-container">
        <div className="tab-box">
          <div className="btn-wrapper">
            <button
              className={"btn " + (active === 1 ? "active": "")}
              onClick={() => this.activeTabControll(1)}
            >
              Invoice1
            </button>
            <button
              className={"btn " + (active === 2 ? "active": "")}
              onClick={() => this.activeTabControll(2)}
            >
              Invoice2
            </button>
            <button
              className={"btn " + (active === 3 ? "active": "")}
              onClick={() => this.activeTabControll(3)}
            >
              Invoice3
            </button>
            <button
              className={"btn " + (active === 4 ? "active": "")}
              onClick={() => this.activeTabControll(4)}
            >
              Invoice4
            </button>
          </div>
          <div className="tab-lists">
            {active === 1 ? (
              <Invoice1 active={active} />
            ) : active === 2 ? (
              <Invoice2 active={active} />
            ) : active === 3 ? (
              <Invoice3 active={active} />
            ) : (
              <Invoice4 active={active} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default TabControll;
