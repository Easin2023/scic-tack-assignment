import React, { useContext } from "react";
import { AuthContext } from "../../ContextApi/ContextApi";
import { Link } from "react-router-dom";

const Banner = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div
        className="hero min-h-96"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-3xl">
            {user && (
              <h1 className="text-5xl font-bold mb-2">👋{user.displayName}</h1>
            )}
            <h1 className="mb-5 text-5xl font-bold uppercase">
              WELCOME TO TASK<span className="text-blue-300">Harbor</span>
            </h1>
            <p className="mb-5 text-xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to={user ? "/dashboard" : "/login"}>
              <button className="btn btn-primary text-xl">Let’s Explore</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
