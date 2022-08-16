import React,{useState} from "react";
import './form.css'
import '../App.css'
import axios from "axios";
// import '../AppInfo';
function ProfTeachExp(){
    const [formValues, setFormValues] = useState([{ Designation: "", Institution : "",from:"",To:"",Years:""}])
    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }
        
    let addFormFields = () => {
        setFormValues([...formValues, { Designation: "", Institution: "",from:"",To:"",Years:"" }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    let handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost/api/user/save",formValues[0]);
        console.log(formValues[0]);
    }
    return(<>
      <div className="main ">
                    <small><i className="fa fa-smile-o"></i></small>
                    <div className="text">
                        <h2>Professional / Teaching Experience</h2>
                        <p>Can you talk about your past work experience?</p>
                    </div>
                    {formValues.map((element, index) => (
                     <> <h3>Experience{index+1}</h3>
                      <div className="input-text">
                        <div className="input-div">
                          <input type="text" name="Designation" value={element.Designation || ""} onChange={(e) => handleChange(index, e)} required />
                          <span>Designation</span>
                        </div>
                        <div className="input-div">
                          <input type="text" name="Institution" value={element.Institution || ""} onChange={(e) => handleChange(index, e)} required />
                          <span>Institution</span>
                        </div>
                        </div>
                        <h4>Duration: </h4>
                        <div className="input-text">
                          <div className="input-div">
                            <input type={"date"} name="from" value={element.from || ""} onChange={(e) => handleChange(index, e)} required />
                            <span>From</span>
                          </div>
                          <div className="input-div">
                            <input type={"date"} name="To" value={element.To || ""} onChange={(e) => handleChange(index, e)} required />
                            <span>To</span>
                          </div>
                          <div className="input-div">
                            <input type={"text"} name="Years" value={element.Years || ""} onChange={(e) => handleChange(index, e)} required />
                            <span>Years</span>
                          </div>
                        </div>
                        {
                index ? 
                <div className="buttons button_space"><button type="button"   onClick={() => removeFormFields(index)}>Remove</button> </div>
                  
                : null
                  }
                      </>
                    ))}
                    <div className="buttons button_space">
                      <button  onClick={() => addFormFields()}>ADD</button>
                    </div>
                    <div className="buttons button_space">
                        <button className="back_button">Back</button>
                        <button className="next_button" onClick={(eve)=>handleSubmit(eve)}>Next Step</button>
                    </div>
                </div>
                
    </>)
}
export default ProfTeachExp;