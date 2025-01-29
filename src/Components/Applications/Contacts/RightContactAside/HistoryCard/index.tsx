import React from 'react'
import { ModalHeader } from 'reactstrap'
import { HistoryCardProps } from '../../../../../Types/Contact.type'

export default function HistoryCard({ historyToggle, showHistory }: HistoryCardProps) {
    return (
        <div className={showHistory ? 'show' : ''} id="right-history">
            <ModalHeader className="p-20 w-100 d-flex align-items-center justify-content-between" toggle={historyToggle}>{'Contact History'}</ModalHeader>
            <div className='history-details'>
                <div className='text-center'>
                    <i className='icofont icofont-ui-edit'></i>
                    <p>{'Contact has not been modified yet.'}</p>
                </div>
                <div className="d-flex gap-2">
                    <i className='icofont icofont-star me-3'></i>
                    <div className="flex-grow-1 mt-0">
                        <h6 className='mt-0'>{'Contact Created'}</h6>
                        <p className='mb-0'>{'Contact is created via mail'}</p>
                        <span className='f-12'>{'Sep 10, 2024 4:00'}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

