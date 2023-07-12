import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Error from "./Error";

const Register = () => {
  const [err, setError] = useState(null);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const url = "http://localhost:4000/register";
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, data);
      console.log(response);
      navigate("/login");
    } catch (error) {
      setError(error.response.data?.msg || "something went wrong");
      console.log(error.response.data);
    }
  };

  return (
    <>
      {err ? (
        <Error error={err} setError={setError} text={"Registration Failed!"} />
      ) : (
        ""
      )}

      <div className="flex-col space-x-56  space-y-10">
        <h1></h1>
        <div className="space-x-72">
          <h1 className="font-semibold text-6xl ml-40">Register</h1>
        </div>
        <form className="flex-col space-y-5 border-2 p-32  text-2xl ">
          <div>
            <label htmlFor="firstName">FirstName:</label>
            <input
              type="text"
              placeholder="e.g:Jon"
              id="firstName"
              value={data.firstName}
              name="firstName"
              onChange={handleOnChange}
              className="border-black border-inherit cursor-grabbing"
            />
          </div>

          <div>
            <label htmlFor="lastName">LastName:</label>
            <input
              type="text"
              placeholder="e.g:Doe"
              id="lastName"
              value={data.lastName}
              name="lastName"
              onChange={handleOnChange}
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="e.g:JohnDoe@gmail.Com"
              id="email"
              value={data.email}
              name="email"
              onChange={handleOnChange}
            />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="******"
              id="password"
              value={data.password}
              name="password"
              onChange={handleOnChange}
            />
             <h1 className="italic text-sm text-black ml-28">Your password should have atleast 6 characters</h1>
          </div>
          <div className="space-x-10">
            <button
              type="submit"
              className="bg-red-200 rounded-full w-32 text-black"
              onClick={handleSubmit}
            >
              Submit
            </button>

            <span>
              already user?
              <button
                className="bg-blue-400 ml-2 rounded-full w-32 text-black"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
            </span>
          </div>
        </form>

        <div></div>
      </div>
    </>
  );
};

export default Register;
