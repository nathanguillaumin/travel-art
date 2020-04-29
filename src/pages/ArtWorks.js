import React from 'react';

class ArtWorks extends Component {
    constructor(props) {
        super(props)
    }
  const params = props.match.params;
  return (
    <div>
      <p>{props.dataResults}<em>{params.id}</em></p>
    </div>
  );
}




export default ArtWorks;
