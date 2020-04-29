import React from 'react';

function ArtWorks (props) {
  const params = props.match.params;
  return (
    <div>
      <p>
        ArtWorks page: <em>{params.id}</em>
      </p>
    </div>
  );
}

export default ArtWorks;
