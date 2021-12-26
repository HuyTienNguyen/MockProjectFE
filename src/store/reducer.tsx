import React from "react";
import { Student } from "../pages/Data";
import { SET_VALUE_ON_CHANGE, ADD_STUDENT, EDIT_STUDENT, DELETE_STUDENT } from "./constants";


function reducer(state: Student[], action: any){
    switch(action.type){      
        case ADD_STUDENT:
            return {
                listStudents: [...state, action.payload]
            }
        case EDIT_STUDENT:
            return {
                listStudents: [...state, action.payload]
            }
        default:
            throw Error('invalid')
            
    }
}