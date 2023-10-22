import FirstComponent, {ThirdComponent} from './FirstComponent'
import SecondComponent from './SecondComponent'
import LearningJavaScript from './LearningJavaScript';

export default function LearningComponent(){
    return (
        <div className="App">
            My To-Do Application
            <FirstComponent/>
            <SecondComponent/>
            <ThirdComponent/>
            <LearningJavaScript/>
        </div>
      );
}