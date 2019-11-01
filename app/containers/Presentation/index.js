/*
 * Presentation
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';

import { Grid } from 'semantic-ui-react';
import { Deck, Slide, Image, Text } from 'spectacle';
import { makeSelectDeckOfSlides, makeSelectCurrentSlide } from './selectors';

import { addSlide, removeSlide } from './actions';
import SideBar from '../../components/SideBar';
import MySlide from '../../components/MySlide';
// import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import './styles.css';

const key = 'presentation';

export function Presentation({
  DeckOfSlides,
  currentSlide,
  onAddSlide,
  onRemoveSlide,
}) {
  useInjectReducer({ key, reducer });

  // const presentationProps = {
  //   DeckOfSlides,
  //   currentSlide,
  // };
  const onAddText = () => {
    console.log('add text called');
  };

  const addingSlide = () => {
    console.log('einai h adding ', currentSlide);
    onAddSlide(currentSlide);
    // change current to the next
  };

  return (
    <div>
      <Helmet>
        <title>iPresent-2</title>
        <meta name="Presentation" content="iPresent-2" />
      </Helmet>
      <div className="presentation">
        <Grid className="grid">
          <Grid.Column width={1}>
            <SideBar
              addSlide={addingSlide}
              removeSlide={onRemoveSlide}
              addText={onAddText}
            />
          </Grid.Column>
          <Grid.Column width={15}>
            <Deck transition={['zoom', 'slide']} transitionDuration={500}>
              {DeckOfSlides.map((item, id) => (
                <MySlide content={item} id={id} />
              ))}
            </Deck>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
}

Presentation.propTypes = {
  DeckOfSlides: PropTypes.array,
  currentSlide: PropTypes.number,
  onAddSlide: PropTypes.func,
  onRemoveSlide: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  DeckOfSlides: makeSelectDeckOfSlides(),
  currentSlide: makeSelectCurrentSlide(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onAddSlide: id => dispatch(addSlide(id)),
    onRemoveSlide: id => dispatch(id),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Presentation);
