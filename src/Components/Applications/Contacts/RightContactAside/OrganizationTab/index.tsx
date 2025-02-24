import { useCallback, useState } from 'react';
import { Card, CardBody, Col, Row, TabContent, TabPane } from 'reactstrap';
import { organizationList } from '@/Data/Applications/Contacts';
import NavOrganization from './NavOrganization';
import OrganizationTabPane from './OrganizationTabPane';
import CardHeaderSpan from '@/CommonComponents/CardHeaderSpan';

export default function OrganizationTab() {
  const [orgActiveTab, setOrgActiveTab] = useState(1);
  const [printModal, setPrintModal] = useState(false);
  const togglePrintModal = () => setPrintModal(!printModal);
  const toggleCallback = useCallback((toggle: boolean) => {
      setPrintModal(toggle);
  }, []);
  return (
    <Card className="mb-0">
      <CardHeaderSpan headerClass='d-flex' smallHeading='Organization 'spanClass='f-14 pull-right mt-0' span={'5 Contacts'} />
      <CardBody className="p-0">
        <Row className="list-persons">
          <NavOrganization orgActiveTab={orgActiveTab} setOrgActiveTab={setOrgActiveTab} />
          <Col xl={8} md={7} className="xl-50">
            <TabContent activeTab={orgActiveTab}>
              {organizationList.map((user) => (
                <TabPane tabId={user.id} key={user.id}>
                  <OrganizationTabPane user={user} />
                </TabPane>
              ))}
            </TabContent>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}
