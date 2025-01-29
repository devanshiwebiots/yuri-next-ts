import { HorizontalVariationTitle } from '@/Constants'
import { horizontalVariationDropdown, horizontalVariationOutline, horizontalVariationdata } from '@/Data/Buttons'
import { Fragment } from 'react'
import { Button, ButtonGroup, Col, Input, Label } from 'reactstrap'
import DropdownCommon from '../../CommonButtonDropdown'
// import DropdownCommon from '../../../../Utils/CommonComponents/DropdownCommon'

export default function HorizontalVariation() {
    return (
        <Col xs={12}>
            <div className="card-wrapper border rounded-3 h-100">
                <h6 className="sub-title fw-bold">{HorizontalVariationTitle}</h6>
                <div className="button-wrapper button-box">
                    <ButtonGroup>
                        {horizontalVariationOutline.map((item, index) => (
                            <Button outline color='primary' key={index}>{item}</Button>
                        ))}
                    </ButtonGroup>
                    <ButtonGroup>
                        {horizontalVariationdata.map((item) => (
                            <Button key={item.id} color={item.color}>{item.title}</Button>
                        ))}
                        {horizontalVariationDropdown.map((item, index) => (
                            <DropdownCommon key={index} item={item} />
                        ))}
                    </ButtonGroup>
                    <ButtonGroup className="select-checkbox">
                        {[...Array(3)].map((item, index) => (
                            <Fragment key={index}>
                                <Input className="btn-check" id={`btncheck${index+1}`} type="checkbox" />
                                <Label className={`btn btn-outline-${index+1 !== 2 ? 'success' : 'primary'} mb-0`} htmlFor={`btncheck${index+1}`}>{`Checkbox ${index+1}`}</Label>
                            </Fragment>
                        ))}
                    </ButtonGroup>
                </div>
            </div>
        </Col>
    )
}
