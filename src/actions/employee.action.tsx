import { ActionsConstants } from "./action.constants";
import { IEmployee } from "../models/employee.interface";
import axios from "axios";
//import { Dispatch } from "react";

export function setEmployees(employees : IEmployee[]) {
    return {
        type: ActionsConstants.SET_EMPLOYEES,
        payload: employees,
    }
}

export function getEmployees(){
    return (dispatch: any)=>{
        axios.get('http://demo0116564.mockable.io/employees').then((response : any)=>{
             dispatch(setEmployees(response as IEmployee[]));
        })
    }
}