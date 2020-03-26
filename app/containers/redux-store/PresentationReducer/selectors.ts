/**
 * Selectors
 */
import { presentationState } from './definitions';

const getTheme = (state: { presentation: presentationState; }) => state.presentation.theme;
const getTitle = (state: { presentation: presentationState; }) => state.presentation.title;

const getDescription = (state: { presentation: presentationState; }) => state.presentation.description;
const getImgUploadRequest = (state: { presentation: presentationState; }) => state.presentation.imgUploadRequest;

const getAssetsPath = (state: { presentation: presentationState; }) => state.presentation.assetsPath;
const getUsername = (state: { presentation: presentationState; }) => state.presentation.username;

const getSaveRequest = (state: { presentation: presentationState; }) => state.presentation.saveRequest;
const getLoadRequest = (state: { presentation: presentationState; }) => state.presentation.loadRequest;

const getIsReady = (state: { presentation: presentationState; }) => state.presentation.isReady;

export {
  getTheme,
  getTitle,
  getDescription,
  getImgUploadRequest,
  getAssetsPath,
  getUsername,
  getSaveRequest,
  getLoadRequest,
  getIsReady,
};