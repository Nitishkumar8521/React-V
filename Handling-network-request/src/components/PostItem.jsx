function PostItem({obj}){
return (
    <div style={{border:"2px solid green", margin:"4px",borderRadius:"5px"}}>
      <h3>userId : { obj.userId}, id :{ obj.id}</h3>Title :{ obj.title} <br /> body :{ obj.body}
   </div>
)
}

export default PostItem;