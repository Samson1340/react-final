import React from 'react';
import { Table, Button, Modal} from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { GetDataSucess, DeleteDataSucess } from '../Redux/LoginRedux/ActionCreate'
import { Link } from 'react-router-dom'

export const Posts = () => {
    const dispatch = useDispatch()
    dispatch(GetDataSucess())
  const posts = useSelector(state => state.posts.posts); 

    
 
  
  
  return (
    <div>
    <Button as={Link} to="/posts/addnewpost" floated='right' primary style={{marginBottom: 20}}>Add New Post</Button>
    <Table color='blue'striped selectable  sortable size='small' celled inverted>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>Title</Table.HeaderCell>
        <Table.HeaderCell>Body</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {posts.map((post) => {
          return(
          <Table.Row key={post.id}>
            <Table.Cell width={'1'}>{post.id}</Table.Cell>
            <Table.Cell width={'4'}>{post.title}</Table.Cell>
            <Table.Cell width={'7'} >{post.body}</Table.Cell>
            <Table.Cell width={'1'}><Button circular icon='remove' onClick = {() => dispatch(DeleteDataSucess(post.id))}/></Table.Cell>
          </Table.Row>
          )
})}
      </Table.Body>
  </Table>
</div>
  );
}

