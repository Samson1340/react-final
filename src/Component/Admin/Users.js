import React from 'react'
import { Table, Menu, Icon, Button, Modal,Form } from 'semantic-ui-react';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Users = () => {
  const [user, setuser] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        setuser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const HundelDelete = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts${id}`)
      .then((response) => {
        <Modal>
          <Modal.Header>Thank you!</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              Your subscription has been confirmed
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={() => CloseEvent}>OK</Button>
          </Modal.Actions>
        </Modal>;
      });
    setuser(
      user.filter((user) => {
        return user.id !== id;
      })
    );
  };
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={
          <Button floated="right" primary style={{ marginBottom: 20 }}>
            Add New User
          </Button>
        }
      >
        <Modal.Header>Profile Picture</Modal.Header>
        <Modal.Content image scrolling>
          <Modal.Description>
            <Form>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="Name"
                  placeholder="Please enter name"
                />
                <Form.Input
                  fluid
                  label="Username"
                  placeholder="Please enter username"
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="Email"
                  placeholder="Please enter email"
                />
              </Form.Group>
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setOpen(false)} primary>
            Submit
          </Button>
        </Modal.Actions>
      </Modal>

      <Table
        color="blue"
        striped
        selectable
        sortable
        size="small"
        celled
        inverted
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>name</Table.HeaderCell>
            <Table.HeaderCell>username</Table.HeaderCell>
            <Table.HeaderCell>email</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {user.map((user) => (
            <Table.Row key={user.id}>
              <Table.Cell width={"1"}>{user.id}</Table.Cell>
              <Table.Cell width={"3"}>{user.name}</Table.Cell>
              <Table.Cell width={"5"}>{user.username}</Table.Cell>
              <Table.Cell width={"6"}>{user.email}</Table.Cell>
              <Table.Cell width={"1"}>
                <Button
                  circular
                  icon="remove"
                  onClick={() => HundelDelete(user.id)}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Users;