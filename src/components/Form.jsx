import React, {useState} from 'react';

const Form = props =>{
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [cp, setCp] = useState("");

    const [formInput, setFormInput]= useState({});

    const onChangeHandler = (e) => {
        e.preventDefault();
        setFormInput({
            fName: fname,
            lName: lname,
            Email: email,
            Pw: pw,
            Cp: cp
        })
    }

    const fnValid = (fn) => {
        if(fn.length <= 2 && fn.length !== 0){
            return true;
        }
        return false;
    }
    const lnValid = (ln) => {
        if(ln.length <= 2 && ln.length !== 0){
            return true;
        }
        return false;
    }
    const emailValid = (email) => {
        if(email !== 0){
            return true;
        }
        return false;
    }
    const pwValid = (pw) => {
        if(pw.length <= 8 && pw.length !== 0){
            return true;
        }
        return false;
    }
    const cpValid = (cp) => {
        if(cp !== {pw} && cp === 0){
            return true;
        }
        return false;
    }

    return (
        <>
            <form className= "col-sm-4" onChange={ onChangeHandler }>
                <div className="form-group">
                    <label htmlFor="fname">First Name </label>
                    <input type="text" className="form-control" onChange={(e) => setFname(e.target.value)}/>
                    {fnValid(fname) ? <p class=" alert alert-danger">First Name must be at least 2 characters</p> : ""}
                </div>
                <div className="form-group">
                    <label htmlFor="lname">Last Name </label>
                    <input type="text" className="form-control" onChange={(e) => setLname(e.target.value)}/>
                    {lnValid(lname) ? <p class=" alert alert-danger">Last Name must be at least 2 characters</p> : ""}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email </label>
                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)}/>
                    {emailValid(email) ? <p class=" alert alert-danger">Email cannot be empty</p> : ""}
                </div>
                <div className="form-group">
                    <label htmlFor="pw">Password </label>
                    <input type="password" className="form-control" onChange={(e) => setPw(e.target.value)}/>
                    {pwValid(pw) ? <p class=" alert alert-danger">Password must be at least 8 characters</p> : ""}
                </div>
                <div className="form-group">
                    <label htmlFor="cp">Confirm Password</label>
                    <input type="password" className="form-control" onChange={(e) => setCp(e.target.value)}/>
                    {cpValid(cp) ? <p class=" alert alert-danger">Passwords do not match</p> : ""}
                </div>
                <input type="submit" value="submit" className="btn btn-primary"/>
            </form>
            <br/>
            <h3>Your form data</h3>
            <h4>First Name: {formInput.fName}</h4>
            <h4>Last Name: {formInput.lName}</h4>
            <h4>Email: {formInput.Email}</h4>
            <h4>Password: {formInput.Pw}</h4>
            <h4>Confirm Password: {formInput.Cp}</h4>
        </>
    );
}
export default Form;