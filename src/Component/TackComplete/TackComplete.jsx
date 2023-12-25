import { useContext } from "react";
import { AuthContext } from "../../ContextApi/ContextApi";
import useAxios from "../../useAxios/useAxios";
import { useQuery } from "@tanstack/react-query";
import Card from "./Card";

const TackComplete = () => {
  const { user } = useContext(AuthContext);
  const axios = useAxios();

  const { data, isLoading, refetch } = useQuery({
    queryKey: [user],
    queryFn: () => {
      return axios.get(`/tackData/${user.email}`).then((data) => data.data);
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  console.log(data);

  return <div>
     {
          data?.map(da => <Card reload={refetch} key={da._id} data={da}></Card>)
     }
  </div>;
};

export default TackComplete;
