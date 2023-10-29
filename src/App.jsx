import { useState } from "react";
import { PersonalInfoForm } from "./components/PersonalInfoForm";

function App() {
  const [name, setName] = useState("McKenzie");
  const [email, setEmail] = useState("test@gmail.com");
  const [phoneNum, setPhoneNum] = useState("555-555-5555");

  const handleNameChange = (newName) => {
    setName(newName);
  };

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

  const handlePhoneNumChange = (newPhoneNum) => {
    setPhoneNum(newPhoneNum);
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
      <p> Updated value: {name}</p>
      <p>Updated value: {email}</p>
    </div>
  );
}

export default App;
