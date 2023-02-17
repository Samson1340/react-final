import React from 'react'
import { Button, Modal, Form} from 'semantic-ui-react';


const AddNewPost = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Modal.Header>New Post</Modal.Header>
        <Modal.Content image scrolling>
          <Modal.Description>
            <Form>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="Title"
                  placeholder="Please write title"
                />
              </Form.Group>
              <Form.TextArea
                label="About"
                placeholder="Tell us more about you..."
              />
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setOpen(false)} primary>
            Submit
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};
export default AddNewPost;