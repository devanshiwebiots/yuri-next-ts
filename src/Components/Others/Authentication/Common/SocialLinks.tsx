import React from 'react'
import Link from 'next/link'
import { Facebook, Linkedin, Twitter } from 'react-feather'
import { CreateAccount, FacebookLink, LinkedIn, SignInWith, TwitterLink } from '@/Constants'
import { SocialLinksProp } from '@/Types/Others'

export default function SocialLinks({ logtext, btntext }: SocialLinksProp) {
    return (
        <>
            <h6 className="text-muted mt-4 or">{SignInWith}</h6>
            <div className="social mt-4">
                <div className="btn-showcase">
                    <Link href="https://www.linkedin.com/login" className='btn btn-light me-1' target='_blank'>
                        <Linkedin className='txt-linkedin' /> {LinkedIn}
                    </Link>
                    <Link href="https://twitter.com/login?lang=en" className='btn btn-light me-1' target='_blank'>
                        <Twitter className='txt-twitter' /> {TwitterLink}
                    </Link>
                    <Link href="https://www.facebook.com/" className='btn btn-light' target='_blank'>
                        <Facebook className='txt-fb' /> {FacebookLink}
                    </Link>
                </div>
            </div>
            <p className="mt-4 mb-0 text-center">
                {logtext ? logtext : "Don't have account?"}
                {!logtext && !btntext ? (
                    <Link className="ms-2" href={`${process.env.PUBLIC_URL}/auth/auth/sign-up`}>{CreateAccount}</Link>
                ) : (
                    <Link href={`${process.env.PUBLIC_URL}/auth/auth/login`} className='ms-2'>{btntext}</Link>
                )}
            </p>
        </>
    )
}
