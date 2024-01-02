import Swal from "sweetalert2";
import useAxios from "../../useAxios/useAxios";

const OngoingCard = ({ data, reload }) => {
  const { _id, date, title, priority, Description, tack } = data || {};
  const axios = useAxios();

  const HandleComplete = () => {
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
           axios.put(`/tackComplete/${_id}`).then((putData) => {
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

  return (
    <div>
      {tack === "ongoing" && (
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
                <button onClick={HandleComplete} className="btn btn-sm ">
                  complete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OngoingCard;
