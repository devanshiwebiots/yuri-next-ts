import { Href, ImagePath } from '@/Constants';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { ContactDetailsProps } from '../../../../../../Types/Contact.type';
import EmptyData from '../../Common/EmptyData';
import EditDeleteLink from './EditDeleteLink';
import PrintModal from './PrintModal';

export default function ContactDetails({ selectedUser, userEditCallback, historyToggle }: ContactDetailsProps) {
    const [printModal, setPrintModal] = useState(false);
    const togglePrintModal = () => setPrintModal(!printModal);
    const toggleCallback = useCallback((toggle: boolean) => {
        setPrintModal(toggle);
    }, []);

    return (
        <div>
            {selectedUser ? (
                <div className="profile-mail">
                    <div className="d-flex">
                        <Image height={50} width={50} className="img-fluid m-r-20 rounded-circle update_img_0" src={`${ImagePath}/${selectedUser.avatar}`} alt="" />
                        <div className="flex-grow-1 mt-0">
                            <h3><span className="first_name_0">{selectedUser.name} </span><span className="last_name_0">{selectedUser.surname}</span></h3>
                            <p className="email_add_0">{selectedUser.email}</p>
                            <ul className='simple-list flex-row'>
                                <EditDeleteLink userEditCallback={userEditCallback} selectedUser={selectedUser} />
                                <li><a href={Href} onClick={() => historyToggle()}>{'History'}</a></li>
                                <li><a href={Href} onClick={() => togglePrintModal()}>{'Print'}</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="email-general">
                        <h6 className="mb-3">{'General'}</h6>
                        <ul className='simple-list'>
                            <li>{'Name'} <span className="font-primary first_name_0">{selectedUser.name}</span></li>
                            <li>{'Mobile No'}<span className="font-primary mobile_num_0">{selectedUser.mobile}</span></li>
                            <li>{'Email Address'}<span className="font-primary email_add_0">{selectedUser.email}</span></li>
                        </ul>
                    </div>
                </div>
            ) : (<EmptyData />)}
            {selectedUser && <PrintModal toggleCallback={toggleCallback} printModal={printModal} selectedUser={selectedUser} />}
        </div>
    )
}
