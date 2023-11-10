import { useState } from "react";
import { PersonalInfoForm } from "./components/PersonalInfoForm";
import { EducationForm } from "./components/EducationForm";
import { ExperienceForm } from "./components/ExperienceForm";
import "./styles/App.css";
import "./styles/resume.css";
import "./styles/button.css";

function App() {
  const [name, setName] = useState("McKenzie  Jones");
  const [email, setEmail] = useState("test@gmail.com");
  const [phoneNum, setPhoneNum] = useState("843-437-6118");
  const [school, setSchool] = useState("Midlands Tech");
  const [major, setMajor] = useState("Dental Hygiene");
  const [educationStartDate, setEducationStartDate] = useState("Aug 2019");
  const [educationEndDate, setEducationEndDate] = useState("May 2020");
  const [job, setJob] = useState("Bighorn Family Dental");
  const [positionTitle, setPositionTitle] = useState(
    "Registered Dental Hygienist"
  );
  const [experienceStartDate, setExperienceStartDate] = useState("April 2023");
  const [experienceEndDate, setExperienceEndDate] = useState("Present");

  const handleNameChange = (newName) => {
    setName(newName);
  };

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

  const handlePhoneNumChange = (newPhoneNum) => {
    setPhoneNum(newPhoneNum);
  };
  const handleSchoolChange = (newSchool) => {
    setSchool(newSchool);
  };
  const handleMajorChange = (newMajor) => {
    setMajor(newMajor);
  };
  const handleEducationStartDateChange = (newEducationStartDate) => {
    setEducationStartDate(newEducationStartDate);
  };
  const handleEducationEndDateChange = (newEducationEndDate) => {
    setEducationEndDate(newEducationEndDate);
  };
  const handleJobChange = (newJob) => {
    setJob(newJob);
  };
  const handlePositionTitleChange = (newPositionTitle) => {
    setPositionTitle(newPositionTitle);
  };
  const handleExperienceStartDateChange = (newExperienceStartDate) => {
    setExperienceStartDate(newExperienceStartDate);
  };
  const handleExperienceEndDateChange = (newExperienceEndDate) => {
    setExperienceEndDate(newExperienceEndDate);
  };

  return (
    <div id="cvContainer">
      <div id="inputContainer">
        <PersonalInfoForm
          name={name}
          email={email}
          phoneNum={phoneNum}
          onChangeName={handleNameChange}
          onChangeEmail={handleEmailChange}
          onChangePhoneNum={handlePhoneNumChange}
        />
        <EducationForm
          school={school}
          major={major}
          educationStartDate={educationStartDate}
          educationEndDate={educationEndDate}
          onChangeSchool={handleSchoolChange}
          onChangeMajor={handleMajorChange}
          onChangeEducationStartDate={handleEducationStartDateChange}
          onChangeEducationEndDate={handleEducationEndDateChange}
        />
        <ExperienceForm
          job={job}
          positionTitle={positionTitle}
          experienceStartDate={experienceStartDate}
          experienceEndDate={experienceEndDate}
          onChangeJob={handleJobChange}
          onChangePositionTitle={handlePositionTitleChange}
          onChangeExperienceStartDate={handleExperienceStartDateChange}
          onChangeExperienceEndDate={handleExperienceEndDateChange}
        />
      </div>
      <div id="resumeContainer">
        <div id="resumeHeader">
          <h1>{name}</h1>
          <div id="contactInfo">
            <p className="contactInfo">{email}</p>
            <p className="contactInfo">{phoneNum}</p>
          </div>
        </div>
        <div id="resumeBody">
          <div className="resumeSection">
            <h2 className="resumeSectionHeader">Education</h2>
            <div className="resumeSectionContent">
              <p className="resumeSectionPrimary">
                {educationStartDate} - {educationEndDate}
              </p>
              <div className="resumeSectionSecondary">
                <h3 className="school-workName">{school}</h3>
                <p className="major-positionName">{major}</p>
              </div>
            </div>
          </div>
          <div className="resumeSection">
            <h2 className="resumeSectionHeader">Experience</h2>
            <div className="resumeSectionContent">
              <p className="resumeSectionPrimary">
                {experienceStartDate} - {experienceEndDate}
              </p>
              <div className="resumeSectionSecondary">
                <h3 className="school-workName">{job}</h3>
                <p className="major-positionName">{positionTitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
