import React from 'react';
import axios from 'axios';
import PaintingsCards from '../components/PaintingsCards';
import InfiniteScroll from "react-infinite-scroll-component";
import '../components/Artworks.css';
import Header from '../components/Header';
import { Link } from 'react-router-dom';


const elementsPerPage = 6;

class ArtWorks extends React.Component {
  constructor () {
    super();
    this.state = {
      dataResults: [],
      value : '',
      fixDataResult: [],
      offSet: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  fetchMoreData = async () => {
    const newOffSet = this.state.offSet + 1;
    this.setState({offSet : newOffSet});
    await this.load(newOffSet * elementsPerPage, (newOffSet + 1) * elementsPerPage)
    console.log(this.state.dataResults)
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

  async load (sliceBegin, sliceEnd) {
    const params = this.props.match.params;
    const searchUrl = `https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${params.id}&q=travel`;
    const objectIds = await axios.get(searchUrl).then(res => res.data.objectIDs);
    const dataResults = await Promise.all(objectIds.slice(sliceBegin, sliceEnd).map(id => axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`).then(res => res.data)));
    const newDataResult = [...this.state.dataResults, ...dataResults];
    this.setState({ dataResults: newDataResult, fixDataResult : newDataResult });
  }

  async componentDidMount() {
   this.load(0, elementsPerPage)
  }

  render () {
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
         {this.state.dataResults &&

        <InfiniteScroll
          dataLength={this.state.dataResults.length}
          next={this.fetchMoreData}
          hasMore={true}
          className='paintings-div'
        >
           {this.state.dataResults.map((element) =>
            <PaintingsCards
              key={element.objectID}
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
        </InfiniteScroll>
          }
      </div>
    );
  }
}

export default ArtWorks;
