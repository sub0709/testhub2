import React, { Component } from "react";
// import KanbanTaskComponent from "../../components/KanbanTaskComponent";
import KanbanCardboxComponent from "components/KanbanCardboxComponent";


class KanbanBoard extends Component {
    constructor(props) {
        super(props);

        const kanbanCardList = [
            {
                id : 'upcoming',
                status : 'Upcoming',
                content : 'Upcoming TEXT.'
            // }
            },
            {
                id : 'inprogress',
                status : 'In Progress',
                content : 'Your awesome text goes here.'
            },
            {
                id : 'completed',
                status : 'Completed',
                content : 'Completed!'
            }
        ];

        const responseData = [
            [
                {
                    taskWarn : 'Low',
                    title : '0000 Brand logo design',
                    content : 'Various versions have evolved over the years, sometimes by accident.',
                    calendar : 'Nov 29, 2020',
                    img : 'user-1',
                    alt : 'task-user-1',
                },
                {
                    taskWarn : 'Medium',
                    title : '0000 Improve animation loader',
                    content : 'A handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.',
                    calendar : 'May 5, 2014',
                    img : 'user-7',
                    alt : 'task-user-7',
                },
                {
                    taskWarn : 'High',
                    title : '0000 Dashboard Re-design',
                    content : 'There are many variations of passages of Lorem Ipsum available.',
                    calendar : 'Oct 16, 2017',
                    img : 'user-8',
                    alt : 'task-user-8',
                },
                {
                    taskWarn : 'Low',
                    title : '0000 iOS App home page',
                    content : 'There are many variations of passages of Lorem Ipsum available.',
                    calendar : 'Feb 13, 2018',
                    img : 'user-9',
                    alt : 'task-user-9',
                },
                {
                    taskWarn : 'Low',
                    title : '0000 Enable analytics tracking',
                    content : 'It has roots in a piece of classical Latin literature from 45 BC.',
                    calendar : 'Jan 7, 2016',
                    img : 'user-10',
                    alt : 'task-user-10',
                },
                {
                    taskWarn : 'High',
                    title : '0000 Kanban board design',
                    content : 'A handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.',
                    calendar : 'Aug 22, 2019',
                    img : 'user-11',
                    alt : 'task-user-11',
                }
            ],
            [
                {
                    taskWarn : 'Low',
                    title : '1111 Brand logo design',
                    content : 'Various versions have evolved over the years, sometimes by accident.',
                    calendar : 'Nov 29, 2020',
                    img : 'user-1',
                    alt : 'task-user-1',
                },
                {
                    taskWarn : 'Medium',
                    title : '1111 Improve animation loader',
                    content : 'A handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.',
                    calendar : 'May 5, 2014',
                    img : 'user-7',
                    alt : 'task-user-7',
                },
                {
                    taskWarn : 'High',
                    title : '1111 Dashboard Re-design',
                    content : 'There are many variations of passages of Lorem Ipsum available.',
                    calendar : 'Oct 16, 2017',
                    img : 'user-8',
                    alt : 'task-user-8',
                },
                {
                    taskWarn : 'Low',
                    title : '1111 iOS App home page',
                    content : 'There are many variations of passages of Lorem Ipsum available.',
                    calendar : 'Feb 13, 2018',
                    img : 'user-9',
                    alt : 'task-user-9',
                },
                {
                    taskWarn : 'Low',
                    title : '1111 Enable analytics tracking',
                    content : 'It has roots in a piece of classical Latin literature from 45 BC.',
                    calendar : 'Jan 7, 2016',
                    img : 'user-10',
                    alt : 'task-user-10',
                },
                {
                    taskWarn : 'High',
                    title : '1111 Kanban board design',
                    content : 'A handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.',
                    calendar : 'Aug 22, 2019',
                    img : 'user-11',
                    alt : 'task-user-11',
                }
            ],
            [
                {
                    taskWarn : 'Low',
                    title : '2222Brand logo design',
                    content : 'Various versions have evolved over the years, sometimes by accident.',
                    calendar : 'Nov 29, 2020',
                    img : 'user-1',
                    alt : 'task-user-1',
                },
                {
                    taskWarn : 'Medium',
                    title : '2222Improve animation loader',
                    content : 'A handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.',
                    calendar : 'May 5, 2014',
                    img : 'user-7',
                    alt : 'task-user-7',
                },
                {
                    taskWarn : 'High',
                    title : '2222Dashboard Re-design',
                    content : 'There are many variations of passages of Lorem Ipsum available.',
                    calendar : 'Oct 16, 2017',
                    img : 'user-8',
                    alt : 'task-user-8',
                },
                {
                    taskWarn : 'Low',
                    title : '2222iOS App home page',
                    content : 'There are many variations of passages of Lorem Ipsum available.',
                    calendar : 'Feb 13, 2018',
                    img : 'user-9',
                    alt : 'task-user-9',
                },
                {
                    taskWarn : 'Low',
                    title : '2222Enable analytics tracking',
                    content : 'It has roots in a piece of classical Latin literature from 45 BC.',
                    calendar : 'Jan 7, 2016',
                    img : 'user-10',
                    alt : 'task-user-10',
                },
                {
                    taskWarn : 'High',
                    title : '2222Kanban board design',
                    content : 'A handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.',
                    calendar : 'Aug 22, 2019',
                    img : 'user-11',
                    alt : 'task-user-11',
                }
            ],
        ];

        
        this.state = {
            kanbanCardList : kanbanCardList,
            backdata : responseData,
        };

//        this.setState({
 //           backdata : responseData
  //      });
    }


    render() {
        return(
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                        <div className="page-title-box">
                            <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item">
                                <a href="#none">UBold</a>
                                </li>
                                <li className="breadcrumb-item">
                                <a href="#none">Apps</a>
                                </li>
                                <li className="breadcrumb-item active">Kanban Board</li>
                            </ol>
                            </div>
                            <h4 className="page-title">Kanban Board</h4>
                        </div>
                        </div>
                    </div>

                    <div className='row'>
                        <KanbanCardboxComponent id="upcoming" status ="Upcoming" content="Upcoming TExT" data={this.state.backdata[0]}/>
                        {this.state.kanbanCardList.map((card, idx) => {
                            return(
                                <KanbanCardboxComponent
                                    key={idx}
                                    titleInfo={card}
                                    id={card.id}
                                    status={card.status}
                                    content={card.content}
                                    data={this.state.backdata[idx]}/>
                            );
                        })}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
    

export default KanbanBoard;