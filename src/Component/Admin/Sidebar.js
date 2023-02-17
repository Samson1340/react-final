import React from "react";
import { Menu, Sidebar, Icon, Segment, Header} from "semantic-ui-react";
import "./Sidebarr.css"
import { Link } from 'react-router-dom'

const Sidebarr = () => {
  return (
    <div className="side-main">
      {/* <Sidebar.Pushable  as={Segment}> */}
        <Sidebar 
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          vertical
          visible
          width="wide"
          
          
        >
          <Segment color="blue">
            <Header color="blue" as="h2" icon textAlign="center">
              <Icon name="users" circular />
              <Header.Content>Administrator</Header.Content>
              <Header as="h4">Administrator@gmail.com</Header>
            </Header>
            
          </Segment>
          <Menu.Item  color="blue" as={Link} to="/">
            <h4>Dashboard</h4>
          </Menu.Item>
          <Menu.Item   as={Link} to="/posts" >
            <h4>Posts</h4>
          </Menu.Item>
          <Menu.Item    as={Link} to="/album">
            <h4>Album</h4>
          </Menu.Item>
          <Menu.Item   as={Link} to="/comments">
            <h4>Comments</h4>
          </Menu.Item>
          <Menu.Item   as={Link} to="/users">
            <h4>Users</h4>
          </Menu.Item>
          

        </Sidebar>
     
    </div>
  );
};

export default Sidebarr;
