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
        
        this.state = {
            kanbanCardList : kanbanCardList
        };
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
                        {this.state.kanbanCardList.map((card, idx) => {
                            return(
                                <KanbanCardboxComponent
                                    key={idx}
                                    id={card.id}
                                    status={card.status}
                                    content={card.content}/>
                            );
                        })}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
    

export default KanbanBoard;