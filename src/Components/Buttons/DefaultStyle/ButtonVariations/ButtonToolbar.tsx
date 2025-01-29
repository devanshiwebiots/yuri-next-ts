import { ButtonToolbarTitle } from '@/Constants'
import { buttonToolbarData } from '@/Data/Buttons'
import { Button, ButtonGroup, ButtonToolbar, Col } from 'reactstrap'

export default function ButtonToolbarCard() {
    return (
        <Col xs={12}>
            <div className="card-wrapper border rounded-3 h-100">
                <h6 className="sub-title fw-bold">{ButtonToolbarTitle}</h6>
                <ButtonToolbar>
                    {buttonToolbarData.map((data) => (
                        <ButtonGroup key={data.id}>
                            {data.child.map((item) => (
                                <Button key={item.id} color={item.color}>{item.text}</Button>
                            ))}
                        </ButtonGroup>
                    ))}
                </ButtonToolbar>
            </div>
        </Col>
    )
}
