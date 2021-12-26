import React, { createContext } from 'react';
import { ListDataStudent, Student } from '../pages/Data';

type InitialStateType = {
    students: Student[]
}

const initialState = {
    students: ListDataStudent
}

const AppContext = createContext<InitialStateType>(initialState);