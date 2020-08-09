const CodeDescriptionBox = ({ description, handleDescriptionChange }) => {
    // const TextArea = withStyles({
    //     root: {
    //         width: "900px",
    //         backgroundColor: "white",
    //         borderRadius: "10px",
    //         padding: "20px",
    //     },
    // })(TextField)

    return (
        <textarea
            value={description}
            onChange={handleDescriptionChange}
            style={{
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
