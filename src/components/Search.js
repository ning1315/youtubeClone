import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      queryString: ''
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.setState({
      queryString: e.target.value
    })
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onChange={this.onChange} />
        <button className="btn hidden-sm-down" onClick={() => this.props.handleButtonClick(this.state.queryString)}>
          검색
        </button>
      </div>
    )
  }
}

export default Search;
