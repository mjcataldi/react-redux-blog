import React from 'react';
import { connect } from 'react-redux';


class UserHeader extends React.Component {
    constructor(props){
        super(props);

        this.state = {};
    }

    componentDidMount(){
        this.props.fetchUser(this.props.userId);
    }


    render(){
        const { user } = this.props;

        if (!user){
            return null;
        }

        return (
            <div className="header">user.name}</div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find( user => user.Id === ownProps.userId )};
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);