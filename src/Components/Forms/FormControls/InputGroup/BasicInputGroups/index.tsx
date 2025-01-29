import { Card, Col } from "reactstrap";
import { BasicInputGroup } from "@/Constants";
import { BasicInputGroupsCardBody } from "./BasicInputGroupsCardBody";
import { BasicInputGroupsCardFooter } from "./BasicInputGroupsCardFooter";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BasicInputGroupData } from "@/Data/Forms";

const BasicInputGroups = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={BasicInputGroup} subTitle={BasicInputGroupData} />
        <BasicInputGroupsCardBody/>
        <BasicInputGroupsCardFooter />
      </Card>
    </Col>
  );
};

export default BasicInputGroups;
