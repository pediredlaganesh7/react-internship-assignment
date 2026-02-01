import { useState } from "react"; 

export default function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    id: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validate = () => {
    let tempErrors = {};

    if (!formData.name.trim())
      tempErrors.name = "Name is required";

    if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Invalid email";

    if (!formData.password)
      tempErrors.password = "Password is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData(formData);
      setFormData({ name: "", email: "", id: "", password: "" });
    }
  };

  return (
    <div>
      <h2>User Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />
        <p style={{ color: "red" }}>{errors.name}</p>

        <input
          type="text"
          placeholder="Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
        <p style={{ color: "red" }}>{errors.email}</p>

        <input
          type="text"
          placeholder="ID"
          value={formData.id}
          onChange={(e) =>
            setFormData({ ...formData, id: e.target.value })
          }
        />

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <p style={{ color: "red" }}>{errors.password}</p>

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
        >
          Show/Hide Password
        </button>

        <br />
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h3>Submitted Data:</h3>
          <p>{JSON.stringify(submittedData)}</p>
        </div>
      )}
    </div>
  );
}
