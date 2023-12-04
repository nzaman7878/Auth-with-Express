import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

// SignUp component definition
function SignUp() {
  // Hook to navigate between routes
  const navigate = useNavigate();

  // State to manage loading state
  const [loading, setLoading] = useState(false);

  // State to manage user data (name, email, password, confirmPassword)
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  // API URL
  const URL = process.env.REACT_APP_URL;

  // Function to handle sign-up submission
  async function handleSignUp(e) {
    e.preventDefault(); // Prevent the default behavior of an HTML form submission

    setLoading(true);
    try {
      // Making a POST request to the server for sign-up
      const response = await axios({
        method: "post",
        url: URL + "/api/auth/signup",
        withCredentials: true,
        data: userData
      });

      // If sign-up is successful, navigate to the sign-in page
      if (response.data.success) {
        navigate("/signin");
      }
      setLoading(false);
    } catch (error) {
      // If there is an error, show an alert with the error message
      alert(error.response.data.message);
      setLoading(false);
    }
  }

  // JSX for the SignUp component
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 m-4">
      <form className="space-y-6" onSubmit={(e) => handleSignUp(e)}>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          SignUp to our platform
        </h5>

        {/* Name input */}
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="user name"
            required
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
        </div>
        {/* Name input end */}

        {/* Email input */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name@company.com"
            required
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </div>
        {/* Email input end */}

        {/* Password input */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            minLength="8"
            placeholder="••••••••"
            required
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
        </div>
        {/* Password input end */}

        {/* Confirm Password input */}
        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            minLength="8"
            placeholder="••••••••"
            required
            value={userData.confirmPassword}
            onChange={(e) =>
              setUserData({ ...userData, confirmPassword: e.target.value })
            }
          />
        </div>
        {/* Confirm Password input end */}

        {/* SignUp button */}
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register new account
          {loading ? (
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-4 h-4 mr-3 text-white animate-spin ml-2"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
          ) : null}
        </button>
        {/* SignUp button end */}

        {/* Sign In link */}
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-blue-700 hover:underline dark:text-blue-500"
          >
            Sign In
          </Link>
        </div>
        {/* Sign In link end */}
      </form>
    </div>
  );
}

// Exporting the SignUp component
export default SignUp;
