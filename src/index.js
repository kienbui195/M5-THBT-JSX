import React from 'react';
import ReactDOM from 'react-dom/client';

//const name = "my name";
const root = ReactDOM.createRoot(document.getElementById("root"));


//Su dung React.createElement
//root.render(
//  React.createElement("h1", { style: { textAlign: "center" } }, name)
//)

//Su dung JSX
//root.render(<h1 style={{ textAlign: "center" }}>{name}</h1>);

//Tao Element the hien danh sach cac loai qua su dung JSX
// const fruits = ['Apple', 'Banana', 'Orange', 'Apricot', 'Black rowan', 'Cranberry'];
// root.render(
//   <div>
//     <h1>List of fruits</h1>
//   <ul>
//       {fruits.map((item) => (
//         <li>{item}</li>
//       ))}
//   </ul>
//   </div>
// )

//Hien thi tgian hien tai bang JSX
const tick = () => {
  root.render(
    <div>
      <h1>Hello, world!</h1>
      <h3>It is {new Date().toLocaleTimeString()}.</h3>
    </div>
  );
};
setInterval(tick, 1000);
