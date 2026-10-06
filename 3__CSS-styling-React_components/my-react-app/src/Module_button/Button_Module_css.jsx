import styles from './Button.module.css'

//we use this modeule css styling to avoid the problem of class name collision. In this modeule css styling, we can use the same class name in different components without any problem. Because the class name will be unique for each component.
function Button_Module_css(){

    return(
        <button className={styles.button}>Submit</button>
    )
}
export default Button_Module_css