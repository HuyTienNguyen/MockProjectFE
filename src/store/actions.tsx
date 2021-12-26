import { Student } from "../pages/Data";
import { SET_VALUE_ON_CHANGE, ADD_STUDENT, EDIT_STUDENT, DELETE_STUDENT } from "./constants";

export type setTodoInput ={
    type: typeof SET_VALUE_ON_CHANGE,
    payload : String
}

export type addStudent = {
    type: typeof ADD_STUDENT,
    payload: Student
}

export type editStudent = {
    type: typeof EDIT_STUDENT,
    payload: Student
}

export type deleteStudent = {
    type: typeof DELETE_STUDENT,
    payload: number
}