import React, { useEffect } from 'react'
import { Badge, Card, CardBody } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
// import { JobSearchItems, RightSidebarCardProps } from '@/Types/JobSearch'
import PaginationCard from './PaginationCard';
import { Href, ImagePath, Ribbon } from '@/Constants';
import Image from 'next/image';
import { JobSearchItems, RightSidebarCardProps } from '@/Types/JobSearch';
import { useAppDispatch, useAppSelector } from '@/ReduxToolkit/Hooks';
import { fetchJobSearchData } from '@/ReduxToolkit/Reducers/JobSearchReducer';

export default function RightSidebarCards({ limit, colClass }: RightSidebarCardProps) {
    const { jobList } = useAppSelector((state) => state.jobSearch);
    const dispatch = useAppDispatch();
    useEffect(() => { dispatch(fetchJobSearchData()); }, []);
    return (
        <>
            {jobList.slice(0, limit).map((item: JobSearchItems, i: number) => (
                <div className={colClass} key={i}>
                    <Card className={item.ribbon ? "ribbon-vertical-left-wrapper" : ""}>
                        {item.ribbon && (
                            <div className="ribbon ribbon-bookmark ribbon-vertical-left ribbon-primary">
                                <i className="icofont icofont-love"></i>
                            </div>
                        )}
                        <div className="job-search">
                            <CardBody>
                                <div className="d-flex">
                                    <Image height={50} width={50} className="img-40 img-fluid m-r-20" src={`${ImagePath}/job-search/${item.logo}`} alt="" />
                                    <div className="flex-grow-1">
                                        <h6 className="f-w-600">
                                            <a href={Href}>{item.job_name}</a>
                                            {item.badgeValue ?
                                                (
                                                    <Badge color="primary" className="pull-right">
                                                        {item.type}
                                                    </Badge>
                                                ) :
                                                (<span className="pull-right">{item.type}</span>)
                                            }
                                        </h6>
                                        <p className="mt-0">
                                            {item.job_area} <span>{item.job_city}</span>
                                            <span><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i></span>
                                        </p>
                                    </div>
                                </div>
                                <p>{item.Job_description}</p>
                            </CardBody>
                        </div>
                    </Card>
                </div>
            ))}
            <PaginationCard />
        </>
    )
}
