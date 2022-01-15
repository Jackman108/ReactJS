import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"


const ProfileInfo = (props, style = style) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={style}>
                {/*    <img
                   src='https://razzmatazzfilms.com/blog/wp-content/uploads/2016/12/Professional-Video-Production-Companyin-Delhi-NCR.jpg' alt='Header'/>
            </div>*/}
                <div className={s.descriptionBlock}>
                    <img src={props.profile.photos.large} alt='logo'/>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;
