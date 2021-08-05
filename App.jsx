import React, { PureComponent } from "react";
import DropDown from "./components/DropDown/DropDown";
import UserList from "./components/UserList/UserList";
import { getUsers } from "./service";
import "./App.css";

export default class App extends PureComponent {
  defaultDomainIndex = 4;
  domains = [
    "all",
    ".biz",
    ".tv",
    ".net",
    ".org",
    ".ca",
    ".info",
    ".me",
    ".io",
  ];

  state = {
    users: [],
    filter: this.domains[this.defaultDomainIndex],
  };

  async componentDidMount() {
    const users = await getUsers();
    this.setState({ users });
  }
  handleDropDownSelection = (e) => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  render() {
    const { users, filter } = this.state;
    return (
      <>
        <div className="container">
          <DropDown
            domains={this.domains}
            dropDownHandler={this.handleDropDownSelection}
          />
          <UserList users={users} filter={filter} />
        </div>
      </>
    );
  }
}
