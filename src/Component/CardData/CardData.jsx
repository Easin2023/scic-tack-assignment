import Swal from "sweetalert2";
import useAxios from "../../useAxios/useAxios";

const CardData = ({ data, reload }) => {
  const { _id, date, title, priority, Description, tack } = data || {};
  const axios = useAxios();

  const handleUpdate = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios.put(`/tackUpdate/${_id}`).then((putData) => {
            console.log(putData.data);
            if (putData.data.message) {
              Swal.fire({
                title: "confirm!",
                text: "You todo tack confirm!",
                icon: "success",
              });
              reload();
            }
            // Add any additional logic or feedback here (e.g., displaying a success message)
          });
        } catch (err) {
          console.log(err);
          // Handle error (e.g., display an error message to the user)
        }
      }
    });
  };
  if (!tack === "pending") {
    return (
      <div>
        <img
          src="https://i.ibb.co/TYWzDzk/PDKD3y-XR9-N-tbf1-Amf-M.gif"
          alt=""
        />
      </div>
    );
  }

  return (
    <div>
      {tack === "pending" && (
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
                  ongoing
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardData;
