import useAxios from "../../useAxios/useAxios";

const CardData = ({ data }) => {
  const { _id, date, title, priority, Description, tack } = data || {};
  const axios = useAxios();

  const handleUpdate = () => {

      try {
        axios.put(`/tackUpdate/${_id}`).then((putData) => {
          console.log(putData.data);
          // Add any additional logic or feedback here (e.g., displaying a success message)
        });
      } catch (err) {
        console.log(err);
        // Handle error (e.g., display an error message to the user)
      }
  };

  return (
    <div>
      {tack === "pending" ? (
        <div className="bg-slate-200 mt-9 mr-6 rounded-2xl">
          <div className="p-10">
            <h1 className="text-2xl font-medium mb-4">{title}</h1>
            <p className="mb-6">{Description}</p>
            <div className="flex justify-between">
              <div>
                <p className="text-blue-400">Date: {date}</p>
                <p className="text-blue-400">Priority: {priority}</p>
              </div>
              <div>
                <button onClick={handleUpdate} className="btn btn-sm">
                  Complete
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>No data</h1>
        </div>
      )}
    </div>
  );
};

export default CardData;
