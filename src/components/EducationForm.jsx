import { SubmitButton } from "./Button";

export const EducationForm = ({
  school,
  major,
  startDate,
  endDate,
  onChangeSchool,
  onChangeMajor,
  onChangeStartDate,
  onChangeEndDate,
}) => {
  return (
    <div className="education inputSection">
      <h2 className="inputSectionHeading">Education</h2>
      <label htmlFor={school}>School / Place of Study: </label>
      <input
        type="text"
        id="school"
        name="school"
        value={school}
        onChange={(e) => onChangeSchool(e.target.value)}
      />
      <br />
      <label htmlFor={major}>Major / Field of Study: </label>
      <input
        type="text"
        id="major"
        name="major"
        value={major}
        onChange={(e) => onChangeMajor(e.target.value)}
      />
      <br />
      <label htmlFor={startDate}>Start Date: </label>
      <input
        type="date"
        id="startDate"
        name="startDate"
        value={startDate}
        onChange={(e) => onChangeStartDate(e.target.value)}
      />
      <br />
      <label htmlFor={endDate}>End Date: </label>
      <input
        type="date"
        id="endDate"
        name="endDate"
        value={endDate}
        onChange={(e) => onChangeEndDate(e.target.value)}
      />
      <br />
      <SubmitButton></SubmitButton>
    </div>
  );
};
