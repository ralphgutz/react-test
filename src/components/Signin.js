import React, {useState} from "react"
import "../index.css"

const Signin = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [gender, setGender] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleClear = () => {
      setFirstName("")
      setLastName("")
      setGender("")
      setEmail("")
      setPassword("")
    }

    const handleSubmit = () => {
      alert(`${firstName}  ${lastName}  ${gender}  ${email}  ${password}`)
      handleClear()
    }

    const validate = (e) => {
      e.preventDefault()
      if(password.length <= 6) 
        alert("Password must be six characters or more.")
      else 
        handleSubmit()
    }

    return (
            <div className="card">
                <form onSubmit={validate}>
                    <div className="form-group">
                        <h1>Sign in</h1>
                        <br />
                        <label>First Name:</label>
                        <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" className="form-control" required></input>
                        <br />

                        <label>Last Name:</label>
                        <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name" className="form-control" required></input>
                        <br />
                        <p>Gender:</p>
                        <label style={{marginRight: "20px"}}>
                            <input type="radio" checked={gender === "Male"} value="Male" onChange={() => setGender("Male")} name="gender"></input>Male
                        </label>
                        <label>
                            <input type="radio" checked={gender === "Female"} value="Female" onChange={() => setGender("Female")} name="gender"></input>Female
                        </label>
                        <br />
                        
                        <br />
                        <label>Email:</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="form-control" required></input>
                        <br />

                        <label>Password:</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="form-control" required></input>
                        <small className="small" style={{color: "#444"}}>Password must be six characters or more.</small>
                        <br /><br />

                        <button className="btn btn-primary">Login</button>
                        <button className="btn btn-link" onClick={handleClear}>Clear</button>
                    </div>
                </form> 
                <h1>{firstName}</h1>
                <h1>{lastName}</h1>
            </div>
    )
}

export default Signin