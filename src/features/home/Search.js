import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';



import { Container } from 'reactstrap';




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Search extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = { searchText: '', resultatState: [], focus: false };
  }

  focus = event => {
    event.preventDefault();
    this.setState({
      focus: !this.state.focus,
    });
  };

  render() {
    const { searchAction } = this.props.actions;

    return (
      <Container className="container-search">
       
        <div className="input-group">
          <input className="form-control py-2 border-right-0 border"  type="text"
            
            placeholder="Search"
            onChange={event => {
              this.setState({ searchText: event.target.value });
            }}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                this.setState({ resultatState: [] });
                if (this.state.searchText.length !== 0) {
                  searchAction(this.state.searchText);
                }
              }
            }}/>
          <span className="input-group-append">
            <div className="input-group-text ">
              <FontAwesomeIcon icon="search" />
            </div>
          </span>
        </div>
      </Container>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
