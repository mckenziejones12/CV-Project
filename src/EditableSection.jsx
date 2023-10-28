/*
    field
    - id
    - title
    - value

    An EditableSection component has zero or more fields
*/

export const EditableSection = ({ heading, fields }) => {
  // js portion
  console.log(Object.keys(fields));

  // template portion
  return (
    <>
      <h1>{heading}</h1>
      <div
        style={{
          padding: "20px",
          border: "1px solid black",
          borderRadius: "3px",
        }}
      >
        {/* ['name', 'email', 'phoneNum'] */}
        {Object.keys(fields).map((title) => {
          return (
            <div key={title}>
              <br />
              <label htmlFor={title}>{title}</label>
              <input type="text" value={fields[title]} onChange={() => {}} />
            </div>
          );
        })}
      </div>
    </>
  );
};
