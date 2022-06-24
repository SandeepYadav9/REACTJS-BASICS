
  REACT LIFE CYCLE - 3 Phase 
  
  1 Mount  2. Update   3. UnMount
  
  1. Mount 
  
  - componentWillMount (){}
    - Immediately Before initial rendring 
    
  - componentDidMount (){}
   - Immedate after initialize rendring 
   
   - componentWillReciveProps (nextProp){}
     - Will component recive new Props
     
    2. Update
    
     shouldComponentUpdate(nextProp, nextState){}
     - Before rendring recive newPprop or newState 
     
     componentWillUpdate(nextProps, nextState){}
     - Before rendring after reciving new props or state
     
     componentDidUpdate(prevProps, prevState){}
     - After component update are flushed to dom 
     
     3. UnMounting
     
     componentWillUnMount(){}
     - Before removing components from DOM
