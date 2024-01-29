import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("child-constructor" + this.props.name);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
  }
  async componentDidMount() {
    //Best place to make an Api Call
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const response = await data.json();
    console.log(response);
    this.setState({
      userInfo: response,
    });
    console.log("child-compoundDidMount" + this.props.name);
  }

componentDidUpdate(){
  console.log("Component Did Update")
}

componentWillUnmount(){
  console.log("component will Unmounted")
}

  render() {
    console.log("child-render" + this.props.name);
    return (
      <div>
        <h1>About Us Page</h1>
        <img src={this.state.userInfo.avatar_url} alt="" />
        <h2>name:{this.state.userInfo.name}</h2>
        <h2>location:{this.state.userInfo.location}</h2>
        <p>{this.props.name}</p>
      </div>
    );
  }
}
export default ProfileClass;
