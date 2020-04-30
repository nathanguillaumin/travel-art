import React from 'react';
import axios from 'axios';
import PaintingsCards from '../components/PaintingsCards';
import InfiniteScroll from 'react-infinite-scroll-component';
import '../components/Artworks.css';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

class ArtWorks extends React.Component {
  constructor () {
    super();
    this.state = {
      dataResults: false,
      value: '',
      fixDataResult: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  filterByPeriod (x) {
    if (x === 'BC') {
      this.setState({ dataResults: this.state.fixDataResult.filter(element => element.objectEndDate <= 0) });
    } else {
      this.setState({ dataResults: this.state.fixDataResult.filter(element => element.objectEndDate > 0) });
    }
  }

  handleChange (event) {
    this.setState({ value: event.target.value }, () => this.filterByPeriod(this.state.value));
  }

  async componentDidMount () {
    const params = this.props.match.params;
    const searchUrl = `https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${params.id}&q=travel`;
    const objectIds = await axios.get(searchUrl).then(res => res.data.objectIDs);
    const dataResults = await Promise.all(objectIds.slice(0, 20).map(id => axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`).then(res => res.data)));

    this.setState({ dataResults: dataResults, fixDataResult: dataResults });
  }

  render () {
    const params = this.props.match.params;
    return (
      <div className='artWorks-page'>
        <Link to={'/'}>
        <Header />
        </Link>
        <form onSubmit={this.preventSubmit}>
          <label className='label-form'><span>Travel by period:</span>
            <select value={this.state.value} onChange={this.handleChange}>
              <option>Choose your period</option>
              <option value='BC'>Before Christ</option>
              <option value='AC'>After Christ</option>
            </select>
          </label>
        </form>

        <div className='paintings-div'>
          {this.state.dataResults &&
          this.state.dataResults.map((element) =>
            <PaintingsCards
              key={element.title}
              title={element.title}
              artist={element.artistDisplayName}
              creditLine={element.creditLine}
              date={element.objectDate}
              country={element.country}
              image={element.primaryImageSmall}
              comments={element.creditLine}
              EndDate={element.objectEndDate}
              link={element.objectURL}
              culture={element.culture}
            />)}
        </div>
        {this.state.dataResults && <Footer />}
      </div>
    );
  }
}

export default ArtWorks;
