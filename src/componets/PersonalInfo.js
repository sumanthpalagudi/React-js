import React,{useState} from "react";
import './form.css'
import '../App.css'
import axios from "axios";
// import '../AppInfo';
function PersonalInfo(){
    const [formValues, setFormValues] = useState({})
    const handleChange = (eve) => {
        const name=eve.target.name;
        const value=eve.target.value;
        setFormValues(values=>({...values,[name]:value}));
    }
    const handleSave=(eve)=>{
            eve.preventDefault();
            axios.post("http://localhost/api/user/save",formValues);
            console.log(formValues);
    }
    return(
        <>
          <div className="main active">
                    <small><i className="fa fa-smile-o"></i></small>
                    <div className="text">
                        <h2>Your Personal Information</h2>
                        <p>Enter your personal information to get closer to MBU.</p>
                    </div>
          
                    <><div className="input-text">
                            <div className="input-div">
                                <input type="text" name="StudentName"  onChangeCapture={ handleChange} required id="user_name" />
                                <span>Name of the Applicant</span>
                            </div>
                            <div className="input-div">
                                <input type="text" name="FatherName" onChange={ handleChange} required />
                                <span>Name of the Father</span>
                            </div>
                        </div><div className="input-text">
                                <div className="input-div">
                                    <input type="text" name="Mother"  onChange={handleChange} required />
                                    <span>Name of the Mother</span>
                                </div>
                                <div className="input-div">
                                    <select name="sex" onChange={handleChange}>
                                        <option value="sex">Sex</option>
                                        <option value={"Male"}>Male</option>
                                        <option value={"Female"}>Female</option>
                                    </select>

                                </div>
                            </div><div className="input-text">

                                <div className="input-div">
                                    <input type={"date"} name="DOB"  onChange={handleChange} required />
                                    <span>Date of Birth</span>
                                </div>
                                <div className='input-div'>
                                    <input type={"text"} name="Age"  onChange={handleChange} required />
                                    <span>Age</span>
                                </div>
                                <div className="input-div">
                                    <select name="Religion"  onChange={handleChange}>
                                        <option>Select  Religion</option>
                                        <option value={"Hindu"}>Hindu</option>
                                        <option value={"Muslim"}>Muslim</option>
                                        <option value={"Christian"}>Christian</option>
                                        <option value={"Others"}>Others</option>
                                    </select>
                                </div>
                            </div><div className='input-text'>
                                <div className='input-div'>
                                    <input type={'text'} name="Add" onChange={ handleChange} required />
                                    <span>Address </span>
                                </div>
                                <div className='input-div'>
                                    <input type={"text"} name="Phone" onChange={ handleChange} required />
                                    <span>Mobile/Phone</span>
                                </div>
                                <div className='input-div'>
                                    <input type={"email"} name="Email"  onChange={ handleChange} required />
                                    <span>E-mail</span>
                                </div>
                            </div></>
                    <div className="buttons">
                        <button className="next_button" onClick={(eve)=>handleSave(eve)}>Next Step</button>
                    </div>
                </div>
        </>
    )
}
export default PersonalInfo;