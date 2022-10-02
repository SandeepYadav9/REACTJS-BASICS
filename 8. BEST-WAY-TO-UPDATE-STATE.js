

import React,{useState} from "react";
const App = () => {
  const [enteredData, setEnteredData] = useState({
    enteredTitle: "",   
  });
  
   const onChangeTitleHandler = (e) => {
    setEnteredData((privData) => { 
      let updateData = { ...privData, enteredTitle: e.target.value };
      return updateData;
    });
  };
  return (
    <div>
     <input
            type="text"
            value={enteredData.enteredTitle}
            onChange={onChangeTitleHandler}
          />
    </div>
  );
};

export default App;
