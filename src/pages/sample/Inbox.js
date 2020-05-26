import React, { Component } from "react";
import { connect } from "react-redux";

class Inbox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
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

                  <div className="mail-list mt-4">
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
                        32
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

                  <div className="list-group b-0 mail-list">
                    <a href="#none" className="list-group-item border-0">
                      <span className="mdi mdi-circle text-info mr-2"></span>Web
                      App
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
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-light waves-effect"
                    >
                      <i className="mdi mdi-archive font-18"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-light waves-effect"
                    >
                      <i className="mdi mdi-alert-octagon font-18"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-light waves-effect"
                    >
                      <i className="mdi mdi-delete-variant font-18"></i>
                    </button>
                  </div>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-light dropdown-toggle waves-effect"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
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
                      aria-expanded="false"
                    >
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
                      aria-expanded="false"
                    >
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

                  <div className="mt-3">
                    <ul className="message-list">
                      <li className="unread">
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk1" />
                            <label htmlFor="chk1" className="toggle"></label>
                          </div>
                          <span className="star-toggle far fa-star text-warning"></span>
                          <a href="#none" className="title">
                            Lucas Kriebel (via Twitter)
                          </a>
                        </div>
                        <div className="col-mail col-mail-2">
                          <a href="#none" className="subject">
                            Lucas Kriebel (@LucasKriebel) has sent you a direct
                            message on Twitter! &nbsp;&ndash;&nbsp;
                            <span className="teaser">
                              @LucasKriebel - Very cool :) Nicklas, You have a
                              new direct message.
                            </span>
                          </a>
                          <div className="date">11:49 am</div>
                        </div>
                      </li>

                      <li>
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk3" />
                            <label htmlFor="chk3" className="toggle"></label>
                          </div>
                          <span className="star-toggle far fa-star"></span>
                          <a href="#none" className="title">
                            Randy, me (5)
                          </a>
                        </div>
                        <div className="col-mail col-mail-2">
                          <a href="#none" className="subject">
                            Last pic over my village &nbsp;&ndash;&nbsp;
                            <span className="teaser">
                              Yeah i'd like that! Do you remember the video you
                              showed me of your train ride between Colombo and
                              Kandy? The one with the mountain view? I would
                              love to see that one again!
                            </span>
                          </a>
                          <div className="date">5:01 am</div>
                        </div>
                      </li>
                      <li>
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk4" />
                            <label htmlFor="chk4" className="toggle"></label>
                          </div>
                          <span className="star-toggle far fa-star text-warning"></span>
                          <a href="#none" className="title">
                            Andrew Zimmer
                          </a>
                        </div>
                        <div className="col-mail col-mail-2">
                          <a href="#none" className="subject">
                            Mochila Beta: Subscription Confirmed
                            &nbsp;&ndash;&nbsp;{" "}
                            <span className="teaser">
                              You've been confirmed! Welcome to the ruling class
                              of the inbox. For your records, here is a copy of
                              the information you submitted to us...
                            </span>
                          </a>
                          <div className="date">Mar 8</div>
                        </div>
                      </li>
                      <li className="unread">
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk5" />
                            <label htmlFor="chk5" className="toggle"></label>
                          </div>
                          <span className="star-toggle far fa-star"></span>
                          <a href="#none" className="title">
                            Infinity HR
                          </a>
                        </div>
                        <div className="col-mail col-mail-2">
                          <a href="#none" className="subject">
                            Sveriges Hetaste sommarjobb &nbsp;&ndash;&nbsp;
                            <span className="teaser">
                              Hej Nicklas Sandell! Vi vill bjuda in dig till
                              "First tour 2014", ett rekryteringsevent som
                              erbjuder jobb pa 16 semesterorter iSverige.
                            </span>
                          </a>
                          <div className="date">Mar 8</div>
                        </div>
                      </li>
                      <li>
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk6" />
                            <label htmlFor="chk6" className="toggle"></label>
                          </div>
                          <span className="star-toggle far fa-star"></span>
                          <a href="#none" className="title">
                            Web Support Dennis
                          </a>
                        </div>
                        <div className="col-mail col-mail-2">
                          <a href="#none" className="subject">
                            Re: New mail settings &nbsp;&ndash;&nbsp;
                            <span className="teaser">
                              Will you answer him asap?
                            </span>
                          </a>
                          <div className="date">Mar 7</div>
                        </div>
                      </li>
                      <li>
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk7" />
                            <label htmlFor="chk7" className="toggle"></label>
                          </div>
                          <span className="star-toggle far fa-star text-warning"></span>
                          <a href="#none" className="title">
                            me, Peter (2)
                          </a>
                        </div>
                        <div className="col-mail col-mail-2">
                          <a href="#none" className="subject">
                            Off on Thursday &nbsp;&ndash;&nbsp;
                            <span className="teaser">
                              Eff that place, you might as well stay here with
                              us instead! Sent from my iPhone 4 &gt; 4 mar 2014
                              at 5:55 pm
                            </span>
                          </a>
                          <div className="date">Mar 4</div>
                        </div>
                      </li>
                      <li>
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk8" />
                            <label htmlFor="chk8" className="toggle"></label>
                          </div>
                          <span className="star-toggle far fa-star"></span>
                          <a href="#none" className="title">
                            Medium
                          </a>
                        </div>
                        <div className="col-mail col-mail-2">
                          <a href="#none" className="subject">
                            This Week's Top Stories &nbsp;&ndash;&nbsp;
                            <span className="teaser">
                              Our top pick for you on Medium this week The Man
                              Who Destroyed America’s Ego
                            </span>
                          </a>
                          <div className="date">Feb 28</div>
                        </div>
                      </li>
                      <li>
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk9" />
                            <label htmlFor="chk9" className="toggle"></label>
                          </div>
                          <span className="star-toggle far fa-star text-warning"></span>
                          <a href="#none" className="title">
                            Death to Stock
                          </a>
                        </div>
                        <div className="col-mail col-mail-2">
                          <a href="#none" className="subject">
                            Montly High-Res Photos &nbsp;&ndash;&nbsp;
                            <span className="teaser">
                              To create this month's pack, we hosted a party
                              with local musician Jared Mahone here in Columbus,
                              Ohio.
                            </span>
                          </a>
                          <div className="date">Feb 28</div>
                        </div>
                      </li>
                      <li>
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk10" />
                            <label htmlFor="chk10" className="toggle"></label>
                          </div>
                          <span className="star-toggle far fa-star"></span>
                          <a href="#none" className="title">
                            Revibe
                          </a>
                        </div>
                        <div className="col-mail col-mail-2">
                          <a href="#none" className="subject">
                            Weekend on Revibe &nbsp;&ndash;&nbsp;
                            <span className="teaser">
                              Today's Friday and we thought maybe you want some
                              music inspiration for the weekend. Here are some
                              trending tracks and playlists we think you should
                              give a listen!
                            </span>
                          </a>
                          <div className="date">Feb 27</div>
                        </div>
                      </li>
                      <li>
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk11" />
                            <label htmlFor="chk11" className="toggle"></label>
                          </div>
                          <span className="star-toggle far fa-star"></span>
                          <a href="#none" className="title">
                            Erik, me (5)
                          </a>
                        </div>
                        <div className="col-mail col-mail-2">
                          <a href="#none" className="subject">
                            Regarding our meeting &nbsp;&ndash;&nbsp;
                            <span className="teaser">
                              That's great, see you on Thursday!
                            </span>
                          </a>
                          <div className="date">Feb 24</div>
                        </div>
                      </li>
                      <li>
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk12" />
                            <label htmlFor="chk12" className="toggle"></label>
                          </div>
                          <span className="star-toggle far fa-star text-warning"></span>
                          <a href="#none" className="title">
                            KanbanFlow
                          </a>
                        </div>
                        <div className="col-mail col-mail-2">
                          <a href="#none" className="subject">
                            Task assigned: Clone ARP's website
                            &nbsp;&ndash;&nbsp;{" "}
                            <span className="teaser">
                              You have been assigned a task by Alex@Work on the
                              board Web.
                            </span>
                          </a>
                          <div className="date">Feb 24</div>
                        </div>
                      </li>
                      <li>
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk13" />
                            <label htmlFor="chk13" className="toggle"></label>
                          </div>
                          <span className="star-toggle far fa-star"></span>
                          <a href="#none" className="title">
                            Tobias Berggren
                          </a>
                        </div>
                        <div className="col-mail col-mail-2">
                          <a href="#none" className="subject">
                            Let's go fishing! &nbsp;&ndash;&nbsp;
                            <span className="teaser">
                              Hey, You wanna join me and Fred at the lake
                              tomorrow? It'll be awesome.
                            </span>
                          </a>
                          <div className="date">Feb 23</div>
                        </div>
                      </li>
                      <li>
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk14" />
                            <label htmlFor="chk14" className="toggle"></label>
                          </div>
                          <span className="star-toggle far fa-star text-warning"></span>
                          <a href="#none" className="title">
                            Charukaw, me (7)
                          </a>
                        </div>
                        <div className="col-mail col-mail-2">
                          <a href="#none" className="subject">
                            Hey man &nbsp;&ndash;&nbsp;{" "}
                            <span className="teaser">
                              Nah man sorry i don't. Should i get it?
                            </span>
                          </a>
                          <div className="date">Feb 23</div>
                        </div>
                      </li>
                      <li className="unread">
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk15" />
                            <label htmlFor="chk15" className="toggle"></label>
                          </div>
                          <span className="star-toggle far fa-star text-warning"></span>
                          <a href="#none" className="title">
                            me, Peter (5)
                          </a>
                        </div>
                        <div className="col-mail col-mail-2">
                          <a href="#none" className="subject">
                            Home again! &nbsp;&ndash;&nbsp;{" "}
                            <span className="teaser">
                              That's just perfect! See you tomorrow.
                            </span>
                          </a>
                          <div className="date">Feb 21</div>
                        </div>
                      </li>
                      <li>
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk16" />
                            <label htmlFor="chk16" className="toggle"></label>
                          </div>
                          <span className="star-toggle far fa-star"></span>
                          <a href="#none" className="title">
                            Stack Exchange
                          </a>
                        </div>
                        <div className="col-mail col-mail-2">
                          <a href="#none" className="subject">
                            1 new items in your Stackexchange inbox
                            &nbsp;&ndash;&nbsp;{" "}
                            <span className="teaser">
                              The following items were added to your Stack
                              Exchange global inbox since you last checked it.
                            </span>
                          </a>
                          <div className="date">Feb 21</div>
                        </div>
                      </li>
                      <li>
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk17" />
                            <label htmlFor="chk17" className="toggle"></label>
                          </div>
                          <span className="star-toggle far fa-star text-warning"></span>
                          <a href="#none" className="title">
                            Google Drive Team
                          </a>
                        </div>
                        <div className="col-mail col-mail-2">
                          <a href="#none" className="subject">
                            You can now use your storage in Google Drive
                            &nbsp;&ndash;&nbsp;{" "}
                            <span className="teaser">
                              Hey Nicklas Sandell! Thank you for purchasing
                              extra storage space in Google Drive.
                            </span>
                          </a>
                          <div className="date">Feb 20</div>
                        </div>
                      </li>
                      <li className="unread">
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk18" />
                            <label htmlFor="chk18" className="toggle"></label>
                          </div>
                          <span className="star-toggle far fa-star"></span>
                          <a href="#none" className="title">
                            me, Susanna (11)
                          </a>
                        </div>
                        <div className="col-mail col-mail-2">
                          <a href="#none" className="subject">
                            Train/Bus &nbsp;&ndash;&nbsp;{" "}
                            <span className="teaser">
                              Yes ok, great! I'm not stuck in Stockholm anymore,
                              we're making progress.
                            </span>
                          </a>
                          <div className="date">Feb 19</div>
                        </div>
                      </li>
                      <li>
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk19" />
                            <label htmlFor="chk19" className="toggle"></label>
                          </div>
                          <span className="star-toggle far fa-star"></span>
                          <a href="#none" className="title">
                            Peter, me (3)
                          </a>
                        </div>
                        <div className="col-mail col-mail-2">
                          <a href="#none" className="subject">
                            Hello &nbsp;&ndash;&nbsp;{" "}
                            <span className="teaser">
                              Trip home from Colombo has been arranged, then
                              Jenna will come get me from Stockholm. :)
                            </span>
                          </a>
                          <div className="date">Mar. 6</div>
                        </div>
                      </li>
                      <li>
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk20" />
                            <label htmlFor="chk20" className="toggle"></label>
                          </div>
                          <span className="star-toggle far fa-star"></span>
                          <a href="#none" className="title">
                            me, Susanna (7)
                          </a>
                        </div>
                        <div className="col-mail col-mail-2">
                          <a href="#none" className="subject">
                            Since you asked... and i'm inconceivably bored at
                            the train station &nbsp;&ndash;&nbsp;
                            <span className="teaser">
                              Alright thanks. I'll have to re-book that somehow,
                              i'll get back to you.
                            </span>
                          </a>
                          <div className="date">Mar. 6</div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="row">
                    <div className="col-7 mt-1">Showing 1 - 20 of 289</div>
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
                  </div>
                </div>

                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect()(Inbox);
