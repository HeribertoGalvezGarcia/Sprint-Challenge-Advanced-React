import React from 'react';
import axios from "axios";
import PersonList from "./components/PersonList";
import Header from "./components/Header";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
      darkMode: false
    };
  }

  setDarkMode = (darkMode) => {
    this.setState({darkMode: darkMode});
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
      .then(({data}) => this.setState({players: data}))
      .catch(e => console.log(e));
  }

  render() {
    return (
      <div>
        <Header setDarkMode={this.setDarkMode} />
        <PersonList data={this.state.players} darkMode={this.state.darkMode} />
      </div>
    );
  }
}

export default App;
