import React from 'react';

class ArtWorks extends React.Component {
  render() {
    const params = this.props.match.params;
    return (
      <div>
        <p>{this.props.dataResults}<em>{params.id}</em></p>
      </div>
    );
  }
}

export default ArtWorks;
