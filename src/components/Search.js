import React from 'react'

class  Search extends React.Component {

  state = {
    searchVal: ''
  }

  handleSearch = (e) => {
    e.persist()
    this.setState({
      searchVal: e.target.value
    }, () =>  this.props.handleSearch(this.state.searchVal))
   
  }
  render(){
    
    return (
      <div className="ui search">
        <div className="ui icon input">
          <input className="prompt" value={this.state.searchVal} onChange={this.handleSearch} />
          <i className="search icon" />
        </div>
      </div>
    )
  }
}

export default Search
