import { VerticalVariationTitle } from '@/Constants'
import { verticalVariationData, verticalVariationDropdownData } from '@/Data/Buttons'
import { Fragment } from 'react'
import { Button, ButtonGroup, Col, Input, Label } from 'reactstrap'
import DropdownCommon from '../../CommonButtonDropdown'

export default function VerticalVariation() {
    return (
        <Col md={6}>
            <div className="card-wrapper border rounded-3 h-100">
                <h6 className="sub-title fw-bold">{VerticalVariationTitle}</h6>
                <div className="d-flex gap-3 align-items-end flex-wrap">
                    <ButtonGroup vertical>
                        {verticalVariationData.map((item) => (
                            <Button color={item.color} key={item.id}>{item.title}</Button>
                        ))}
                    </ButtonGroup>
                    <ButtonGroup vertical className="buttons-box">
                        <Button color='light-primary'>{'light-primary'}</Button>
                        <Button color='light-dark'>{'light-dark'}</Button>
                        {verticalVariationDropdownData.map((data, index) => (
                            <DropdownCommon key={index} item={data} />
                        ))}
                    </ButtonGroup>
                    <ButtonGroup vertical>
                        {[...Array(3)].map((item, index) => (
                            <Fragment key={index}>
                                <Input className="btn-check" id={`vbtn-radio${index+1}`} type="radio" name="vbtn-radio" defaultChecked={index+1 === 1 ? true : false} />
                                <Label className={`btn btn-outline-primary ${index+1 === 3 ? 'mb-0' : ''}`} htmlFor={`vbtn-radio${index+1}`}>{`Radio ${index+1}`}</Label>
                            </Fragment>
                        ))}
                    </ButtonGroup>
                </div>
            </div>
        </Col>
    )
}
