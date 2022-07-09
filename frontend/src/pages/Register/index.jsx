import React from "react"
import { useState } from "react"
import { Form, Label, FormGroup, Input, Button } from "reactstrap"
import request from '../../request'
import './style.css'

const RegisterPage =  ({refetch}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [pnumber, setPnumber] = useState('')

  const handleRegister = () =>{
    const form = { email, password, address, pnumber }
    
      request.post(`/register`, form)
      .then(() => refetch())
      .catch(err => alert(err))

  }

  return <>
  <div className="register_page">

    <Form className="form-container" onSubmit={handleRegister}>
          <>
          <FormGroup>
              <Label>Email</Label>
              <Input
                type="text"
                value={email}
                placeholder="please enter email"
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </FormGroup>

            <FormGroup>
              <Label>Password</Label>
              <Input
                type="text"
                value={password}
                placeholder="please enter password"
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </FormGroup>

            <FormGroup>
              <Label>Address</Label>
              <Input
                type="text"
                value={address}
                placeholder="please enter address"
                onChange={(e) => setAddress(e.target.value)}
                required
                />
            </FormGroup>

            <FormGroup>
              <Label>Phone Number</Label>
              <Input
                type="text"
                value={pnumber}
                placeholder="please enter phone number"
                onChange={(e) => setPnumber(e.target.value)}
                required
                />
            </FormGroup>

            <Button color="primary" type="submit"> Register</Button>

              </>
    </Form>
      </div>
  </>
}

export default RegisterPage