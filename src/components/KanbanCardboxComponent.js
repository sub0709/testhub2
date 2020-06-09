import React, { Component } from 'react';
import KanbanTaskComponent from "components/KanbanTaskComponent";

class KanbanCardboxComponent extends Component {
    constructor(props) {
        super(props);

        //this.props.asdfasdf
        this.state = {
//           kanbanTaskList : this.props.data,
 //          status : this.props.status,
        };

        console.log(this.props.data);
    }

    render() {
        return(
            <div className="col-lg-4">
                <div className="card-box">
                    <div className="dropdown float-right">
                        <a
                        href="#none"
                        className="dropdown-toggle arrow-none"
                        data-toggle="dropdown"
                        aria-expanded="false"
                        >
                        <i className="mdi mdi-dots-vertical m-0 text-muted h3"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#none">
                            Edit
                        </a>
                        <a className="dropdown-item" href="#none">
                            Delete
                        </a>
                        <a className="dropdown-item" href="#none">
                            Add Members
                        </a>
                        <a className="dropdown-item" href="#none">
                            Add Due Date
                        </a>
                        </div>
                    </div>

                    <h4 className="header-title">{this.props.status}</h4>
                    <p className="sub-header">
                        {this.props.content}
                    </p>

                    <ul className="sortable-list taskList list-unstyled" id={this.props.id}>
                        {this.props.data.map((data, idx) => {
                            return(
                                <KanbanTaskComponent 
                                    key={idx}
                                    taskWarn={data.taskWarn}
                                    title={data.title}
                                    content={data.content}
                                    calendar={data.calendar}
                                    img={require(`assets/images/users/${data.img}.jpg`)}
                                    alt={data.alt} />
                                
                            )
                        })}
                    </ul>

                    <a
                        href="#none"
                        className="btn btn-primary btn-block mt-3 waves-effect waves-light"
                    >
                        <i className="mdi mdi-plus-circle"></i> Add New
                    </a>
                </div>
            </div>
        );
    }
}

export default KanbanCardboxComponent;