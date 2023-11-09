import { SubmitButton } from "./Button";

export const ExperienceForm = ({
  job,
  positionTitle,
  startDate,
  endDate,
  onChangeJob,
  onChangePositionTitle,
  onChangeStartDate,
  onChangeEndDate,
}) => {
  return (
    <div className="experience inputSection">
      <h2 className="inputSectionHeading">Experience</h2>
      <label htmlFor={job}>Name of Workplace: </label>
      <input
        type="text"
        id="job"
        name="job"
        value={job}
        onChange={(e) => onChangeJob(e.target.value)}
      />
      <br />
      <label htmlFor={positionTitle}>Position Title: </label>
      <input
        type="text"
        id="positionTitle"
        name="positionTitle"
        value={positionTitle}
        onChange={(e) => onChangePositionTitle(e.target.value)}
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
