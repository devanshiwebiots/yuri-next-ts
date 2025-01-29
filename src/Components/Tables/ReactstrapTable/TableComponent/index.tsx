import {  AlertTitle,  BadgesTable,  CheckboxTitle,  InputsTable,  ProgressbarTitle,  RadioButtonsTitle,  SelectTable,  SwitchTable,  TooltipTriggersTitle,  UIComponentsTitle,} from "@/Constants";
import {  AlertTableData,  BadgeTableData,  CheckBoxTableData,  InputTableData,  ProgressTableData,  RadioBoxTableData,  SelectBoxTableData,  SwitchTableData,  TooltipTableData,  UiComponentData,} from "@/Data/Table/ReactstrapTable/TableComponent";
import { Container, Row } from "reactstrap";
import { CommonTableComponent } from "./Common/CommonTableComponent";

const TableComponentContainer = () => {
  return (
    <Container fluid>
      <Row>
        <CommonTableComponent
          title={UIComponentsTitle}
          data={UiComponentData}
        />
        <CommonTableComponent title={AlertTitle} data={AlertTableData} />
        <CommonTableComponent
          title={ProgressbarTitle}
          data={ProgressTableData}
          tableClass="checkbox-td-width"
        />
        <CommonTableComponent
          title={CheckboxTitle}
          data={CheckBoxTableData}
          tableClass="checkbox-td-width"
        />
        <CommonTableComponent
          title={RadioButtonsTitle}
          data={RadioBoxTableData}
          tableClass="radio-first-col-width"
        />
        <CommonTableComponent
          title={SelectTable}
          data={SelectBoxTableData}
          tableClass="checkbox-td-width"
        />
        <CommonTableComponent
          title={InputsTable}
          data={InputTableData}
          tableClass="checkbox-td-width"
        />
        <CommonTableComponent title={BadgesTable} data={BadgeTableData} />
        <CommonTableComponent
          title={TooltipTriggersTitle}
          data={TooltipTableData}
        />
        <CommonTableComponent title={SwitchTable} data={SwitchTableData} />
      </Row>
    </Container>
  );
};

export default TableComponentContainer;
