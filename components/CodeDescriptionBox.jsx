import { withStyles } from "@material-ui/core/styles"
import { TextField } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"

const CodeDescriptionBox = ({ description, handleDescriptionChange }) => {
    return (
        <textarea
            value={description}
            onChange={handleDescriptionChange}
            style={{
                fontSize: "14px",
                fontFamily: "serif",
                padding: "20px",
                width: "900px",
                height: "300px",
                resize: "none",
                borderRadius: "10px",
                border: "none",
            }}
        />
    )
}

export default CodeDescriptionBox
