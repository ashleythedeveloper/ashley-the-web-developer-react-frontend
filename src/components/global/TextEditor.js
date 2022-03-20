import React, { useState } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, convertFromRaw, ContentState } from 'draft-js';
import { markdownToDraft, draftToMarkdown } from 'markdown-draft-js';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


const TextEditor = (props) => {
  const rawData = markdownToDraft(props.content)
  const initContentState = convertFromRaw(rawData)
  const [editorStates, seteditorStates] = useState(EditorState.createWithContent(initContentState))
  // const rawContentState = convertToRaw(editorState.getCurrentContent());


  const helper = (editorState) => {
    let text = convertToRaw(editorStates.getCurrentContent())
    let markdown = draftToMarkdown(text)
    props.updateContent(markdown);

  }
  return(
    <>
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Editor
            editorState={editorStates}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange= {seteditorStates}
          />
          <Button variant="contained" color="primary" onClick={helper}>Save</Button>
        </Grid>
      </Grid>
</Container>
</>
  )
}


export default TextEditor