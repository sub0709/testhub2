import React, { Component } from 'react';
import KanbanTaskComponent from "components/KanbanTaskComponent";

class KanbanCardboxComponent extends Component {
    constructor(props) {
        super(props);

        const kanbanTaskList = [
            {
                taskWarn : 'Low',
                title : 'Brand logo design',
                content : 'Various versions have evolved over the years, sometimes by accident.',
                calendar : 'Nov 29, 2020',
                img : 'user-1',
                alt : 'task-user-1',
            },
            {
                taskWarn : 'Medium',
                title : 'Improve animation loader',
                content : 'A handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.',
                calendar : 'May 5, 2014',
                img : 'user-7',
                alt : 'task-user-7',
            },
            {
                taskWarn : 'High',
                title : 'Dashboard Re-design',
                content : 'There are many variations of passages of Lorem Ipsum available.',
                calendar : 'Oct 16, 2017',
                img : 'user-8',
                alt : 'task-user-8',
            },
            {
                taskWarn : 'Low',
                title : 'iOS App home page',
                content : 'There are many variations of passages of Lorem Ipsum available.',
                calendar : 'Feb 13, 2018',
                img : 'user-9',
                alt : 'task-user-9',
            },
            {
                taskWarn : 'Low',
                title : 'Enable analytics tracking',
                content : 'It has roots in a piece of classical Latin literature from 45 BC.',
                calendar : 'Jan 7, 2016',
                img : 'user-10',
                alt : 'task-user-10',
            },
            {
                taskWarn : 'High',
                title : 'Kanban board design',
                content : 'A handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.',
                calendar : 'Aug 22, 2019',
                img : 'user-11',
                alt : 'task-user-11',
            }
        ];

        this.state = {
            kanbanTaskList : kanbanTaskList
        };
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
                        {this.state.kanbanTaskList.map((data, idx) => {
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