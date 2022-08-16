import Topbar from './componets/Topbar';
import './App.css'
import PersonalInfo from './componets/PersonalInfo';
import AcademicQual from './componets/AcademicQual';
import ProfTeachExp from './componets/ProfTeachExp';
import ResearchExp from './componets/ResearchExp';
import Others from './componets/Others';
import { PaytmButton } from './Paytm/paytmButton';
import Documentup from './componets/Documentup';
import './AppInfo'; 
function App() {
  return (
    <>
    <div>
      <Topbar/>
    </div>
    <section>
    <div className="container">
    <div className="card">
        <div className="form">
            <div className="left-side">
                <div className="left-heading">
                    <h3>indeed</h3>
                </div>
                <div className="steps-content">
                    <h3>Step <span className="step-number">1</span></h3>
                    <p className="step-number-content active">Enter your personal information to get closer to MBU.</p>
                    <p className="step-number-content d-none">Get to know better by adding your diploma,certificate and education life.</p>
                    <p className="step-number-content d-none">Help companies get to know you better by telling then about your past experiences.</p>
                    <p className="step-number-content d-none">Add your profile picture and let companies find youy fast.</p>
                    <p className="step-number-content d-none">Add your profile picture and let companies find youy fast.</p>
                    <p className='step-number-content d-none'>Add your Documents here for more information</p>
                </div>
                <ul className="progress-bar">
                    <li className="active">Personal Information</li>
                    <li>Academic Qualification</li>
                    <li>Professional/Teaching Experience</li>
                    <li>Research Experience:</li>
                    <li>Others</li>
                    <li>Document Upload</li>
                </ul>
            </div>
            <div className="right-side">
                <PersonalInfo/>
                <AcademicQual/>
                <ProfTeachExp/>
                <ResearchExp/>
                <Others/>
                <Documentup/> 
                
                 <div className="main">
                     <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                         <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                        <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                    </svg>
                     
                    <div className="text congrats">
                        <h2>Congratulations!</h2>
                        <p>Thanks Mr./Mrs. <span className="shown_name"></span> your information have been submitted successfully for the future reference we will contact you soon.</p>

                    </div>
                    <div className='buttons button_space'>
                            <PaytmButton/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
</>
  );
}

export default App;
