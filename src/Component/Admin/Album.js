import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Menu, Icon, Button, Modal, Pagination } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { GetAlbum } from '../Redux/LoginRedux/ActionCreate'
import { useSelector, useDispatch } from 'react-redux';


const Album = () => {
  const dispatch = useDispatch();
  dispatch(GetAlbum());
  const album = useSelector((state) => state.album.album);
  const [album1, setalbum] = useState([]);
  const HundelDelete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/albums${id}`);
    setalbum(
      album1.filter((album) => {
        return album.id !== id;
      })
    );
  };

  return (
    <div>
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
            <Table.HeaderCell width={"1"}>Id</Table.HeaderCell>
            <Table.HeaderCell width={"3"}>Title</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {album.map((album) => (
            <Table.Row key={album.id}>
              <Table.Cell width={"1"}>{album.id}</Table.Cell>
              <Table.Cell width={"3"}>{album.title}</Table.Cell>
              <Table.Cell width={"3"}>Show All Pictures</Table.Cell>
              <Table.Cell width={"1"}>
                <Button
                  circular
                  icon="remove"
                  onClick={() => HundelDelete(album.id)}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Album;