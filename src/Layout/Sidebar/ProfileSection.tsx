import SvgIcon from '@/CommonComponents/CommonIcons/CommonSvgIcons'
import { ImagePath, WadeWarren } from '@/Constants'
import Image from 'next/image'

export default function ProfileSection() {
    return (
        <div className="profile-section sidebar-search">
            <div className="profile-wrapper">
                <div className="active-profile">
                    <Image height={50} width={50} className="img-fluid" src={`${ImagePath}/user.png`} alt="user" />
                    <div className="status bg-success"> </div>
                </div>
                <div>
                    <h4>{WadeWarren}</h4>
                    <span>{'UI Designer'}</span>
                </div>
            </div>
            <div>
                <SvgIcon iconId='profile-setting' />
            </div>
        </div>
    )
}
