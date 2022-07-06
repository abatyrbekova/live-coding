import React from "react";

const style1 = {
    position: 'absolute',
    top: '100%',
    // backgroundColor: 'red'
}


export default function DropDown() {
  return (
    <div style={style1}>
      <li>item 1</li>
      <li> item 2</li>
      <li>item 3</li>
    </div>
  );
}
