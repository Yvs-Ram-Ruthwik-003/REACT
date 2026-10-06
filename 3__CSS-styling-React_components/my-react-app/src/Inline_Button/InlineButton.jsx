function InlineButton(){
        const styles = {
            backgroundColor:" hsl(0, 64%, 83%)",
            padding: "10px 20px",
            border: "1px solid hsl(0, 37%, 37%)",
            borderRadius: "150px",
            cursor : "pointer",
            marginBottom: "10px",
            }

        const hoverStyles = {
            backgroundColor:"hsl(0, 37%, 37%)",
            color: "white",
        }

        return(

            
            <>
                {/*
                <button
                    style={styles}
                    onMouseOver={(e) =>
                        e.target.style.backgroundColor = hoverStyles.backgroundColor
                    }
                    onMouseOut={(e) =>
                        e.target.style.backgroundColor = styles.backgroundColor
                    }
                >
                    Submit
                </button>
                
                this is the way to style react components using inline styling. But this is not a good way to style react components because we have to write a lot of code for styling. So we can use css modules or external css files for styling react components.
                */}

                <button style={styles}>Submit</button>
            </>
        )
}
export default InlineButton