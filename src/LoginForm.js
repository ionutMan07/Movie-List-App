import './index.css';
import React, {useState} from 'react';

function LoginForm() {
  const [form, setValues] = useState({
    username: "",
    password: ""
  });
  const printValues = (e) => {
    e.preventDefault();
    console.log(form.username, form.password);
  };
  const updateValues = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
    <form onSubmit={printValues}>
      <label>
        UserName :
        <input
          value={form.username}
          name="username"
          type="text"
          onChange={updateValues}
        />
      </label>
      <br />
      <label>
        Password :
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={updateValues}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
    </div>
  );
}
export default LoginForm;
