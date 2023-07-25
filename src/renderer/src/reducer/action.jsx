import {
  GUIDE_MODAL_INVISIBLE,
  GUIDE_MODAL_VISIBLE,
  UPDATE_IMAGE,
  UPDATE_SCENE,
} from "./constants";

export const handleVisibleGuideModal = () => ({
  type: GUIDE_MODAL_VISIBLE,
});

export const handleInVisibleGuideModal = () => ({
  type: GUIDE_MODAL_INVISIBLE,
});

export const updateCurrentScene = (scene) => ({
  type: UPDATE_SCENE,
  payload: { scene },
});

export const updateCurrentImage = (image) => ({
  type: UPDATE_IMAGE,
  payload: { image },
});