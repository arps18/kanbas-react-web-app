import axios from "axios";
import { Submodule } from "../../Store";
import { Module } from "../../Store";

// const API_BASE = process.env.REACT_APP_API_BASE;
const API_BASE = "https://localhost:4000";
const COURSES_URL = `${API_BASE}/api/courses`;
const MODULES_URL = `${API_BASE}/api/modules`;

export const updateModule = async (module: { name?: string | number | readonly string[]; description?: string | number | readonly string[]; lessons?: any; _id: any; title?: string; submodules?: Submodule[]; course?: string; }) => {
  const response = await axios.put(`${MODULES_URL}/${module._id}`, module);
  return response.data;
};

export const deleteModule = async (moduleId: string) => {
  const response = await axios.delete(`${MODULES_URL}/${moduleId}`);
  return response.data;
};

export const createModule = async (courseId: string | undefined, module: Module) => {
  const response = await axios.post(
    `${COURSES_URL}/${courseId}/modules`,
    module
  );
  return response.data;
};

export const findModulesForCourse = async (courseId: string | undefined) => {
  const response = await axios.get(`${COURSES_URL}/${courseId}/modules`);
  return response.data;
};
