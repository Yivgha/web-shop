import React from 'react';
import { fs } from '../../config';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const ChildrenList = ({path}) => {
    const query = fs.collection(path);
      const [docs, loading, error] = useCollectionData(query);
  return (
      <ul>
          {loading && <p>Loading...</p>}
          {error && <p>{error.message}</p>}
          {docs?.map((doc) => <li key={Math.random()}>{doc.name}</li>)}
    </ul>
  )
}


export default ChildrenList;