import direct from "../../direct";

const state = {
  formElements: [],
  hoverActiveInput: "",
  activeInputElement: "",
  hoverActiveRow: "",
  activeRowElement: "",
  hoverActiveCol: "",
  activeColElement: "",
  elementToEdit: "",
  elementToRemove: ""
};

const directGetters = direct.directGetters(state);

const findAndRemoveInputElement = async (array, elementId) => {
  const elmIdx = array.findIndex(({ id }) => id === elementId);

  if (elmIdx >= 0) {
    array.splice(elmIdx, 1);
    return;
  } else if (array.children?.length) {
    await this.findAndRemoveInputElement(array.children, elementId);
  }
};

const getters = {
  ...directGetters
};

const actions = {
  updateFormElements({ commit }, elementsArr) {
    commit("updateFormElementsHandler", elementsArr);
  },
  addRowElement({ commit }, elmObj) {
    commit("addRowElementHandler", elmObj);
  },

  addInputElement({ commit }, vElmObj) {
    commit("addInputElementHandler", vElmObj);
  },

  addColumnElement({ commit }, elmObj) {},

  async removeElement({ commit, state }, elementId) {
    console.log(`trying to delete: `, elementId);
    let formElements = [...state.formElements];

    await findAndRemoveInputElement(formElements, elementId);
    commit("updateFormElementsHandler", formElements);
  },
  setHoverActiveInput({ commit }, id) {
    commit("setHoverActiveInputHandler", id);
  },
  setActiveInputElement({ commit }, id) {
    commit("setActiveInputElementHandler", id);
  },
  setHoverActiveRow({ commit }, id) {
    commit("setHoverActiveRowHandler", id);
  },
  setActiveRowElement({ commit }, id) {
    commit("setActiveRowElementHandler", id);
  },
  setHoverActiveCol({ commit }, id) {
    commit("setHoverActiveColHandler", id);
  },
  setActiveColElement({ commit }, id) {
    commit("setActiveColElementHandler", id);
  },
  setElementToEdit({ commit }, id) {
    commit("setElementToEditHandler", id);
  },
  setElementToRemove({ commit }, id) {
    commit("setElementToRemoveHandler", id);
  }
};

const mutations = {
  updateFormElementsHandler(state, elementsArr) {
    state.formElements = elementsArr;
  },
  addRowElementHandler(state, elmObj) {
    state.formElements.push(elmObj);
  },
  addInputElementHandler(state, elmObj) {
    state.formElements.push(elmObj);
  },
  setHoverActiveInputHandler(state, id) {
    state.hoverActiveInput = id;
  },
  setActiveInputElementHandler(state, id) {
    state.activeInputElement = id;
  },
  setHoverActiveRowHandler(state, id) {
    state.hoverActiveRow = id;
  },
  setActiveRowElementHandler(state, id) {
    state.activeRowElement = id;
  },
  setHoverActiveColHandler(state, id) {
    state.hoverActiveCol = id;
  },
  setActiveColElementHandler(state, id) {
    state.activeColElement = id;
  },
  setElementToEditHandler(state, id) {
    state.elementToEdit = id;
  },
  setElementToRemoveHandler(state, id) {
    state.elementToRemove = id;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
