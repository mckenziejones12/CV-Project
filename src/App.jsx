import { personalInfo, experience, education } from "./mockData";
import { EditableSection } from "./EditableSection";

function App() {
  return (
    <div id="cvContainer">
      <div className="header">
        <EditableSection heading="Personal Information" fields={personalInfo} />
      </div>
      <div>
        <EditableSection heading="Experience" fields={experience} />
      </div>
      <div>
        <EditableSection heading="Education" fields={education} />
      </div>
    </div>
  );
}

export default App;
