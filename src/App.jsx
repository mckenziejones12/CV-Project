import { useState } from "react";
import { PersonalInfoForm } from "./components/PersonalInfoForm";
import { EducationForm } from "./components/EducationForm";
import { ExperienceForm } from "./components/ExperienceForm";

function App() {
  const [name, setName] = useState("McKenzie");
  const [email, setEmail] = useState("test@gmail.com");
  const [phoneNum, setPhoneNum] = useState("555-555-5555");
  const [school, setSchool] = useState("");
  const [major, setMajor] = useState("");
  const [educationStartDate, setEducationStartDate] = useState("");
  const [educationEndDate, setEducationEndDate] = useState("");
  const [job, setJob] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [experienceStartDate, setExperienceStartDate] = useState("");
  const [experienceEndDate, setExperienceEndDate] = useState("");

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
  const handleExperienceStartDateChange = (newEExperienceStartDate) => {
    setExperienceStartDate(newExperienceStartDate);
  };
  const handleExperienceEndDateChange = (newExperienceEndDate) => {
    setExperienceEndDate(newExperienceEndDate);
  };

  return (
    <div id="cvContainer">
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
  );
}

export default App;
