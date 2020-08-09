import { Container, TextareaAutosize } from '@material-ui/core';
import Highlight from 'react-highlight'
import { useAuth0 } from "@auth0/auth0-react";

const PostContainer = () => {
    const {  isAuthenticated, } = useAuth0();


const codeString = `import PostContainer from './PostContainer'
export default function Post() {
  return (
    <div >
    <PostContainer />
    <PostContainer />
    <PostContainer />
    <PostContainer />
    </div>
  );
}    `;

    return (

        <Container maxWidth="sm" className="container" >
            < div className="title">Title</div>
            < div className="by">by Anonymous</div>
            < div className="description">Description</div>
            < div className="code" >

                <Highlight  className='javascript'>
                    {codeString}
                </Highlight>
            </div>
         {isAuthenticated && ( <TextareaAutosize className="textarea" aria-label="minimum height" rowsMin={3} placeholder="Review this code" />)}  
        </Container>
    )
}

export default PostContainer;