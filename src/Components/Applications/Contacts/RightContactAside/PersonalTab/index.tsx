import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardBody, Col, Row, TabContent, TabPane } from 'reactstrap';
// import { PersonalTabProp, UserCallbackUserType, UserUpdateType } from '../../../../../Types/Contact.type';
import { RootState } from '../../../../../ReduxToolkit/Store';
import { UserCallbackUserType, UserUpdateType } from '@/Types/Contact.type';
import { setEditRow } from '../../../../../ReduxToolkit/Reducers/ContactReducer';
import ContactDetails from './ContactDetails';
import NewContactList from './NewContactList';
import UpdateUserForm from './UpdateUserForm';
import CardHeaderSpan from '@/CommonComponents/CardHeaderSpan';
import { Contacts, Personal } from '@/Constants';

export default function PersonalTab({ historyToggle }: any) {
    const { users } = useSelector((state: RootState) => state.contact);
    const dispatch = useDispatch();
    const [selectedUser, setSelectedUser] = useState<undefined | UserCallbackUserType | UserUpdateType>();
    const [editing, setEditing] = useState(false);
    const [editData, setEditData] = useState({});
    const userCallback = useCallback((user: UserCallbackUserType) => {
        setSelectedUser(user);
    }, []);
    const userEditCallback = useCallback((edit: boolean, usersData: UserUpdateType) => {
        setEditData(usersData);
        setSelectedUser(usersData);
        setEditing(edit);
        dispatch(setEditRow(usersData));
    }, []);
    return (
        <Card className="mb-0">
            <CardHeaderSpan headerClass='d-flex' smallHeading={Personal} spanClass='f-14 pull-right mt-0' span={`${users.length} ${Contacts}`} />
            <CardBody className="p-0">
                <Row className="list-persons">
                    <NewContactList users={users} userCallback={userCallback} />
                    <Col xl={8} md={7} className="xl-50">
                        {editing ? (
                            <UpdateUserForm editData={editData} userEditCallback={userEditCallback} />
                        ) : (
                            <TabContent activeTab={0}>
                                <TabPane tabId={0}>
                                    <ContactDetails historyToggle={historyToggle} selectedUser={selectedUser ? selectedUser : users[0]} userEditCallback={userEditCallback} />
                                </TabPane>
                            </TabContent>
                        )}
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}

