import Editor from "../components/editor"
import CodeDescriptionBox from "../components/CodeDescriptionBox"
import Layout from "../components/Layout"
import { Collapse, List, ListSubheader, ListItem, ListItemText } from "@material-ui/core"
import { ExpandLess, ExpandMore } from "@material-ui/icons"
import { useState } from "react"
import * as regex from "../utils/CommentRegex"

const NewPost = () => {
    const [codeOpen, setCodeOpen] = useState(true)
    const [descriptionOpen, setDescriptionOpen] = useState(true)
    const [code, setCode] = useState("")
    const [comments, setComments] = useState([])
    const [description, setDescription] = useState("")
    const [language, setLanguage] = useState({ label: "C/C++", value: "c_cpp" })

    const languageOptions = [
        { label: "C/C++", value: "c_cpp" },
        { label: "Javascript", value: "javascript" },
        { label: "Java", value: "java" },
        { label: "Python", value: "python" },
        { label: "Go", value: "golang" },
    ]

    const changeLanguage = lang => {
        console.log({ lang })
        setLanguage(lang)
    }

    const handleDescriptionChange = event => {
        setDescription(event.target.value)
    }

    const handleCodeChange = newCode => {
        setCode(newCode)
        setComments(code.match(regex[language.value]))
    }
    return (
        <Layout>
            <List subheader={<ListSubheader>Create New Code Review</ListSubheader>}>
                <ListItem button onClick={() => setDescriptionOpen(!descriptionOpen)}>
                    <ListItemText primary="Description" />
                    {descriptionOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={descriptionOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem>
                            <CodeDescriptionBox
                                description={description}
                                handleDescriptionChange={handleDescriptionChange}
                            />
                        </ListItem>
                    </List>
                </Collapse>

                <ListItem button onClick={() => setCodeOpen(!codeOpen)}>
                    <ListItemText primary="Code" />
                    {codeOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={codeOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem>
                            <Editor
                                language={language}
                                changeLanguage={changeLanguage}
                                languageOptions={languageOptions}
                                code={code}
                                handleCodeChange={handleCodeChange}
                            />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </Layout>
    )
}

export default NewPost
