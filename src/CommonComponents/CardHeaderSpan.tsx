import React from 'react'
import { CardHeader } from 'reactstrap'

export default function CardHeaderSpan({ headerClass, smallHeading, spanClass, heading, span, span2, headingClass, span2Class }: any) {
    return (
        <CardHeader className={headerClass ? headerClass : ""}>
            {smallHeading ? <h5>{smallHeading}</h5> : <h2 className={headingClass ? headingClass : ""}>{heading}</h2>}
            {span && <span className={spanClass ? spanClass : ''} dangerouslySetInnerHTML={{ __html: span }} />}
            {span2 && <span className={span2Class ? span2Class : ''} dangerouslySetInnerHTML={{ __html: span2 }} />}
        </CardHeader>
    )
}