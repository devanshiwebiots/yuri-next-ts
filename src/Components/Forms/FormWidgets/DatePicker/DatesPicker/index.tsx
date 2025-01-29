import { Form, Card, CardBody, Col} from "reactstrap";
import DatePickerComponentFirst from "./DatePickerComponentFirst";
import { DatePicker } from "@/Constants";
import HumanFriendlyDatePicker from "./HumanFriendlyDatePicker";
import MinMaxValueDatePicker from "./MinMaxValueDatePicker";
import DisabledDatePickerComponent from "./DisabledDatePickerComponent";
import { MultiplesDates } from "./MultiplesDates";
import MyDatePicker from "./MyDatePicker";
import DatePickerComponentLast from "./DatePickerComponentLast";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";

const DatesPicker = () => {
  return (
    <Col xl="6">
      <Card className="title-line">
        <CommonCardHeader title={DatePicker} />
        <CardBody className="main-flatpickr">
          <div className="card-wrapper border rounded-3">
            <Form className="timepicker-wrapper">
              <DatePickerComponentFirst />
              <HumanFriendlyDatePicker />
              <MinMaxValueDatePicker />
              <DisabledDatePickerComponent />
              <MultiplesDates />
              <MyDatePicker />
              <DatePickerComponentLast />
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DatesPicker;
