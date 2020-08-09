import AceEditor from "react-ace"

import "ace-builds/src-noconflict/mode-c_cpp"
import "ace-builds/src-noconflict/mode-javascript"
import "ace-builds/src-noconflict/mode-java"
import "ace-builds/src-noconflict/mode-python"
import "ace-builds/src-noconflict/mode-golang"

const Editor = ({ language, code, handleCodeChange, languageOptions, changeLanguage }) => {
    return (
        <div style={{ width: "900px" }}>
            <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: "10px" }}>
                {/* TODO : Change this to material <Select> */}
                <select name="languageDropdown" id="languageDropdown">
                    {languageOptions.map(lang => (
                        <option key={lang.value} onClick={() => changeLanguage(lang)} value={lang.value}>
                            {lang.label}
                        </option>
                    ))}
                </select>
            </div>
            <AceEditor
                value={code}
                onChange={handleCodeChange}
                fontSize={"16px"}
                code={code}
                showGutter={true}
                mode={language.value}
                setOptions={{ enableBasicAutocompletion: true }}
                width={"100%"}
                height={"300px"}
            />
        </div>
    )
}

export default Editor
