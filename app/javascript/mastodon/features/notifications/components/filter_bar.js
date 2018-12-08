import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, injectIntl, FormattedMessage } from 'react-intl';

const tooltips = defineMessages({
  all: { id: 'notifications.filter.all', defaultMessage: 'All' },
  mentions: { id: 'notifications.filter.mentions', defaultMessage: 'Mentions' },
  favourites: { id: 'notifications.filter.favourites', defaultMessage: 'Favourites' },
  boosts: { id: 'notifications.filter.boosts', defaultMessage: 'Boosts' },
  follows: { id: 'notifications.filter.follows', defaultMessage: 'Follows' },
});

export default @injectIntl
class FilterBar extends React.PureComponent {

  constructor (props) {
    super(props);
    this.state = {
      extendedElement: undefined,
    };
  };

  static propTypes = {
    selectFilter: PropTypes.func.isRequired,
    selectedFilter: PropTypes.string.isRequired,
    advancedMode: PropTypes.bool.isRequired,
    intl: PropTypes.object.isRequired,
  };

  onClick (notificationType) {
    return () => this.props.selectFilter(notificationType);
  }

  changeExtendedElement (newElement) {
    return () => {
      this.setState({
        extendedElement: newElement,
      });
    };
  }

  render () {
    const { selectedFilter, advancedMode, intl } = this.props;
    const { extendedElement } = this.state;
    const renderedElement = !advancedMode ? (
      <div className='notification__filter-bar'>
        <button
          className={selectedFilter === 'all' ? 'active' : ''}
          onClick={this.onClick('all')}
        >
          <FormattedMessage
            id='notifications.filter.all'
            defaultMessage='All'
          />
        </button>
        <button
          className={selectedFilter === 'mention' ? 'active' : ''}
          onClick={this.onClick('mention')}
        >
          <FormattedMessage
            id='notifications.filter.mentions'
            defaultMessage='Mentions'
          />
        </button>
      </div>
    ) : (
      <div className='notification__filter-bar'>
        <button
          className={selectedFilter === 'all' ? 'active' : ''}
          onClick={this.onClick('all')}
          title={intl.formatMessage(tooltips.all)}
          onMouseOver={this.changeExtendedElement('all')}
          onFocus={this.changeExtendedElement('all')}
          onMouseLeave={this.changeExtendedElement(undefined)}
          onBlur={this.changeExtendedElement(undefined)}
        >
          {extendedElement === 'all' ? (
            <FormattedMessage
              id='notifications.filter.all'
              defaultMessage='All'
            />
          ) : (
            <i className='fa fa-fw fa-bell' />
          )}
        </button>
        <button
          className={selectedFilter === 'mention' ? 'active' : ''}
          onClick={this.onClick('mention')}
          title={intl.formatMessage(tooltips.mentions)}
          onMouseOver={this.changeExtendedElement('mention')}
          onFocus={this.changeExtendedElement('mention')}
          onMouseLeave={this.changeExtendedElement(undefined)}
          onBlur={this.changeExtendedElement(undefined)}
        >
          {extendedElement === 'mention' ? (
            <FormattedMessage
              id='notifications.filter.mention'
              defaultMessage='Mention'
            />
          ) : (
            <i className='fa fa-fw fa-at' />
          )}
        </button>
        <button
          className={selectedFilter === 'favourite' ? 'active' : ''}
          onClick={this.onClick('favourite')}
          title={intl.formatMessage(tooltips.favourites)}
          onMouseOver={this.changeExtendedElement('favourite')}
          onFocus={this.changeExtendedElement('favourite')}
          onMouseLeave={this.changeExtendedElement(undefined)}
          onBlur={this.changeExtendedElement(undefined)}
        >
          {extendedElement === 'favourite' ? (
            <FormattedMessage
              id='notifications.filter.favourite'
              defaultMessage='Favourites'
            />
          ) : (
            <i className='fa fa-fw fa-star' />
          )}
        </button>
        <button
          className={selectedFilter === 'reblog' ? 'active' : ''}
          onClick={this.onClick('reblog')}
          title={intl.formatMessage(tooltips.boosts)}
          onMouseOver={this.changeExtendedElement('reblog')}
          onFocus={this.changeExtendedElement('reblog')}
          onMouseLeave={this.changeExtendedElement(undefined)}
          onBlur={this.changeExtendedElement(undefined)}
        >
          {extendedElement === 'reblog' ? (
            <FormattedMessage
              id='notifications.filter.reblog'
              defaultMessage='Boost'
            />
          ) : (
            <i className='fa fa-fw fa-retweet' />
          )}
        </button>
        <button
          className={selectedFilter === 'follow' ? 'active' : ''}
          onClick={this.onClick('follow')}
          title={intl.formatMessage(tooltips.follows)}
          onMouseOver={this.changeExtendedElement('follow')}
          onFocus={this.changeExtendedElement('follow')}
          onMouseLeave={this.changeExtendedElement(undefined)}
          onBlur={this.changeExtendedElement(undefined)}
        >
          {extendedElement === 'follow' ? (
            <FormattedMessage
              id='notifications.filter.follow'
              defaultMessage='Follows'
            />
          ) : (
            <i className='fa fa-fw fa-user-plus' />
          )}
        </button>
      </div>
    );
    return renderedElement;
  }

}
