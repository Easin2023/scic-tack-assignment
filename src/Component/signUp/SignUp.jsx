import React, { useContext } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../ContextApi/ContextApi";
import Swal from "sweetalert2";

const SignUp = () => {
  const { signUp, updateUserProfile, Google } = useContext(AuthContext);
  const goTo = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const url = form.url.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password, url);

    try {
      signUp(email, password)
        .then((result) => {
          if (result.user) {
            updateUserProfile(name, url);
            Swal.fire({
              title: "success!",
              text: "You login his been success!",
              icon: "success",
            });
            goTo("/")
          }
        })
        .catch();
    } catch (err) {
      console.log(err);
    }
  };
  const hndleLoginGoogle = () => {
    Google()
      .then((res) => {
        if (res.user) {
          Swal.fire({
            title: "success!",
            text: "You login his been success!",
            icon: "success",
          });
          goTo("/")
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div className=" mb-20">
          <div className="flex flex-col max-w-lg mx-auto p-6 rounded-md sm:p-10 mt-48 bg-gray-900 text-gray-100">
            <div className="mb-8 text-center">
              <h1 className="my-3 text-4xl font-bold">Sign in</h1>
              <p className="text-sm text-gray-400">
                Sign in to access your account
              </p>
            </div>
            <form onSubmit={handleSignUp} action="" className="space-y-12">
              <div className="space-y-4">
                <div>
                  <label className="block mb-2 text-sm">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Name"
                    className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm">Your Photo</label>
                  <input
                    type="url"
                    name="url"
                    required
                    placeholder="photo url"
                    className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
                  />
                </div>
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
                    className="w-full px-8 py-3 font-semibold rounded-md bg-rose-400 text-gray-900"
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </form>
            <div className="divider divider-neutral">OR</div>
            <div className="w-10 mx-auto">
              <button
                onClick={hndleLoginGoogle}
                className="p-3 rounded-full btn flex justify-center items-center "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-400">
              Don't have an account yet?
              <Link to="/login" className="hover:underline text-rose-400">
                Login
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default SignUp;
