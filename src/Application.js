import React, { createRef, useContext, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

const style = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    inputs: {
      marginBottom: "5px",
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
    },
  },
};
let arr = [];
function PhoneBookForm(props) {
 
 
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      style={style.form.container}
    >
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userFirstname"
        name="userFirstname"
        type="text"
        onChange={(e) => getValuName(e.target.value)}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userLastname"
        name="userLastname"
        type="text"
        onChange={(e) => LastName(e.target.value)}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userPhone"
        name="userPhone"
        type="text"
        onChange={(e) => PhoneNum(e.target.value)}
      />
      <br />
      <input
        style={style.form.submitBtn}
        className="submitButton"
        type="submit"
        onClick={() => props.parentCallback(FName,LName,PhoneNumv)}
        value="Add User"
        id="btn"
      />
    </form>
  );
}

function InformationTable(props) {
  return (
    <table style={style.table} className="informationTable" border="1">
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
        
         { props.ar.map((e,index) => (
            <tr key={index}>
              <td>{e.F}</td>
              <td>{e.L}</td>
              <td>{e.ph}</td>
            </tr>
          ))
         }
      </thead>
    </table>
  );
}

let FName = "";
let LName = "";
let PhoneNumv = "";

function getValuName(e) {
  FName = e;
}
function LastName(e) {
  LName = e;
}

function PhoneNum(e) {
  PhoneNumv = e;
}
let art  = [];
export default function Application(props) {
  const [arr,setarr] = useState([]);
 
  const callbackFunction = (F,L,ph) => {
   console.log(F)
   console.log(L)
   console.log(ph)
art.push({F:F,L:L,ph:ph});
setarr([...art]);
}


  return (
    <section>
      <PhoneBookForm parentCallback = {callbackFunction}/>
      <InformationTable  ar={arr}/>
    </section>
  );
}

// ReactDOM.render(
//   <Application />,
//   document.getElementById('root')
// );
