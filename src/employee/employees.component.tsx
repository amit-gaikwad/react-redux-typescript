import React,{Component} from 'react';
import { IEmployee } from '../models/employee.interface';
import { getEmployees } from '../actions/employee.action';
import { connect } from "react-redux";

type EmployeePropTypes ={
    getEmployees? : any,
    employees : IEmployee[] 
}
class EmployeesComponent extends Component<EmployeePropTypes,{}>{
    
    componentDidMount(){
        this.props.getEmployees();
    }

    render(){
        const { employees } = this.props;
        return(
            <div>Employees List
                <div>
                    {employees &&  employees.map &&  employees.map((employee:IEmployee)=>(
                    <div key={employee.email}>
                        {employee.name}
                    </div>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state : any) => ({
    employees : state.employeeReducer.employees
  });

const mapDispatchToProps = (dispatch: any) => ({
    getEmployees: () => dispatch(getEmployees()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesComponent);
