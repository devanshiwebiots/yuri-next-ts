import { Button, Card, CardBody, Col, InputGroup, InputGroupText } from "reactstrap";
import { CustomForm, CustomFormSubmit, FavoriteChocolatesTitle, FavoriteColorsTitle, FavoriteThemeTitle, OptionsFormGroup, PixelstrapThemeTitle } from "@/Constants";
import CustomFormSelect from "./Common/CustomFormSelect";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ChocolateData, ColorData, CustomFormData, FavoriteThemeData, PixelData } from "@/Data/Forms";

const CustomForms = () => {
  return (
    <Col md="6">
    <Card>
      <CommonCardHeader title={CustomForm} subTitle={CustomFormData} />
      <CardBody className="common-flex main-custom-form">
        <InputGroup>
          <InputGroupText htmlFor="inputGroupSelect01">{OptionsFormGroup}</InputGroupText>
          <CustomFormSelect inputId='inputGroupSelect01' title={PixelstrapThemeTitle} options={PixelData}/>
        </InputGroup>
        <InputGroup>
          <CustomFormSelect inputId='inputGroupSelect02' title={FavoriteColorsTitle} options={ColorData}/>
          <InputGroupText htmlFor="inputGroupSelect02">{OptionsFormGroup}</InputGroupText>
        </InputGroup>
        <InputGroup>
          <Button color='success' outline><i className="icofont icofont-credit-card"></i></Button>
          <CustomFormSelect inputId='inputGroupSelect03' title={FavoriteChocolatesTitle} options={ChocolateData}/>
        </InputGroup>
        <InputGroup>
          <CustomFormSelect inputId='inputGroupSelect04' title={FavoriteThemeTitle} options={FavoriteThemeData}/>
          <Button color='success' outline>{CustomFormSubmit}</Button>
        </InputGroup>
      </CardBody>
    </Card>
  </Col>
  )
};

export default CustomForms;
