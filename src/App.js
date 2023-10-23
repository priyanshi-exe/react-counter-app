import './App.css';
import Counter from './components/counter/Counter'

function App() {
  return (
    <div className="App">
    {/* <PlayingWithProps property1="value1" property2="value2"/> */}
      <Counter/>
    </div>
  );
}

// // function PlayingWithProps(properties) {
// //   console.log(properties.property1)
// function PlayingWithProps({property1, property2}) {
//   console.log(property1)
//   return (
//     <div>Props</div>
//   )
// }

export default App;
