import {TextField} from'./TextField';
import { Counter } from "./Counter";
import {Reducer} from'./Reducer';
import './App.css';

const App:React.FC=()=> {
  return (
    <div className="App">
     <TextField text='hello' person={{firstName:'' ,lastName:''}} handleChange={e=>{}}/>
     <Counter>
        {({ count, setCount }) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>add</button>
          </div>
        )}
      </Counter>
      <Reducer/>

    </div>
  );
}

export default App;
