Statefull - Classbased components are statefull, inside render method return jsx elements 

class App extends React.Components {
render{
return (
     <div>
       <h1>I am thinking Step by step </h1>
     </div>
      )
    }
                                   
extands default App;

===================================
StateLess Components -  function Based componnets are Stetless Because its not contain state or method

const App=()=>{
  return (
    <div> Hi</div>
  )
}
exports default App;
