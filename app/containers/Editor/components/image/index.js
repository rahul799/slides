import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Image as SemanticImage } from 'semantic-ui-react';
import {
  getAssetsPath,
  getTitle,
  getUsername,
} from '../../../redux-store/PresentationReducer/selectors';

import { getItems } from '../../../redux-store/DeckReducer/selectors';
import config from '../../../../../server/constants';

// FIX positioning of image
const Image = ({ ID, itemsArray, assetsPath, username, title }) => {
  const item = itemsArray.find(itm => itm.ID === ID);
  // this base will be the server's address base for every image , localhost:3000/static/username/title/hash_imagename
  // src only has hash_name, i have to add username and title infront
  const myPath = `${assetsPath}/static/${username}/${title}/assets/${item.Src}`;
  console.log("configggggggggggg", config)
  return <SemanticImage src={myPath} alt="" size="large" />;
};

Image.propTypes = {
  ID: PropTypes.string,
  itemsArray: PropTypes.array,
  assetsPath: PropTypes.string,
  username: PropTypes.string,
  title: PropTypes.string,
};

export default connect(state => ({
  assetsPath: getAssetsPath(state),
  username: getUsername(state),
  title: getTitle(state),
  itemsArray: getItems(state),
}))(Image);
