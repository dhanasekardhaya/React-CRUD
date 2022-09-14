import React, { useState } from "react";

export const EditTable = (props) => {

  const [user, setUser] = useState(props.currentUser);

  const handleEvent = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  const submitValue = (event) => {
    event.preventDefault();
    props.updateUser(user.id, user);

  }

  return (
    <>
      <div className="container-fulid">
        <h1 className="text-center">Edit Student Deatils Form</h1>
      </div>
      <form>
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
            <input type="text" onChange={handleEvent} class="form-control"
              name="dob"
              value={user.dob}
              id="exampleFormControlInput1" />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Course</label>
            <select className="form-control" onChange={handleEvent} name="course"
              value={user.course}>
              <option value="cse">CSE</option>
              <option value="mech">MECH</option>
              <option>IT</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Address</label>
            <textarea class="form-control" onChange={handleEvent} id="exampleFormControlTextarea1"
              name="address"
              value={user.address}
              rows="2"></textarea>
          </div>

          <button className="btn btn-success me-5" onClick={submitValue}>Update User</button>


          <button className="btn btn-warning" onClick={() => { props.setEditing(false) }}>Cancel</button>
        </div>
      </form>

    </>
  )

}