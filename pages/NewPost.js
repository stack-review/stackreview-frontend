import Editor from "../components/editor"
import CodeDescriptionBox from "../components/CodeDescriptionBox"
import Layout from "../components/Layout"
import { Collapse, List, ListSubheader, ListItem, ListItemText } from "@material-ui/core"
import { ExpandLess, ExpandMore } from "@material-ui/icons"
import { useState } from "react"

const NewPost = () => {
    const [codeOpen, setCodeOpen] = useState(true)
    const [descriptionOpen, setDescriptionOpen] = useState(true)

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
                            <CodeDescriptionBox />
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
                            <Editor />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </Layout>
    )
}

export default NewPost
