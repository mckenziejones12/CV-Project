export const PersonalInfoForm = ({
  name,
  email,
  phoneNum,
  onChangeName,
  onChangeEmail,
  onChangePhoneNum,
}) => {
  return (
    <div className="personalInfo inputSection">
      <h2 className="inputSectionHeading">Personal Information</h2>
      <label htmlFor={name}>Full Name: </label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => onChangeName(e.target.value)}
      />
      <br />
      <label htmlFor={email}>Email: </label>
      <input
        type="text"
        id="email"
        name="email"
        value={email}
        onChange={(e) => onChangeEmail(e.target.value)}
      />
      <br />
      <label htmlFor={phoneNum}>Phone Number: </label>
      <input
        type="tel"
        id="phoneNum"
        name="phoneNum"
        value={phoneNum}
        onChange={(e) => onChangePhoneNum(e.target.value)}
      />
    </div>
  );
};
