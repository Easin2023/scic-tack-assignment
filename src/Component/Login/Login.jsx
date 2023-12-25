import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../ContextApi/ContextApi";
import Swal from "sweetalert2";

const Login = () => {

  const {login} = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value
    const password = form.password.value;
    console.log(email, password)

    login(email, password)
    .then(result => {
      console.log(result.user)
      if(result.user){
        Swal.fire({
          title: "success!",
          text: "You login his been success!",
          icon: "success"
        });
      }
    })

  }

  return (
    <div>
     <Navbar/>
      <div className="flex justify-center">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 mt-48 bg-gray-900 text-gray-100 mb-32">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign in</h1>
            <p className="text-sm dark:text-gray-400">
              Sign in to access your account
            </p>
          </div>
          <form onSubmit={handleLogin} action="" className="space-y-12">
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm">Email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm">Password</label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="submit"
                  className="w-full btn px-8 py-3 font-semibold rounded-md bg-rose-400 text-gray-900"
                >
                  Login
                </button>
              </div>
              <p className="px-6 text-sm text-center dark:text-gray-400">
                Don't have an account yet?
                <Link
                to="/signUp"
                  className="hover:underline dark:text-rose-400"
                >
                  Sign up
                </Link>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;
