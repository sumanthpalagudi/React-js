import React,{useState} from "react";
import './form.css';
import '../App.css';
import axios from "axios";
// import '../AppInfo';
function AcademicQual(){
  const [formValues, setFormValues] = useState({})
  const [formValues1, setFormValues1] = useState({})
  const [formValues2, setFormValues2] = useState({})
  const [formValues3, setFormValues3] = useState({})
  const [formValues4, setFormValues4] = useState({})
  const handleChange = (e) => {
      const name=e.target.name;
      const value=e.target.value;
      setFormValues(values=>({...values,[name]:value}))
  }
  const handleChange1 = (e) => {
    const name=e.target.name;
      const value=e.target.value;
      setFormValues1(values=>({...values,[name]:value}))
  }
  const handleChange2 = (e) => {
    const name=e.target.name;
      const value=e.target.value;
      setFormValues2(values=>({...values,[name]:value}))
  }
  const handleChange3 = (e) => {
    const name=e.target.name;
      const value=e.target.value;
      setFormValues3(values=>({...values,[name]:value}))
  }
  const handleChange4 = ( e) => {
    const name=e.target.name;
      const value=e.target.value;
      setFormValues4(values=>({...values,[name]:value}))
  }
  const finalFrom={formValues,formValues1,formValues2,formValues3,formValues4}
  const handleSave=(eve)=>{
    eve.preventDefault();
    axios.post("http://localhost/api/user/save",finalFrom);
    console.log(finalFrom);
  }

    return(
        <>
            <div className="main">
                    <small><i className="fa fa-smile-o"></i></small>
                    <div className="text">
                        <h2>Academic Qualification</h2>
                        <p>Inform University about your education life.</p>
                    </div>
                    <h3>10th std.</h3>
                    
                    <><div className="input-text">
                        <div className="input-div">
                          <input type="text" name="Sname" onChange={handleChange} required require />
                          <span>School Name/College Name</span>
                        </div>
                        <div className="input-div">
                          <input type="text" name="Board" onChange={ handleChange} required />
                          <span>Board/University</span>
                        </div>
                      </div><div className="input-text">
                          <div className="input-div">
                            <input type="text" name="Univ" onChange={handleChange} required require />
                            <span>College/University name</span>
                          </div>
                        </div><div className='input-text'>
                          <div className='input-div'>
                            <input type={"month"} name="myp" onChange={handleChange} required require />
                            <span>Month/Year</span>
                          </div>
                          <div className='input-div'>
                            <input type={"text"} name="spec" onChange={ handleChange} required require />
                            <span>Subject</span>
                          </div>
                        </div><div className='input-text'>
                          <div className='input-div'>
                            <input type={"text"} name="perc" onChange={handleChange} required require />
                            <span>Percentage of Marks</span>
                          </div>
                          <div className='input-div'>
                            <input type={"text"} name="rank" onChange={handleChange} required require />
                            <span>Class/Rank</span>
                          </div>
                        </div></>
                    <h3>P.U.C. / +2</h3>
        
                    <><div className="input-text">
                        <div className="input-div">
                          <input type="text" name="Sname"  onChange={handleChange1} required require />
                          <span>School Name/College Name</span>
                        </div>
                        <div className="input-div">
                          <input type="text" name="Board" onChange={ handleChange1} required />
                          <span>Board/University</span>
                        </div>
                      </div><div className="input-text">
                          <div className="input-div">
                            <input type="text" name="Univ" onChange={handleChange1} required require />
                            <span>College/University name</span>
                          </div>
                        </div><div className='input-text'>
                          <div className='input-div'>
                            <input type={"month"} name="myp" onChange={handleChange1} required require />
                            <span>Month</span>
                          </div>
                          <div className='input-div'>
                            <input type={"text"} name="spec" onChange={handleChange1} required require />
                            <span>Subject</span>
                          </div>
                        </div><div className='input-text'>
                          <div className='input-div'>
                            <input type={"text"} name="perc" onChange={ handleChange1} required require />
                            <span>Percentage of Marks</span>
                          </div>
                          <div className='input-div'>
                            <input type={"text"} name="rank" onChange={handleChange1} required require />
                            <span>Class/Rank</span>
                          </div>
                        </div></>
                 
                    <h3>Bachelor’s Degree</h3>
                  
                    <><div className="input-text">
                        <div className="input-div">
                          <input type="text" name="Sname" onChange={handleChange2} required require />
                          <span>School Name/College Name</span>
                        </div>
                        <div className="input-div">
                          <input type="text" name="Board" onChange={handleChange2} required />
                          <span>Board/University</span>
                        </div>
                      </div><div className="input-text">
                          <div className="input-div">
                            <input type="text" name="Univ" onChange={handleChange2} required require />
                            <span>College/University name</span>
                          </div>
                        </div><div className='input-text'>
                          <div className='input-div'>
                            <input type={"month"} name="myp" onChange={handleChange2} required require />
                            <span>Month</span>
                          </div>
                          <div className='input-div'>
                            <input type={"text"} name="spec" onChange={handleChange2} required require />
                            <span>Subject</span>
                          </div>
                        </div><div className='input-text'>
                          <div className='input-div'>
                            <input type={"text"} name="perc" onChange={handleChange2} required require />
                            <span>Percentage of Marks</span>
                          </div>
                          <div className='input-div'>
                            <input type={"text"} name="rank" onChange={handleChange2} required require />
                            <span>Class/Rank</span>
                          </div>
                        </div></>
                  
                    <h3>Master’s Degree</h3>
                    
                    <><div className="input-text">
                        <div className="input-div">
                          <input type="text" name="Sname"  onChange={handleChange3} required require />
                          <span>School Name/College Name</span>
                        </div>
                        <div className="input-div">
                          <input type="text" name="Board"  onChange={ handleChange3} required />
                          <span>Board/University</span>
                        </div>
                      </div><div className="input-text">
                          <div className="input-div">
                            <input type="text" name="Univ"  onChange={handleChange3} required require />
                            <span>College/University name</span>
                          </div>
                        </div><div className='input-text'>
                          <div className='input-div'>
                            <input type={"month"} name="myp"  onChange={handleChange3} required require />
                            <span>Month</span>
                          </div>
                          <div className='input-div'>
                            <input type={"text"} name="spec"  onChange={handleChange3} required require />
                            <span>Subject</span>
                          </div>
                        </div><div className='input-text'>
                          <div className='input-div'>
                            <input type={"text"} name="perc"  onChange={handleChange3} required require />
                            <span>Percentage of Marks</span>
                          </div>
                          <div className='input-div'>
                            <input type={"text"} name="rank"  onChange={handleChange3} required require />
                            <span>Class/Rank</span>
                          </div>
                        </div></>
                    
                    <h3>M'Phil Degree</h3>
                    
                    <><div className="input-text">
                        <div className="input-div">
                          <input type="text" name="Sname"  onChange={handleChange4} required require />
                          <span>School Name/College Name</span>
                        </div>
                        <div className="input-div">
                          <input type="text" name="Board" onChange={handleChange4} required />
                          <span>Board/University</span>
                        </div>
                      </div><div className="input-text">
                          <div className="input-div">
                            <input type="text" name="Univ" onChange={handleChange4} required require />
                            <span>College/University name</span>
                          </div>
                        </div><div className='input-text'>
                          <div className='input-div'>
                            <input type={"text"} name="myp"  onChange={handleChange4} required require />
                            <span>Month</span>
                          </div>

                          <div className='input-div'>
                            <input type={"text"} name="spec"  onChange={ handleChange4} required require />
                            <span>Subject</span>
                          </div>
                        </div><div className='input-text'>
                          <div className='input-div'>
                            <input type={"text"} name="perc"  onChange={ handleChange4} required require />
                            <span>Percentage of Marks</span>
                          </div>
                          <div className='input-div'>
                            <input type={"text"} name="rank"  onChange={handleChange4} required require />
                            <span>Class/Rank</span>
                          </div>
                        </div></>
                    
                    <div className="buttons button_space">
                        <button className="back_button">Back</button>
                        <button className="next_button" onClick={(eve)=>handleSave(eve)}>Next Step</button>
                    </div>
                </div>
        </>
    )
}
export default AcademicQual;