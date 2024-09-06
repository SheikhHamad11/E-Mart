import {createContext, useState} from 'react';

const LikeContext = createContext();

const LikeProvider = ({children}) => {
  const [liked, setLiked] = useState([]);

  return (
    <LikeContext.Provider value={{liked, setLiked}}>
      {children}
    </LikeContext.Provider>
  );
};

export {LikeContext, LikeProvider};
