import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../services/cabins';

class Cabins{
  constructor(
    public id:number,
    public created_at:string,
    public name:string,
    public maxCapacity:number,
    public regularPrice:number,
    public discount:number,
    public description:string,
    public image:string,
  ){}
}

export const useGetCabins = ()=>{
  const {data, isLoading, isError, error} = useQuery({
    queryKey:['cabins'],
    queryFn: getCabins,
  });
  
  const [cabins, setCabins] = useState<Cabins[]>([new Cabins(0,'','',0,0,0,'','')]);

  useEffect(()=>{
    if(data) setCabins(data);
    else setCabins([]);
  },[data, setCabins]);

  return {cabins, isLoading, isError, error}
}