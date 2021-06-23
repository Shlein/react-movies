import {React, Component} from 'react'

class Search extends Component {

	state = {
		search: '',
		type: 'all'
	}

	handleKey = (e) => {
		if (e.key === 'Enter') {
			this.props.searchMovies(this.state.search, this.state.type)
		}
	}

	handleFilter = (e) => {
		this.setState(() => ({type: e.target.dataset.type}), () => {
			this.props.searchMovies(this.state.search, this.state.type)
		})
	}

	render() {
	  return (
		  <div className="row">
			  <div className="input-field">
				  <input
					  className="validate"
					  placeholder='Search'
					  type="search"
					  value={this.state.search}
					  onChange={e => this.setState({search: e.target.value})}
					  onKeyDown={this.handleKey}
				  />
				  <button className="btn search-btn" onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>Search</button>
				  <form>
						<div>
							<label>
								<input data-type="all"
								       className="with-gap"
								       name="group3"
								       type="radio"
								       onChange={this.handleFilter}
								       checked={this.state.type === 'all'}
								/>
								<span>All</span>
							</label>
							<label>
								<input data-type="movie"
								       className="with-gap"
								       name="group3" type="radio"
								       onChange={this.handleFilter}
								       checked={this.state.type === "movie"}
								/>
								<span>Movies only</span>
							</label>
							<label>
								<input data-type="series"
								       className="with-gap"
								       name="group3" type="radio"
								       onChange={this.handleFilter}
								       checked={this.state.type === 'series'}
								/>
								<span>Series only</span>
							</label>
						</div>
				  </form>
			  </div>
		  </div>
	  )
	}
}

export default Search