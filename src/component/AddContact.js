import React, { useState } from 'react'


function AddContact(props) {
  const [values, setvalues] = useState({
    id: null,
    name: "",
    email: "",
  });


  const submit = (e) => {
    e.preventDefault();
    if (values.name === undefined || values.name === "" || values.email === "" || values.email === undefined) {
      alert("!!!! ALL THE FIELDS ARE MANDATORY !!!!");
    }
    else {
      props.addcontact(values);
      setvalues({ name: "", email: "" })
    }
  }



  return (
    <div className='container '>
      <br />
      <h5 className='d-flex justify-content-start navbar-brand'>Add Contacts</h5>
      <form className='d-flex justify-content-center'>
        <div className="form-group ">
          <label>NAME:
            <input type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="NAME"
              name="name"
              value={values.name}
              onChange={(e) => {
                setvalues({ ...values, name: e.target.value })
              }}
            ></input></label>
        </div>&nbsp;&nbsp;

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address
            <input type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              value={values.email}
              onChange={(e) => {
                setvalues({ ...values, email: e.target.value })

              }}
            >
            </input>
          </label>
        </div>&nbsp;
        <div>
          <br />
          <button type="submit" className="btn btn-primary" onClick={submit} >Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddContact;