import "./FormStyles.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Name</label>
            <input type="text"></input>

            <label>Email</label>
            <input type="email"></input>

            <label>Subject</label>
            <input type="text"></input>

            <label>Message</label>
            <input type="text"></input>

            <textarea rows = "6" placeholder="type here"></textarea>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form