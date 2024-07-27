import { useRef, useState, useEffect } from "react";
import "./style.css";
import Table from "react-bootstrap/Table";

const FormValidation = () => {
  const mobile_brand = useRef();
  const mobile_model = useRef();
  const mobile_imei = useRef();
  const mobile_issue = useRef();
  const mobile_complaints = useRef();
  const mobile_number = useRef();
  const mobile_email = useRef();

  const [error, setError] = useState(null);
  const [formData, setFormData] = useState([]);
  // const[form,setForm]=useState({
  //   nam
  // })

  useEffect(() => {
    const storedData = localStorage.getItem("formdata");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    const brand = mobile_brand.current.value;
    const model = mobile_model.current.value;
    const imei = mobile_imei.current.value;
    const issue = mobile_issue.current.value;
    const complaints = mobile_complaints.current.value;
    const number = mobile_number.current.value;
    const email = mobile_email.current.value;

    if (
      /samsung/gi.test(brand) &&
      model.length >= 1 &&
      imei.length >= 1 &&
      imei.length <= 15 &&
      issue.length >= 1 &&
      number.length === 10 &&
      complaints.length >= 1
    ) {
      alert("Successfully submitted");
      setError(null);

      const obj = {
        brand: brand,
        model: model,
        imei: imei,
        issue: issue,
        number: number,
        complaints: complaints,
        email: email,
      };

      const updatedFormData = [...formData, obj];
      setFormData(updatedFormData);
      localStorage.setItem("formdata", JSON.stringify(updatedFormData));
    } else {
      setError("Please enter correct details");
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <h2>Samsung Warranty Form</h2>
        <div className="form-group">
          <label htmlFor="brandInput">
            <b>Enter mobile brand:</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="brandInput"
            placeholder="Enter mobile brand"
            ref={mobile_brand}
          />
        </div>

        <div className="form-group">
          <label htmlFor="modelInput">
            <b>Mobile Model:</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="modelInput"
            placeholder="Enter mobile model"
            ref={mobile_model}
          />
        </div>
        <div className="form-group">
          <label htmlFor="imeiInput">
            <b>Enter IMEI Number:</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="imeiInput"
            placeholder="Enter IMEI Number"
            ref={mobile_imei}
          />
        </div>

        <div className="form-group">
          <label htmlFor="issueTextarea">
            <b>Brief about the issue:</b>
          </label>
          <textarea
            className="form-control"
            id="issueTextarea"
            rows={3}
            ref={mobile_issue}
          />
        </div>

        <div className="form-group">
          <label htmlFor="complaintsInput">
            <b>Have any complaints:</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="complaintsInput"
            placeholder="Enter complaints"
            ref={mobile_complaints}
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailInput">
            <b>Email address:</b>
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="Enter email"
            ref={mobile_email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="numberInput">
            <b>Enter Mobile Number:</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="numberInput"
            placeholder="Enter mobile number"
            ref={mobile_number}
          />
        </div>
        {error && <span style={{ color: "red" }}>{error}</span>}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>IMEI</th>
            <th>Issue</th>
            <th>Number</th>
            <th>Complaints</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((each, index) => (
            <tr key={index}>
              <td>{each.brand}</td>
              <td>{each.model}</td>
              <td>{each.imei}</td>
              <td>{each.issue}</td>
              <td>{each.number}</td>
              <td>{each.complaints}</td>
              <td>{each.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default FormValidation;
