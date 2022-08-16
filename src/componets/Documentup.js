import React, { useState } from "react";
import '../App.css';
 function Documentup(){
    const [file,setFile]=useState('');
    function Service(){
        if(file==="full-time"){
            return(<>
                <div className='text'>
                      <p>Upload service certificate and No Objection Certificate from current employer,</p>
                    </div>
                    <div className='input-text'>
                      <div className='input-div'>
                        <input type={"file"} accept={'.pdf'} required require/>
                      </div>
               </div>
            </>)
        }
        else{
            return(<></>);
        }
    }
    return(<>
            <div className="main">
                    <small><i className="fa fa-smile-o"></i></small>
                    <div className="text">
                        <h2>Document Uploading</h2>
                        <p>Share documents to show yourself to us.</p>
                        <p>All tiles should be less than 4 MB</p>
                    </div>
                    <div className="input-text">
                        <div className="input-div">
                            <input type={"radio"} value="full-time" name="PART-TIME" onChange={()=>setFile("full-time")}/>
                            <span>FULL-TIME STUDENT</span>
                        </div>
                        <div className="input-div">
                            <input type={"radio"} value="part-time" name="PART-TIME" onChange={()=>setFile("part-time")}/>
                            <span>PART-TIME STUDENT</span>
                        </div>
                    </div>
                    <div className="text">
                      <p>Merge SSLC, HSC, UG, PG certificates as a single PDF and upload</p>
                    </div>
                    <div className='input-text'>
                      <div className='input-div'>
                        <input type={"file"} accept={'.pdf'} required require/>
                      </div>
                    </div>
                    <div className='text'>
                      <p>upload Research Plan including Abstract, Research Objectives, Literature Survey, Scope and Area of research, Timeline,</p>
                    </div>
                    <div className='input-text'>
                      <div className='input-div'>
                        <input type={"file"} accept={'.pdf'} required require/>
                      </div>
                    </div>
                    {Service()}
                    <div className="buttons button_space">
                        <button className="back_button">Back</button>
                        <button class="submit_button">Submit</button>
                    </div>
                </div>
    </>);
 }
 export default Documentup;