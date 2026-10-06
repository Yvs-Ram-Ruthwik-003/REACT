//How to style React components using CSS?

//(not including external frameworks or preprocessors like SASS)

//1. External
//2. Modules
//3. Inline

import Button from './Button.jsx'
import InlineButton from './Inline_Button/InlineButton.jsx'
import Button_Module_css from './Module_button/Button_Module_css.jsx'


function App(){
    return(
      <>
        <Button style={{marginBottom: '10px'}}></Button>
        <br></br>
        <Button_Module_css></Button_Module_css>
        <br></br>
        <InlineButton></InlineButton>
      </>
    )
}
export default App