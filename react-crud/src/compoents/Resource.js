import React, { useState } from "react";

export const Resource = (props) => {

  const initialFormState = {
    id: null,
    studentName: '',
    email: '',
    mobileNumber: 0,
    dob: '',
    course: '',
    address: ''
  };

  const [user, setUser] = useState(initialFormState);





  const handleEvent = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  const submitValue = (event) => {
    event.preventDefault();
    if (!user.studentName || !user.email || !user.mobileNumber || !user.dob
      || !user.course || !user.address) {
      alert("Please Fill the all Data");
    }
    else if (user.mobileNumber.length < 10) {
      alert("Invalid Number")
    }
    else {
      props.addNew(user);
      setUser(initialFormState);
      props.setAdd(true)
    }


  }


  return (
    <>
      <div className="container-fulid">
        <h1 className="text-center">Student Deatils Form</h1>
      </div>
      <form autoComplete="off">
        <div className="container">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Student Name</label>
            <input type="text" class="form-control" id="exampleFormControlInput1"
              onChange={handleEvent}
              name="studentName"
              value={user.studentName} placeholder="Enter the name" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email Address</label>
            <input type="email"
              onChange={handleEvent}
              class="form-control" id="exampleFormControlInput1"
              name="email"
              value={user.email}
              placeholder="name@example.com" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
            <input type="number" onChange={handleEvent} class="form-control" id="exampleFormControlInput1"
              name="mobileNumber"
              value={user.mobileNumber}
              placeholder="Enter your mobile Number" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Date of Birth</label>
            <input type="date" onChange={handleEvent} class="form-control"
              name="dob"
              value={user.dob}
              id="exampleFormControlInput1" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Course</label>
            <select className="form-control" onChange={handleEvent} name="course"
              value={user.course}>
              <option value="CSE">CSE</option>
              <option value="MECH">MECH</option>
              <option value="IT">IT</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Address</label>
            <textarea class="form-control" onChange={handleEvent} id="exampleFormControlTextarea1"
              name="address"
              value={user.address}
              rows="2"></textarea>
          </div>

          <button className="btn btn-success me-5" onClick={submitValue}>Submit</button>


          <button className="btn btn-warning" onClick={() => {
            props.setAdd(true)
          }}>Clear</button>
        </div>
      </form>

    </>
  )
}