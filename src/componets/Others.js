import React,{useState} from "react";
import './form.css';
import '../App.css';
import axios from "axios";
// import '../AppInfo';
function Others(){
  const [formValues, setFormValues] = useState({})
  let handleChange = (eve) => {
        const name=eve.target.name;
        const value=eve.target.value;
        setFormValues(values=>({...values,[name]:value}));
  }
  let TextFile = (eve) => {
    const value=eve.target.value;
    const file = new Blob(...value, {type: 'text/plain'});
  }
  const handleSave=(eve)=>{
    eve.preventDefault();
    axios.post("http://localhost/api/user/save",formValues);
    console.log(formValues);
}
    return(
        <>
        <div className="main">
                    <small><i className="fa fa-smile-o"></i></small>
                    <div className="text">
                        <h2>Others</h2>
                        <p>Share some more information about yourself.</p>
                    </div>
                    <><div className="text">
                        <p>Whether the applicant has published articles/research papers/books? If so, enclose Xerox copies of them with the application.</p>
                      </div><div className='input-text'>
                          <div className='input-div'>
                            <input type={"text"} id="myInput" name="papers" onChange={handleChange} required require />
                            <span>If Yes Fill it Else please fill:NA</span>
                          </div>
                        </div><div className='text'>
                          <p>Awards, Medals, Prizes and Honours achieved by the applicant.</p>
                        </div><div className='input-text'>
                          <div className='input-div'>
                            <input type={"text"} name="awards" onChange={handleChange} required require />
                            <span>If Yes Fill it</span>
                          </div>
                        </div><div className='text'>
                          <p>Any other particulars the applicant would like to present for the consideration of the authorities with regard to admission.</p>
                        </div><div className='input-text'>
                          <div className='input-div'>
                            <input type={"text"} name="appli"  onChange={ handleChange} required require />
                            <span>If Yes Fill it</span>
                          </div>
                        </div><div className='text'>
                          <p>Whether the applicant has previously registered for Ph.D./ M.Phil. course etc., If so, give details</p>
                        </div><div className='input-text'>
                          <div className='input-div'>
                            <input type={"text"} name="others" onChange={ handleChange} required require />
                            <span>If Yes Fill it</span>
                          </div>
                        </div><div className='text'>
                          <p>Broad Theme/Title of the proposed Research Topic (In block letters)</p>
                        </div><div className='input-text'>
                          <div className='input-div'>
                            <input type={"text"} name="theme"  onChange={handleChange} required require />
                            <span>If Yes Fill it</span>
                          </div>
                        </div></>
                    <div className='text'>
                      <p>I declare that I will abide by the rules and regulations of Ph.D</p>
                    </div>
                    <div className='input-text'>
                      <div className='input-div'>
                        <input type={"text"} required require/>
                        <span>Signature</span>
                      </div>
                      <div className='input-div'>
                        <input type={"date"} required require/>
                        <span>Date</span>
                      </div>
                    </div>
                    
                    <div className="buttons button_space">
                        <button className="back_button">Back</button>
                        <button class="next_button" onClick={(eve)=>handleSave(eve)}>Next Page</button>
                        
                    </div>
                </div>
                
        </>
    )
} 
export default Others;