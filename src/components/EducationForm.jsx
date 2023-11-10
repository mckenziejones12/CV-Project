export const EducationForm = ({
  school,
  major,
  educationStartDate,
  educationEndDate,
  onChangeSchool,
  onChangeMajor,
  onChangeEducationStartDate,
  onChangeEducationEndDate,
}) => {
  return (
    <div className="education inputSection">
      <h2 className="inputSectionHeading">Education</h2>
      <label htmlFor="school">School / Place of Study: </label>
      <input
        type="text"
        id="school"
        name="school"
        value={school}
        onChange={(e) => onChangeSchool(e.target.value)}
      />
      <br />
      <label htmlFor="major">Major / Field of Study: </label>
      <input
        type="text"
        id="major"
        name="major"
        value={major}
        onChange={(e) => onChangeMajor(e.target.value)}
      />
      <br />
      <label htmlFor="educationStartDate">Start Date: </label>
      <input
        type="text"
        id="educationStartDate"
        name="educationStartDate"
        value={educationStartDate}
        onChange={(e) => onChangeEducationStartDate(e.target.value)}
      />
      <br />
      <label htmlFor="educationEndDate">End Date: </label>
      <input
        type="text"
        id="educationEndDate"
        name="educationEndDate"
        value={educationEndDate}
        onChange={(e) => onChangeEducationEndDate(e.target.value)}
      />
    </div>
  );
};
