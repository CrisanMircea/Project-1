export const Input = ({ name, type, value, handleChange, options = [] }) => {
  return (
    <div className="flex flex-col">
      <label className="text-lg text-white font-serif mb-3">{name}</label>

      {/* Check if the type is 'select' to render a dropdown */}
      {type === "select" ? (
        <select
          name={name}
          value={value}
          onChange={handleChange}
          className="rounded-md p-1"
        >
          {/* Map through options to render each option in the dropdown */}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          name={name}
          type={type}
          placeholder={name}
          className="rounded-md p-1"
          value={value}
          onChange={handleChange}
        />
      )}
    </div>
  );
};
