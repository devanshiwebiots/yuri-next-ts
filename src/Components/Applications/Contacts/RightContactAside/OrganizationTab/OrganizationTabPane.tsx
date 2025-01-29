import { Href, ImagePath } from '@/Constants'
import Image from 'next/image'
import { OrganizationTabPaneProps } from '../../../../../Types/Contact.type'

export default function OrganizationTabPane({ user }: OrganizationTabPaneProps) {
    return (
        <div className='profile-mail'>
            <div className="d-flex">
                <Image height={50} width={50} className='img-100 img-fluid m-r-20 rounded-circle update_img_5' src={`${ImagePath}/${user.image}`} alt='' />
                <div className="flex-grow-1 mt-0">
                    <h3>
                        <span className='first_name_5'>{user.name}</span>
                    </h3>
                    <p className='email_add_5'>{user.email}</p>
                </div>
            </div>
            <div className='email-general'>
                <h3>{'General'}</h3>
                <p>{'Email Address'}: <span className='font-primary email_add_5'>{user.email}</span></p>
                <div className='gender'>
                    <h3>{'Personal'}</h3>
                    <p>{'Gender'}: <span>{user.gender}</span></p>
                </div>
            </div>
        </div>
    )
}
