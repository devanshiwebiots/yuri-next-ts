import { Apply, Href, ImagePath, Share } from '@/Constants'
import { jobDescriptionData } from '@/Data/JobSearch'
import { useAppSelector } from '@/ReduxToolkit/Hooks'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Card, CardBody } from 'reactstrap'

export default function ProductDesignerCard() {
    
    return (
        <Card>
            <div className="job-search">
                <CardBody>
                    <div className="d-flex"><Image height={50} width={50} className="img-40 img-fluid m-r-20" src={`${ImagePath}/job-search/1.jpg`} alt="" />
                        <div className="flex-grow-1">
                            <h6 className="f-w-600">
                                <a href={Href}>Product Designer</a>
                                <span className="pull-right">
                                    <Link href={`/miscellaneous/job-search/job-apply`}>
                                        <Button color='primary'>{Apply}</Button>
                                    </Link>
                                </span>
                            </h6>
                            <p>{'Endless - United States'}
                                <span><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i></span>
                            </p>
                        </div>
                    </div>
                    <div className="job-description">
                        <h4 className="f-w-600 pb-1">Job Description</h4>
                        <p>{'Endless is looking for a UI/UX Designer to join our team. The world is seeing an explosion in the amount and variety of location-baWe are looking for a versatile UX/UI Designer to join our growing design team. Our designers contribute to clients’ projects at all stages of development. We might start from scratch, conducting user and stakeholder interviews, making personas and journey maps, and continue on to iterating on designs and prototypes through delivering final assets for launch. We might come into the middle of an in-flight program-size project and conduct analysis and usability correction or feature enhancement. We might provide research and vision for handoff to an internal development team.'}</p>
                    </div>
                    {jobDescriptionData.map((data) => (
                        <div className="job-description" key={data.id}>
                            <h4 className="f-w-600 pb-1">{data.title}</h4>
                            <ul className='simple-list'>
                                {data.child.map((item) => (
                                    <li key={item.id}>{item.list}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="job-description">
                        <Button color='primary' className='me-2'><span><i className="fa fa-check"></i></span> Save This Job</Button>
                        <Button color='primary'><span><i className="fa fa-share-alt"></i></span> {Share}</Button>
                    </div>
                </CardBody>
            </div>
        </Card>
    )
}
