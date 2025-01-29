import { ImagePath } from '@/Constants'
import Image from 'next/image'
import React from 'react'

export default function ProfileHeader() {
    return (
        <div className="common-flex align-items-center">
            <div className="media-size-email">
                <Image height={50} width={50} className="rounded-circle" src={`${ImagePath}/user/user.png`} alt="" />
            </div>
            <div className="flex-grow-1">
                <h6 className="f-w-600">{'MARK JENCO'}</h6>
                <p>{'Markjecno@gmail.com'}</p>
            </div>
        </div>
    )
}
