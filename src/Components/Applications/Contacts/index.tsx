import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Container, Row } from 'reactstrap'
import { AppDispatch } from '../../../ReduxToolkit/Store';
import { fetchContacts } from '../../../ReduxToolkit/Reducers/ContactReducer';
import LeftContactAside from './LeftContactAside';
import RightContactAside from './RightContactAside';

export default function ContactsContainer() {
    const dispatch = useDispatch<AppDispatch>();
    const [activeTab, setActiveTab] = useState(1);
    const changeTab = useCallback((tab: number) => {
        setActiveTab(tab);
    }, []);
    useEffect(() => {
        dispatch(fetchContacts());
    }, []);
    return (
        <Container fluid>
            <div className="email-wrap bookmark-wrap">
                <Row>
                    <LeftContactAside activeTab={activeTab} setActiveTab={setActiveTab} changeTab={changeTab} />
                    <RightContactAside activeTab={activeTab} />
                </Row>
            </div>
        </Container>
    )
}
