function Welcome(props) {
    return <h1>Hello, {props.name} </h1>;
}

const element = <Welcome name = "Sara" />;

ReactDOM.render(
    element,
    document.getElementById('root')
);


function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    return (
        <div>
            <Welcome name = "Sara" />
            <Welcome name = "Cahal" />
            <Welcome name = "Edite" />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

function formatDate(date) {
    return date.toLocaleDateString();
}

function Comment(props) {
    return (
        <div className = "Comment">
            <div className = "UserInfo">
                <img className = "Avatar"
                    src = {props.author.avatarUrl}
                    alt = {props.author.name}
                />
                <div className = "UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className = "Comment=text">
                {props.text}
            </div>
            <div className = "Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl:
        'https://placekitten.com/g/64/64',
    },
};

ReactDOM.render(
    <Comment
        date = {comment.date}
        text = {comment.text}
        author = {comment.author}
    />,
    document.getElementById('root')
);


function formatDate(date) {
    return date.toLocaleDateString();
}

function Avatar(props) {
    return (
        <img
            className = "Avatar"
            src = {props.user.avatarUrl}
            alt = {props.user.name} 
        />
    );
}

function UserInfo(props) {
    return (
        <div className = "UserInfo">
            <Avatar user = {props.user} />
            <div className = "UserInfo-name">{props.user.name}</div>
        </div>
    );
}

function Comment(props) {
    return (
        <div className = "Comment">
            <UserInfo user = {props.author} />
            <div className = "Comment-text">{props.text}</div>
            <div className = "Comment-date">{formatDate(props.date)}
            </div>
        </div>
    );
}


function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);

function Clock(props) {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}

class Clock extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

function tick() {
    ReactDOM.render (
        <Clock date = {new Date()} />,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

ReactDOM.render (
    <Clock />,
    document.getElementById('root')
);


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

ReactDOM.render (
    <Clock />,
    document.getElementById('root')
);


componentDidMount() {
    this.timerID = setInterval(
        () => this.tick(), 1000
    );
}

componentWillUnmount() {
    clearInterval(this.timerID);
}


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 
            1000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render (
    <Clock />,
    document.getElementById('root')
);



function UserGreeting(props) {
    return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

ReactDOM.render(
    // Try changing to isLoggedIn = {true}:
    <Greeting isLoggedIn = {false} />,
    document.getElementById('root')
);

function LoginButton(props) {
    return (
        <button onClick = {props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick = {props.onClick}>
            Logout
        </button>
    )
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let     button;
        if (isLoggedIn) {
            button = <LogoutButton onClick = {this.handleLogoutClick} />;
        }
        else
        {
            button = <LoginButton onClick = {this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn = {isLoggedIn} />
                {button}
            </div>
        );
    }
}

ReactDOM.render (
    <LoginControl />,
    document.getElementById('root')
);

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
                <h2>
                    You have {unreadMessages.length} unread messages.
                </h2>
            }
        </div>
    );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render (
    <Mailbox unreadMessages = {messages} />,
    document.getElementById('root')
);

render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
        <div>
            The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
        </div>
    );
}

render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        {isLoggedIn
          ? <LogoutButton onClick={this.handleLogoutClick} />
          : <LoginButton onClick={this.handleLoginClick} />
        }
      </div>
    );
}


function WarningBanner(props) {
    if (!props.warn) {
      return null;
    }
  
    return (
      <div className="warning">
        Warning!
      </div>
    );
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
  
    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }
  
    render() {
      return (
        <div>
          <WarningBanner warn={this.state.showWarning} />
          <button onClick={this.handleToggleClick}>
            {this.state.showWarning ? 'Hide' : 'Show'}
          </button>
        </div>
      );
    }
  }



