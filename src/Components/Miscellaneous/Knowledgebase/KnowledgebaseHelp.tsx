import { Search } from "react-feather";
import { Col, Form, FormGroup, Input } from 'reactstrap';
import { ImagePath, KnowledgebaseHelpQue, KnowledgebasePlaceholder } from "@/Constants";
import Image from "next/image";

const KnowledgebaseHelp = () => {
  return (
    <Col xs="12">
      <div className="knowledgebase-bg">
        <Image width={1600} height={500} className="bg-img-cover bg-center" src={`${ImagePath}/knowledgebase/bg_1.jpg`} alt="looginpage"/></div>
      <div className="knowledgebase-search">
        <div>
          <h3 className="f-w-500">{KnowledgebaseHelpQue}</h3>
          <Form onSubmit={(e)=>e.preventDefault()} className="form-inline" method="get">
            <FormGroup className="w-100 m-0">
              <Search/>
              <Input className="w-100 border-0 shadow-none" type="text" placeholder={KnowledgebasePlaceholder}/>
            </FormGroup>
          </Form>
        </div>
      </div>
    </Col>
  );
};

export default KnowledgebaseHelp;
