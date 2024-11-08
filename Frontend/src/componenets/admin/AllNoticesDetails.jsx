import React from 'react';
import "./css/viewnotice.css"


function AllNoticesDetails({ noticeArray }) {
  return (
    <div className="notices-container">
      {noticeArray.map((item) => (
        <div className="notice-card" key={item._id}>
        
          <p>{item.content}</p>
          <p className="notice-date">Created At: {new Date(item.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

export default AllNoticesDetails;