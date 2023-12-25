import React, { useContext } from 'react';
import { AuthContext } from '../../ContextApi/ContextApi';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../useAxios/useAxios';
import CardData from '../CardData/CardData';

const See = () => {
  const { user } = useContext(AuthContext);
  const axios = useAxios();

  const { data, isLoading, refetch } = useQuery({
    queryKey: [user],
    queryFn: () => {
      return axios.get(`/tackData/${user.email}`)
      .then((data) => data.data);
    },
  });

  if(isLoading){
     return <div className='flex justify-center items-center h-screen'>
          <span className="loading loading-dots loading-lg"></span>
     </div>
  }

  console.log(data)

  return (
    <div>
      {
          data?.map(da => <CardData reload={refetch} key={da._id} data={da}></CardData>)
      }
    </div>
  );
};

export default See;
