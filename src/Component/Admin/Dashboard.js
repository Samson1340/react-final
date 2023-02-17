import React, { useEffect } from 'react'
import { Statistic} from 'semantic-ui-react';
import "./Dashboard.css";
import { useDispatch, useSelector} from 'react-redux';
import { GetDataSucess } from '../Redux/LoginRedux/ActionCreate'
import { GetAlbum } from '../Redux/LoginRedux/ActionCreate'
  
export const Dashboard = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetDataSucess())

  }, [])
    
    dispatch(GetAlbum())
const post = useSelector(state => state.posts.posts)
const album = useSelector(state => state.album.album);

console.log("post")
  
console.log(post)
  

  return (
    <Statistic.Group widths='four'>
    <Statistic>
      <Statistic.Value>{post?.length}</Statistic.Value>
      <Statistic.Label>Posts</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value>
      {post?.length}
      </Statistic.Value>
      <Statistic.Label>Comments</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value>
      {album?.length}
      </Statistic.Value>
      <Statistic.Label>Albums</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value>
      {post?.length}
      </Statistic.Value>
      <Statistic.Label>Users</Statistic.Label>
    </Statistic>
  </Statistic.Group>
  );
}

