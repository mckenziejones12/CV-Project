export const ExperienceForm = ({
  job,
  positionTitle,
  experienceStartDate,
  experienceEndDate,
  onChangeJob,
  onChangePositionTitle,
  onChangeExperienceStartDate,
  onChangeExperienceEndDate,
}) => {
  return (
    <div className="experience inputSection">
      <h2 className="inputSectionHeading">Experience</h2>
      <label htmlFor="job">Name of Workplace: </label>
      <input
        type="text"
        id="job"
        name="job"
        value={job}
        onChange={(e) => onChangeJob(e.target.value)}
      />
      <br />
      <label htmlFor="positionTitle">Position Title: </label>
      <input
        type="text"
        id="positionTitle"
        name="positionTitle"
        value={positionTitle}
        onChange={(e) => onChangePositionTitle(e.target.value)}
      />
      <br />
      <label htmlFor="experienceStartDate">Start Date: </label>
      <input
        type="text"
        id="experienceStartDate"
        name="experienceStartDate"
        value={experienceStartDate}
        onChange={(e) => onChangeExperienceStartDate(e.target.value)}
      />
      <br />
      <label htmlFor="experienceEndDate">End Date: </label>
      <input
        type="text"
        id="experienceEndDate"
        name="experienceEndDate"
        value={experienceEndDate}
        onChange={(e) => onChangeExperienceEndDate(e.target.value)}
      />
    </div>
  );
};
