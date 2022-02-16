import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.jpg"

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length){
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div>
                <div className={s.descriptionBlock}>
                    <img src={profile.photos.large || userPhoto} className={s.mainPhoto} alt='logo'/>
                    {isOwner && <input type={"file"} accept=".jpg, .jpeg, .png"
                                       onChange={onMainPhotoSelected}
                    className={s.buttonChange}/>}
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;
