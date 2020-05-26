import React, { Component } from "react";
import InboxContentComponent from "components/InboxContentComponent";

class InboxBoard extends Component {
    constructor(props) {
        super(props);

        const contentList = [
        {
            unread : 'unread',
            textWarn : 'text-warning',
            title : 'Lucas Kriebel (via Twitter)',
            subject : 'Lucas Kriebel (@LucasKriebel) has sent you a direct message on Twitter!  – ',
            teaser : '@LucasKriebel - Very cool :) Nicklas, You have a new direct message.',
            date : 'Feb 16'
        },
        {
            unread : '',
            textWarn : '',
            title : 'Randy, me (2)',
            subject : 'Last pic over my village  – ',
            teaser : "Yeah i'd like that! Do you remember the video you showed me of your train ride between Colombo and Kandy? The one with the mountain view? I would love to see that one again!",
            date : 'Nov 10'
        },
        {
            unread : '',
            textWarn : 'text-warning',
            title : 'Google Drive Team',
            subject : 'You can now use your storage in Google Drive  – ',
            teaser : 'Hey Nicklas Sandell! Thank you for purchasing extra storage space in Google Drive.',
            date : 'Mar 5'
        },
        {
            unread : 'unread',
            textWarn : '',
            title : 'Erik, me (3)',
            subject : 'Regarding our meeting  – ',
            teaser : "That's great, see you on Thursday!",
            date : 'March 17'
        },
        {
            unread : 'unread',
            textWarn : 'text-warning',
            title : 'Web Support Dennis',
            subject : 'Re: New mail settings  – ',
            teaser : 'Will you answer him asap?',
            date : 'Aug 6'
        },
        {
            unread : 'unread',
            textWarn : '',
            title : 'Lucas Kriebel (via Twitter)',
            subject : 'Lucas Kriebel (@LucasKriebel) has sent you a direct message on Twitter!  – ',
            teaser : '@LucasKriebel - Very cool :) Nicklas, You have a new direct message.',
            date : 'Feb 16'
        },
        {
            unread : '',
            textWarn : '',
            title : 'Randy, me (5)',
            subject : 'Last pic over my village  – ',
            teaser : "Yeah i'd like that! Do you remember the video you showed me of your train ride between Colombo and Kandy? The one with the mountain view? I would love to see that one again!",
            date : 'Jun 19'
        },
        {
            unread : 'unread',
            textWarn : 'text-warning',
            title : 'Google Drive Team',
            subject : 'You can now use your storage in Google Drive  – ',
            teaser : 'Hey Nicklas Sandell! Thank you for purchasing extra storage space in Google Drive.',
            date : 'Mar 5'
        },
        {
            unread : 'unread',
            textWarn : '',
            title : 'Erik, me (8)',
            subject : 'Regarding our meeting  – ',
            teaser : "That's great, see you on Thursday!",
            date : 'May 2'
        },
        {
            unread : '',
            textWarn : 'text-warning',
            title : 'Web Support Dennis',
            subject : 'Re: New mail settings  – ',
            teaser : 'Will you answer him asap?',
            date : 'Oct 23'
        }];

        this.state = {
            contentList : contentList
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
                                <a href="#none">Email</a>
                                </li>
                                <li className="breadcrumb-item active">Inbox</li>
                            </ol>
                            </div>
                            <h4 className="page-title">Inbox</h4>
                        </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="card-box">
                                <div className="inbox-leftbar">
                                    <a
                                        href="email-compose.html"
                                        className="btn btn-danger btn-block waves-effect waves-light"
                                    >
                                    Compose
                                    </a>

                                    <div className="mail-list mt-4"> {/* 5개 */} 
                                        <a
                                        href="#none"
                                        className="list-group-item border-0 text-danger font-weight-bold"
                                        >
                                        <i className="mdi mdi-inbox font-18 align-middle mr-2"></i>
                                        Inbox
                                        <span className="badge badge-danger float-right ml-2 mt-1">
                                            8
                                        </span>
                                        </a>
                                        <a href="#none" className="list-group-item border-0">
                                            <i className="mdi mdi-star font-18 align-middle mr-2"></i>
                                            Starred
                                        </a>
                                        <a href="#none" className="list-group-item border-0">
                                            <i className="mdi mdi-file-document-box font-18 align-middle mr-2"></i>
                                            Draft
                                            <span className="badge badge-info float-right ml-2 mt-1">
                                                28
                                            </span>
                                        </a>
                                        <a href="#none" className="list-group-item border-0">
                                            <i className="mdi mdi-send font-18 align-middle mr-2"></i>
                                            Sent Mail
                                        </a>
                                        <a href="#none" className="list-group-item border-0">
                                            <i className="mdi mdi-delete font-18 align-middle mr-2"></i>
                                            Trash
                                        </a>
                                        
                                    </div> 
                                    
                                    <h6 className="mt-4">Labels</h6>
                                    
                                    <div className="list-group b-0 mail-list"> {/* Label 5개 */} 
                                        <a href="#none" className="list-group-item border-0">
                                            <span className="mdi mdi-circle text-info mr-2"></span>
                                            Web App
                                        </a>
                                        <a href="#none" className="list-group-item border-0">
                                            <span className="mdi mdi-circle text-warning mr-2"></span>
                                            Recharge
                                        </a>
                                        <a href="#none" className="list-group-item border-0">
                                            <span className="mdi mdi-circle text-dark mr-2"></span>
                                            Wallet Balance
                                        </a>
                                        <a href="#none" className="list-group-item border-0">
                                            <span className="mdi mdi-circle text-primary mr-2"></span>
                                            Friends
                                        </a>
                                        <a href="#none" className="list-group-item border-0">
                                            <span className="mdi mdi-circle text-success mr-2"></span>
                                            Family
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="inbox-rightbar">
                                    {/* btn-group 상단 버튼 4묶음 */}
                                    <div className="btn-group">
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-light waves-effect">
                                            <i className="mdi mdi-archive font-18"></i>
                                        </button>
                                        
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-light waves-effect">
                                            <i className="mdi mdi-alert-octagon font-18"></i>
                                        </button>
                                        
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-light waves-effect">
                                            <i className="mdi mdi-delete-variant font-18"></i>
                                        </button>
                                    </div>

                                    <div className="btn-group">
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-light dropdown-toggle waves-effect"
                                            data-toggle="dropdown"
                                            aria-expanded="false">
                                            <i className="mdi mdi-folder font-18"></i>
                                            <i className="mdi mdi-chevron-down"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <span className="dropdown-header">Move to</span>
                                            <a className="dropdown-item" href="#none">
                                                Social
                                            </a>
                                            <a className="dropdown-item" href="#none">
                                                Promotions
                                            </a>
                                            <a className="dropdown-item" href="#none">
                                                Updates
                                            </a>
                                            <a className="dropdown-item" href="#none">
                                                Forums
                                            </a>
                                        </div>
                                    </div>

                                    <div className="btn-group">
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-light dropdown-toggle waves-effect"
                                            data-toggle="dropdown"
                                            aria-expanded="false">
                                            <i className="mdi mdi-label font-18"></i>
                                            <i className="mdi mdi-chevron-down"></i>
                                        </button>
                                        
                                        <div className="dropdown-menu">
                                            <span className="dropdown-header">Label as:</span>
                                            <a className="dropdown-item" href="#none">
                                                Updates
                                            </a>
                                            <a className="dropdown-item" href="#none">
                                                Social
                                            </a>
                                            <a className="dropdown-item" href="#none">
                                                Promotions
                                            </a>
                                            <a className="dropdown-item" href="#none">
                                                Forums
                                            </a>
                                        </div>
                                    </div>

                                    <div className="btn-group">
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-light dropdown-toggle waves-effect"
                                            data-toggle="dropdown"
                                            aria-expanded="false">
                                            <i className="mdi mdi-dots-horizontal font-18"></i> More
                                            <i className="mdi mdi-chevron-down"></i>
                                        </button>

                                        <div className="dropdown-menu">
                                            <span className="dropdown-header">More Option :</span>
                                            <a className="dropdown-item" href="#none">
                                                Mark as Unread
                                            </a>
                                            <a className="dropdown-item" href="#none">
                                                Add to Tasks
                                            </a>
                                            <a className="dropdown-item" href="#none">
                                                Add Star
                                            </a>
                                            <a className="dropdown-item" href="#none">
                                                Mute
                                            </a>
                                        </div>
                                    </div>

                                    <div className="mt-3"> {/* 리스트 */}
                                        <ul className="message-list">
                                            {this.state.contentList.map((data, idx) => {
                                                return(
                                                    <InboxContentComponent
                                                        key={idx}
                                                        unread={data.unread}
                                                        star={data.textWarn}
                                                        title={data.title}
                                                        subject={data.subject}
                                                        teaser={data.teaser}
                                                        date={data.date} />
                                                );
                                            })}
                                        </ul>
                                    
                                    
                                    
                                    </div>
                                    







                                    <div className="row">
                                        <div className="col-7 mt-1">
                                        Showing 1 - 20 of 289
                                        </div>
                                        <div className="col-5">
                                            <div className="btn-group float-right">
                                                <button type="button" className="btn btn-light btn-sm">
                                                <i className="mdi mdi-chevron-left"></i>
                                                </button>
                                                <button type="button" className="btn btn-info btn-sm">
                                                <i className="mdi mdi-chevron-right"></i>
                                                </button>
                                            </div>
                                        </div>
                                        {/* 페이지 전환 버튼 */}
                                    </div>
                                </div>
                                
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
    

export default InboxBoard;