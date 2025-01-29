import { Href, ImagePath } from '@/Constants';
import Image from 'next/image';
import { Col, Nav, NavLink } from 'reactstrap';
import { organizationList } from '../../../../../Data/Applications/Contacts';
import { NavOrganizationProps } from '../../../../../Types/Contact.type';

export default function NavOrganization({ orgActiveTab, setOrgActiveTab }: NavOrganizationProps) {
    return (
        <Col xl={4} md={5} className='xl-50'>
            <Nav className='flex-column' pills>
                {organizationList.map((item) => (
                    <NavLink key={item.id} href={Href} className={orgActiveTab === item.id ? 'active' : ''} onClick={() => { setOrgActiveTab(item.id); }}>
                        <div className="d-flex">
                            <Image height={50} width={50} className='img-50 img-fluid m-r-20 rounded-circle' src={`${ImagePath}/${item.image}`} alt='' />
                            <div className="flex-grow-1">
                                <h3>{item.name}</h3>
                                <p>{item.email}</p>
                            </div>
                        </div>
                    </NavLink>
                ))}
            </Nav>
        </Col>
    )
}
