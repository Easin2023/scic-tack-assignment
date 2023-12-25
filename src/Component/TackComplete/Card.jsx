import Swal from "sweetalert2";
import useAxios from "../../useAxios/useAxios";

const Card = ({ data, reload }) => {
  const { _id, date, title, priority, Description, tack } = data || {};
  const axios = useAxios();

  const handleDelete = (e) => {
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
          axios.delete(`/delete/${_id}`).then((deleteData) => {
            console.log(deleteData.data);
            if (deleteData.data.deletedCount > 0) {
              Swal.fire({
                title: "delete confirm!",
                text: "You todo tack delete confirm!",
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

  return (
    <div>
      {tack === "complete" && (
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
                <button onClick={handleDelete} className="btn btn-sm btn-error">
                  delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
