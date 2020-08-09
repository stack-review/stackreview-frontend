import { withStyles } from "@material-ui/core/styles"
import { TextField } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"

const CodeDescriptionBox = ({register, description, handleDescriptionChange }) => {
    return (
        <input
            name="description"
            ref={register}
            value={description}
            onChange={handleDescriptionChange}
            style={{
                  fontSize: '14px',
                  fontFamily: 'sans-serif',
                  padding: '20px',
                  width: '100%',
                  resize: 'none',
                  borderRadius: '10px',
                  border: 'solid 2px purple',
                  backgroundColor: 'whitesmoke',
                  outline: 'none',
                width: "900px",
                height: "150px",
            }}
        />
    )
}

export default CodeDescriptionBox
