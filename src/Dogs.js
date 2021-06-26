import { gql, useQuery,useSubscription ,setQuery} from '@apollo/client';
import { makeVar } from '@apollo/client';
import { useEffect, useState } from 'react';

function Dogs() {


    const COMMENTS_SUBSCRIPTION = gql`

  subscription{
      nm
    }
  `;
 
  const GET_DOGS = gql`
 query  {
    currentNumber
  }
`;
// const  {data:{nm}, loading } =
let t = useSubscription(
    COMMENTS_SUBSCRIPTION
)
const { loading, error, data , refetch} = useQuery(GET_DOGS);
if(t.data?.nm ===undefined){
    refetch();
} 
// const [tr,settr] = useState(0);
// settr(data);
    return (
      <div>
          {t.data?.nm}
      <br/>
      <button onClick={()=>refetch()}>clickme</button>
      
      </div>
      
    );
  }
  export default Dogs;