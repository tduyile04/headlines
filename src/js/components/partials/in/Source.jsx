import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { withRouter } from 'react-router-dom';
import 'react-select/dist/react-select.css';
import HeadlineAction from '../../../actions/HeadlineAction';
import logo from '../../../../json/logo.json';

/**
 * Child Component detailing the display and attributes of each source component
 * @class Source
 * @extends {React.Component}
 */
class Source extends React.Component {
  constructor() {
    super();
    this.state = {
      logos: '',
      value: 'top'
    };
    this.showArticles = this.showArticles.bind(this);
  }

  componentWillMount() {
    this.setState({
      logos: logo
    });
  }

  /**
   * Shows a corresponding list of articles for a new source
   * @param {any} sourceName Name of news source viewed
   * @param {any} chosenSortOption Selected sort by options
   * @memberof Source
   */
  showArticles(sourceName, chosenSortOption) {
    HeadlineAction.saveSortOptions(chosenSortOption);
    this.props.history.push('/articles/' + sourceName + '/' + chosenSortOption);
  }

  /**
   * Allows change of the selected option to its new value
   * @param {any} newValue value of the selected sort option
   * @memberof Source
   */
  onChange(newValue) {
    this.setState({
      value: newValue.value
    });
  }

  render() {
    const { logos, value } = this.state;
    const source = this.props.source;
    const sortOptions = source.sortBysAvailable.map((option) => {
      return { value: option.toLowerCase(), label: option };
    });
    return (
        <div className="source col s12 m4">
          <div className="card card hoverable grey darken-3">
            <section className="row">
              <div className="col s4 m4">
                <img src={logos[source.id]} id="logo" />
              </div>
              <div className="col s8 m8">
                <h6 className="header white-text center-align">
                  {source.name}
                </h6>
              <div
              className="card-content"
              style = {{ padding: 0, height: 150, paddingLeft: 5 }}>
                <p
                className="grey-text text-lighten-5 content-description">
                  {source.description}
                </p>
              </div>
              </div>
            </section>
            <div className="card-stacked">
              <div className="card-action row">
                <div
                  className="orange-text text-accent-1 col m6 s6"
                  style={{ cursor: 'pointer' }}
                  onClick={
                    () => this.showArticles(
                      source.name, value
                    )
                  }
                >
                  View Articles
                </div>
                <div className="col m6 s6">
                <Select
                  name="sort-options"
                  value= {value}
                  options={sortOptions}
                  onChange={value => this.onChange(value)}
                />
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

Source.propTypes = {
  source: PropTypes.object,
  history: PropTypes.object
};

export default withRouter(Source);
