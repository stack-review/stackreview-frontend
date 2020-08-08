import { TextField, withStyles } from "@material-ui/core"

const CodeDescriptionBox = () => {
    const TextArea = withStyles({
        root: {
            width: "900px",
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "20px",
        },
    })(TextField)
    return <TextArea multiline rows={10} InputProps={{ disableUnderline: true }} />
}

export default CodeDescriptionBox
