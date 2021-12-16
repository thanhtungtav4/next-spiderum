import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PostService from '../../../services/post_service'

function SectionWedget(){
  const [PostsWedget, setPosts] = useState([]);
  useEffect(async () =>{
    const response = await PostService.getPost({
      featured: 1,
    }).then(res => {
      if (res?.status === 200) {
        setPosts(res.data.data);
      }
    })
    .catch(err =>console.log(err));
  });
    return (
        <>
            <div className="widget">
              <div className="widget-head"> CÓ THỂ BẠN QUAN TÂM</div>
              <div className="widget-body"> 
              {
                PostsWedget.map((PostWedget, index) => (
                  <>
                   <div className="widget-item"  key={index}> 
                      <div className="widget-item__img"> 
                      <a  rel="noreferrer">
                      <Image 
                          itemProp="image"
                          src={PostWedget?.image ? process.env.NEXT_PUBLIC_REST_API + PostWedget?.image : process.env.NEXT_PUBLIC_APP_IMG}
                          width="48px"
                          height="48px"
                          layout="responsive" 
                          alt={PostWedget?.title} 
                          placeholder="blur" 
                          blurDataURL={PostWedget?.image ? process.env.NEXT_PUBLIC_REST_API + PostWedget?.image : process.env.NEXT_PUBLIC_APP_IMG}
                        />
                        </a>
                        </div>
                      <div className="widget-item__content"> 
                        <Link href={`/posts/${encodeURIComponent(PostWedget?.slug)}`}>
                          <a> 
                            <h2 itemProp="name">{PostWedget?.title}</h2>
                          </a>
                          </Link>
                        <div className="widget-item__author">
                        <Link href={`/user/${encodeURIComponent(PostWedget?.users?.username)}`}>
                          <a className="m-author" >{PostWedget?.users?.name} 
                          </a>
                          </Link>
                          <span>{PostWedget?.created_at}</span>
                        </div>
                      </div>
                    </div>
                  </>
                ))
                }
              </div>
            </div>
        </>
    );
}
export default SectionWedget;