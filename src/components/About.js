import React from "react";
import ProfileClass from "./ProfileClass";

// const About = () => {
//     return(
//         <div>
//             <h1>About Us Page</h1>
//             <p>This is the namaste React Live Course</p>
//         </div>
//     )
// };
// export default About;

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent-constructor");
   
  }
  componentDidMount() {
    //Best place to make an Api Call
    // console.log("parent-compoundDidMount");
  }
  render() {
    // console.log("parent-render");
    return (
      <div>
        <h1>About Us Page</h1>
        <p>This is the namaste React Live Course</p>
        <ProfileClass name={"first"} />
        {/* <ProfileClass name={"second"} /> */}
      </div>
    );
  }
}
export default About;
