import { FaqWidgetsData } from '@/Data/Miscellaneous/Knowledgebase'
import { Card, CardBody, Col } from 'reactstrap'

const FaqWidgets = () => {
    return (
        <>
            {FaqWidgetsData.map((data) => (
                <Col xl={4} className={data.colClass} key={data.id}>
                    <Card className="bg-primary">
                        <CardBody>
                            <div className="d-flex faq-widgets">
                                <div className="flex-grow-1">
                                    <h3 className="f-w-600 txt-light">{data.title}</h3>
                                    <p>{data.paragraph}</p>
                                </div>
                                {data.icon}
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </>
    )
}

export default FaqWidgets