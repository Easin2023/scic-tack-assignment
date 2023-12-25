import React, { useState } from "react";

const Add = () => {
  const [priority, setPriority] = useState("priority");

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Title:", e.target.title.value);
    console.log("Description:", e.target.message.value);
    console.log("Date:", e.target.email.value);
    console.log("Priority:", priority);

  };

  return (
    <div>
      <section className="p-6 text-gray-100">
        <form
          onSubmit={handleSubmit}
          className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-900"
        >
          <h2 className="w-full text-3xl font-bold leadi">Contact us</h2>
          <div>
            <label className="block mb-1 ml-1">Title</label>
            <input
              name="title"
              type="text"
              placeholder="Title"
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri bg-gray-800"
            />
          </div>
          <div>
            <label className="block mb-1 ml-1">Description</label>
            <textarea
              name="message"
              placeholder="Description....."
              className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ri focus:ri bg-gray-800"
            ></textarea>
          </div>
          <div>
            <label className="block mb-1 ml-1">Date</label>
            <input
              name="email"
              type="date"
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri bg-gray-800"
            />
          </div>
          <div>
            <label className="block mb-1 ml-1">Priority</label>
            <select
              name="priority"
              value={priority}
              onChange={handlePriorityChange}
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri bg-gray-800"
            >
              <option disabled value="priority">priority</option>
              <option value="high">High</option>
              <option value="moderate">Moderate</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="w-full btn px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ri bg-rose-400 focus:ri hover:ri text-gray-900"
            >
              Add Todo
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Add;
