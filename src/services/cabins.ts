import { supabase } from "./supabase"

export const getCabins = async()=>{
  let { data: cabins, error } = await supabase
  .from('cabins')
  .select('*');
  if(error) throw new Error(`Couldn't get cabins data from supabase`);
  return cabins;
}