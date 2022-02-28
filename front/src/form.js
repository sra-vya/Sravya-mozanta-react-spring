import React from "react";
import axios from "axios";

export default function Form() {
  function formData(e) {
    e.preventDefault();
    var data = {
      name: document.getElementById("name").value,
      clas: document.getElementById("class").value,
      dob: document.getElementById("dob").value,
      division: document.getElementById("division").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
    };
    axios.post("http://localhost:8000/add", data);
  }

  return (
    <div>
      <form action="/">
        <table>
          <tr>
            <td>NAME</td>
            <td>
              {" "}
              <input type="text" id="name" />{" "}
            </td>
          </tr>
          <tr>
            <td>DATE OF BIRTH</td>
            <td>
              {" "}
              <input type="date" id="dob" />{" "}
            </td>
          </tr>
          <tr>
            <td>CLASS</td>
            <td>
              <select id="class">
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
                <option value="V">V</option>
                <option value="VI">VI</option>
                <option value="VII">VII</option>
                <option value="VII">VIII</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>DIVISION</td>
            <td>
              <select id="division">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>GENDER</td>
            <input type="radio" name="genter" value="male" />
            <label>male</label> <br />
            <input type="radio" name="genter" value="female" />{" "}
            <label>female</label> <br />
          </tr>
          <tr>
            <td>EMAIL</td>
            <td>
              <input type="text" id="email" />
            </td>
          </tr>
          <tr>
            <td>PHONE NUMBER</td>
            <td>
              <input type="text" id="phone" />
            </td>
          </tr>
          <tr>
              <td colSpan="2">
              <h6 className="text-primary">You have to save the data before you submit</h6>
              </td>
          </tr>
          <tr>
              <td></td>
            <td>
               <input className="btn btn-block btn-primary" onClick={formData} type="button" value="Save" />
            </td>
          </tr>
          <tr>
              <td></td>
          <td>
              <input className="btn btn-block btn-success" type="submit" value="Submit" />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}
