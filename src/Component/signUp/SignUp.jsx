import React, { useContext } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../ContextApi/ContextApi";
import Swal from "sweetalert2";

const SignUp = () => {
  const { signUp,updateUserProfile } = useContext(AuthContext);

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
          if(result.user){
            updateUserProfile(name, url)
            Swal.fire({
              title: "success!",
              text: "You login his been success!",
              icon: "success"
            });
          }
        })
        .catch();
    } catch (err) {
      console.log(err);
    }
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
                <p className="px-6 text-sm text-center text-gray-400">
                  Don't have an account yet?
                  <Link to="/login" className="hover:underline text-rose-400">
                    Login
                  </Link>
                  .
                </p>
              </div>
            </form>
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
