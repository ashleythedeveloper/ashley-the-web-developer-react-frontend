import React, { useState } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import draftToMarkdown from 'draftjs-to-markdown';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


const TextEditor = () => {
  const [editorStates, seteditorStates] = useState( () => {EditorState.createEmpty()})
  // const rawContentState = convertToRaw(editorState.getCurrentContent());


  const helper = (editorState) => {
    let text = convertToRaw(editorStates.getCurrentContent())
    let markdown = draftToMarkdown(text)
    console.log(markdown);

  }
  return(
    <>
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Editor
            editorState={editorStates}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange= {seteditorStates}
          />
          <Button onClick={helper}>Submit</Button>
        </Grid>
      </Grid>
</Container>
</>
  )
}


export default TextEditor