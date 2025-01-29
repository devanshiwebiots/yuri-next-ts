import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { EmptyDataProp } from '../../../../../Types/Contact.type'
import CommonCardHeader from '@/CommonComponents/CommonCardHeader'

export default function EmptyData({ title }: EmptyDataProp) {
    return (
        <Card className="mb-0">
            {title && <CommonCardHeader headClass="d-flex" title={title}
                subTitle={[{ text: '0 Contacts' }]} />}
            <CardBody>
                <p className='text-center'>{'No Contact Found'} </p>
            </CardBody>
        </Card>
    )
}