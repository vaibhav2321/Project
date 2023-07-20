class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    render() {
      return (
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      );
    }
  }
  ReactDOM.render(<Header />, document.getElementById('root'));

  class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    static getDerivedStateFromProps(props, state) {
      return {favoritecolor: props.favcol };
    }
    render() {
      return (
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      );
    }
  }
  
  ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root'));


  class Header extends React.Component {
    render() {
      return (
        <h1>This is the content of the Header component</h1>
      );
    }
  }
  
  ReactDOM.render(<Header />, document.getElementById('root'));


  class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({favoritecolor: "yellow"})
      }, 1000)
    }
    render() {
      return (
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      );
    }
  }
  
  ReactDOM.render(<Header />, document.getElementById('root'));