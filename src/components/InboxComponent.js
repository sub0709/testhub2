import React, { Component } from "react";

class InboxComponent extends Component {
    constructor(props) {
        super(props);

        this.check = this.check.bind(this);
    }

    check(taskWarn) {
        if(taskWarn === 'Low') {
            return(
                <span className="badge bg-soft-success text-success float-right">Low</span>
            );
        }
        if (taskWarn === 'Medium') {
            return(
                <span className="badge bg-soft-warning text-warning float-right">Medium</span>
            );
        }
        if (taskWarn === 'High') {
            return(
                <span className="badge bg-soft-danger text-danger float-right">High</span>
            );
            
        }
    };

    render() {
        const {taskWarn, title} =this.props;

        return(
            <li key={this.props.img} className="task-warning" id="task10">
                {
                    this.check(taskWarn) 
                }
                
                <h5 className="mt-0">
                    <a href="#none" className="text-dark">
                    {title}
                    </a>
                </h5>
                
                <div className="checkbox checkbox-blue mb-2 checkbox-single float-right">
                    <input type="checkbox" />
                    <label></label>
                </div>
                
                <p>
                    {this.props.content}
                </p>
                
                <div className="clearfix"></div>
                
                <div className="row">
                    <div className="col">
                        <p className="font-13 mt-2 mb-0">
                            <i className="mdi mdi-calendar"></i>{this.props.calendar}
                        </p>
                    </div>
                    
                    <div className="col-auto">
                        <div className="text-right">
                            <a href="#none" className="text-muted">
                                <img
                                    src={this.props.img}
                                    alt={this.props.alt}
                                    className="avatar-sm img-thumbnail rounded-circle"
                                /> 
                            </a>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default InboxComponent;