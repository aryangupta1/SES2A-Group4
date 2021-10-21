import finishedIllustration from "../../images/preferences.png";
import { Preferences } from "../../components/Preferences/preferences";
import "./PreferencesPage.css"

export const PreferencesPage = () => {
  return (
    <div className="flex-wrapper">
        <div className="Rectangle">
          <div className="padding"/>
            <h3 className="topText"> You're nearly there!</h3>
            <img alt="finished-illustration" className="finishedIllustration" src={finishedIllustration} />
        </div>
        <div className="prefForm">
          <h3>Choose Preferences</h3>
          <Preferences/>
        </div>
    </div>
);
};

/*  Could not get these images  to render in the correct spot. Will leave for now.
    <img alt='steps_3' className='steps' src={step_3} />
    <img alt='steps_4' className='steps' src={step_4} />
*/
