import {
  GUIDE_MODAL_INVISIBLE,
  GUIDE_MODAL_VISIBLE,
  UPDATE_IMAGE,
  UPDATE_SCENE,
} from "./constants";

const initialState = {
  guide: true,
  currentscene: null,
  currentimage: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case GUIDE_MODAL_VISIBLE:
      return { ...state, guide: true };
    case GUIDE_MODAL_INVISIBLE:
      return { ...state, guide: false };
    case UPDATE_SCENE:
      return { ...state, currentscene: action.payload.scene };
    case UPDATE_IMAGE:
      return { ...state, currentimage: action.payload.image };
    default:
      throw new Error("invalid action");
      break;
  }
};

export { initialState };
export default reducer;
