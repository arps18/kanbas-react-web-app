import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Module {
  _id: string;
  title: string;
  submodules: { subtitle: string; items: { title: string }[] }[];
  course: string;
}

interface ModulesState {
  modules: Module[];
  module: Module;
}

const initialState: ModulesState = {
  modules: [],
  module: {
    _id: "",
    title: "",
    submodules: [{ subtitle: "", items: [{ title: "" }] }],
    course: "",
  },
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setModules: (state, action: PayloadAction<Module[]>) => {
      state.modules = action.payload;
    },
    addModule: (state, action: PayloadAction<Module>) => {
      state.modules = [
        { ...action.payload, _id: new Date().getTime().toString() },
        ...state.modules,
      ];
    },
    deleteModule: (state, action: PayloadAction<string>) => {
      state.modules = state.modules.filter(
        (module) => module._id !== action.payload
      );
    },
    updateModule: (state, action: PayloadAction<Module>) => {
      state.modules = state.modules.map((module) => {
        if (module._id === action.payload._id) {
          return action.payload;
        } else {
          return module;
        }
      });
    },
    setModule: (state, action: PayloadAction<Module>) => {
      state.module = action.payload;
    },
  },
});

export const { addModule, deleteModule, updateModule, setModule, setModules } =
  modulesSlice.actions;
export default modulesSlice.reducer;
