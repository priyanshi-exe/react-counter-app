import FirstComponent, {ThirdComponent} from './FirstComponent'
import SecondComponent from './SecondComponent'

export default function LearningComponent(){
    return (
        <div className="App">
          My To-Do Application
          <FirstComponent/>
          <SecondComponent/>
          <ThirdComponent/>
        </div>
      );
}