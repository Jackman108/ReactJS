import React from 'react';
import s from './ProfileInfo.module.css';
import {render} from "react-dom";


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        title: 'YO'
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
                </div>}
            </div>

        )
    }
}

export default ProfileStatus;
