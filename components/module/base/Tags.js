import React, { useState } from 'react';

function Tags({tags}) {
  const listTags = tags.map((tag) =>
  <li><a>{tag.name} </a></li>
);
  return (
    <ul className="m-tag"> 
      {listTags}
  </ul>
  );
}
export default Tags;