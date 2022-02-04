import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {compose} from "redux";

const withRouter = WrappedComponent => props => {

    const params = useParams();
    return (
        <WrappedComponent{...props} params={params} />
    );
};



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 21385;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }


    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});


let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(WithUrlDataContainerComponent);

