import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/Section1.css';

function Section1() {
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <h6>Lorem ipsum dolor sit amet</h6>
          <input type="radio" name="radio" className="form-check-input"></input>
          <label className="form-check-label"> Radio Button Option</label>
          <br />
          <input type="radio" name="radio" className="form-check-input"></input>
          <label className="form-check-label"> Radio Button Option</label>
          <br />
          <input type="radio" name="radio" className="form-check-input"></input>
          <label className="form-check-label"> Radio Button Option</label>
          <br />
          <input type="radio" name="radio" className="form-check-input"></input>
          <label className="form-check-label"> Radio Button Option</label>
          <br />
        </div>
        <div id="select">
          <h6>Lorem ipsum dolor sit amet</h6>
          <select className="form-select">
            <option defaultValue>Drop Down Option</option>
            <option> Drop Down Option</option>
            <option> Drop Down Option</option>
            <option> Drop Down Option</option>
          </select>
        </div>
        <div className="mb-3">
          <h6>Lorem ipsum dolor sit amet</h6>
          <input type="checkbox" name="checkbox" className="form-check-input"></input>
          <label className="form-check-label">Checkbox Option</label>
          <br />
          <input type="checkbox" name="checkbox" className="form-check-input"></input>
          <label className="form-check-label">Checkbox Option</label>
          <br />
          <input type="checkbox" name="checkbox" className="form-check-input"></input>
          <label className="form-check-label">Checkbox Option</label>
          <br />
          <input type="checkbox" name="checkbox" className="form-check-input"></input>
          <label className="form-check-label">Checkbox Option</label>
          <br />
        </div>
        <div className="mb-3 btn-con">
        <input type="submit" className="btn btn-primary button"></input>
        </div>
      </form>
    </div>
  );
}

export default Section1;
