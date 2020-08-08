import { useState } from "react"
import AceEditor from "react-ace"
import * as regex from "../utils/CommentRegex.jsx"

import "ace-builds/src-noconflict/mode-c_cpp"
import "ace-builds/src-noconflict/mode-javascript"
import "ace-builds/src-noconflict/mode-java"
import "ace-builds/src-noconflict/mode-python"
import "ace-builds/src-noconflict/mode-golang"

const Editor = () => {
    const languageOptions = [
        { label: "C/C++", value: "c_cpp" },
        { label: "Javascript", value: "javascript" },
        { label: "Java", value: "java" },
        { label: "Python", value: "python" },
        { label: "Go", value: "golang" },
    ]

    const [language, setLanguage] = useState("c_cpp")
    const [code, setCode] = useState("")
    const [comments, setComments] = useState([])

    const handleCodeUpdate = newCode => {
        setCode(newCode)
        setComments(code.match(regex[language]))
    }

    return (
        <div style={{ width: "80%" }}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <select name="languageDropdown" id="languageDropdown">
                    {languageOptions.map(lang => (
                        <option key={lang.value} onClick={() => setLanguage(lang.value)} value={lang.value}>
                            {lang.label}
                        </option>
                    ))}
                </select>
            </div>
            <AceEditor
                fontSize={"16px"}
                onChange={handleCodeUpdate}
                code={code}
                showGutter={true}
                mode={language}
                setOptions={{ enableBasicAutocompletion: true }}
                width={"100%"}
                height={"500px"}
            />
        </div>
    )
}

export default Editor
