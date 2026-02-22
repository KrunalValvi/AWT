//class component
// import React from "react";
// class Car extends React.Component{
//   render(){
//     return(
//       <h1>This is my class component car.</h1>
//     );
//   }
// }
// export default Car;


// function Car(){
//   return(
//     <h1>This is my function component</h1>
//   );
// }
// export default Car;


// //props
// function Car(props){
//   return(
//     <>
//       <h1>This is my function component</h1>
//       <p>my car model is {props.model} and name is {props.name}</p>
//     </>
   
//   );
// }


//props
function Car(props){
  return(
    <>
      <h1>This is my function component</h1>
      <p>my car model is {props.model[1]} and name is {props.name} and developed in {props.year[2]}</p>
      <p>car information is {props.carinfo.color}</p>
    </>
   
  );
}
export default Car;


//class component with props
// import React from "react";
// class Car extends React.Component{
//   render(){
//     return(
//       <>
//        <h1>This is my class component car.</h1>
//         <p>my car info is {this.props.model[2]} {this.props.year[2]}</p>
//       </>    
//     );
//   }
// }
// export default Car;


//states with class component
// import React from "react";
// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {count:0};
//   }
//   increment =()=>{
//     this.setState((prevState)=>({
//       count: prevState.count+1
//     }));
//    }
//   render(){
//     return(
//       <>
//         <p>Counter Value is :{this.state.count}</p>
//         <div>
//           <button onClick={this.increment}>Increment Counter</button>
//         </div>
//       </>
//     );
//   }
 
// }
// export default App

