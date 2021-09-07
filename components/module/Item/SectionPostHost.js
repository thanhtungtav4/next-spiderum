import React, {useState, useEffect} from 'react'
import ItemRow from '../base/ItemRow';
import ItemVertical from '../base/ItemVertical';
import PostService from '../../../services/post_service';
import {PlaceholderItemRow, PlaceholderItemVertical} from '../base/PlaceholderItem';

  function SectionPostHost(props) {
    const [Posts, setPosts] = useState([]);
    const [PostsVeticel, setPostsVeticel] = useState([]);
    const [Loading, setLoading] = useState(true);
    
    useEffect(async () =>{
      const response = await PostService.getPost({
        cursorPaginate: 1,
        numPaginate: 3
      }).then(res => {
        if (res?.status === 200) {
          setPosts(res.data.data);
          setLoading(false);
        }
      })
      .catch(err =>console.log(err));
    }, []);
    return (
    <section className="row">
          {Posts.length > 0  && Loading == false ? (
           <>
            <div className="col-4">
              <div className="m-news"> 
                <ItemRow data={Posts[0]}/>
              </div>
            </div>
            
            <div className="col-6">
              <div className="m-news is_vertical">
                <ItemVertical data={Posts[1]}/>
                <ItemVertical data={Posts[2]}/>
              </div>
            </div>
           </>
          ) : (
            <>
          <div className="col-4">
            <div className="m-news"> 
              <PlaceholderItemRow/>
            </div>
          </div>
          <div className="col-6">
            <div className="m-news is_vertical">
              <PlaceholderItemVertical/>
              <PlaceholderItemVertical/>
            </div>
          </div>
            </>
          )}
        </section>
      );
  }

export default SectionPostHost
