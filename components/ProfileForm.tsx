'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FORM_SLIDES } from './FormSlider/constants';

const ProfileForm = () => {

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    function showNext() {
        setCurrentIndex((index) => {
            if (index === FORM_SLIDES.length - 1) return 0; 
            return index + 1;
        })
    }

    function showPrev() {
        setCurrentIndex((index) => {
            if (index === 0) return FORM_SLIDES.length - 1;
            return index - 1;
        })
    }

    return (
        <div>
            <div className='flex flex-col md:w-full'>
                <div className='flex justify-between items-center md:px-8 py-2 w-full bg-white'>
                    <Link href={'/'} className='hidden md:block'>
                        <Image src={'/assets/logo.svg'} alt='Synto logo' width={180} height={140} className='md:w-auto w-[120px]'/>
                    </Link>
                    <div className='flex justify-end gap-4 py-1 px-2 md:px-0'>
                            <Link href={'/training-and-licences'}><button className='md:h-full text-[#326B88] border-[#326B88] border rounded-md md:px-4 hover:bg-[#326B88] hover:text-white duration-500 cursor-pointer'>Training and Licences</button></Link>
                            <Link href={'/business-market'}><button className='md:h-full text-[#326B88] border-[#326B88] border rounded-md md:px-4 hover:bg-[#326B88] hover:text-white duration-500 cursor-pointer'>Search Jobs</button></Link>
                        <img src="/assets/images/cv.png" alt="Profile picture" className='rounded-full md:w-10 w-16' />
                    </div>
                </div>
                <div className='bg-[#FAFAFB] w-full flex justify-center gap-12 px-2 md:px-0'>
                    <div className='flex flex-col rounded-2xl my-4 md:w-[900px] px-4 bg-white border'>
                        <div className='border-b'>
                            <h1 className='text-3xl h-bold py-3 pl-4'>Create profile</h1>
                        </div>
                        <div className='flex gap-80 md:w-[850px] mx-auto'>
                            <div className='pt-4 pl-2'>
                                <Image src={'/assets/images/cv.png'} alt='Profile picture' width={160} height={160} className='ml-6 mt-4 md:w-[150px] w-36'/>
                            </div>
                            <div className='mt-12 flex-col gap-2 items-end hidden md:block'>
                                {
                                    currentIndex === 0 ?
                                    <div>
                                        <p className='text-[#FF8149] text-lg pb-2'>25% completed</p>
                                        <div className='bg-gradient-to-r from-[#FF8149] to-[#7087E5] h-[30px] w-[60px] rounded-3xl duration-500' />
                                    </div>
                                    :
                                    currentIndex === 1 ?
                                    <div>
                                        <p className='text-[#FF8149] text-lg pb-2'>50% completed</p>
                                        <div className='bg-gradient-to-r from-[#FF8149] to-[#7087E5] h-[30px] w-[120px] rounded-3xl duration-500' />
                                    </div>
                                    :
                                    currentIndex === 2 ?
                                    <div>
                                        <p className='text-[#7087E5] text-lg pb-2'>75% completed</p>
                                        <div className='bg-gradient-to-r from-[#FF8149] via-[#7087E5] to-[#3EC1AA] h-[30px] w-[180px] rounded-3xl duration-500' />
                                    </div>
                                    :
                                    currentIndex === 3 ?
                                    <div>
                                        <p className='text-[#3EC1AA] text-lg pb-2'>100% completed</p>
                                        <div className='bg-gradient-to-r from-[#FF8149] via-[#7087E5] to-[#3EC1AA] h-[30px] w-[240px] rounded-3xl duration-500' />
                                    </div>
                                    : ''
                                }
                            </div>
                            <div className='hidden flex-col gap-1 text-center items-center pt-8 pr-8'>
                                <Image src={'/assets/images/profileStrength.png'} alt='percentage of strength' width={140} height={120} />
                                <p className='h-bold'>Profile Strength</p>
                                <p>Want to stand out?</p>
                                <button className='text-[#326B88] border rounded-3xl border-[#326B88] md:px-6 px-2 py-1 hover:bg-[#326B88] hover:text-white duration-500 cursor-pointer'>Go Premium!</button>
                            </div>
                        </div>

                        <form className='md:flex overflow-hidden'>

                            {
                                FORM_SLIDES.map((val, index) => {
                                    return(
                                        <div
                                            className='flex flex-col duration-700 md:min-w-[850px] md:px-4 py-6 md:py-0'
                                            key={index}
                                            style={{
                                                translate: `${-100 * currentIndex}%`,
                                            }}
                                        >
                                            <div className='flex items-center justify-between py-8'>
                                                <div className='flex items-center'>
                                                    <Image src={val.vector} alt='' width={35} height={30}/>
                                                    <h4 className='font-bold pl-4 text-xl'>{val.title}</h4>
                                                </div>
 
                                            </div>
                                            <p className='pb-4 text-[#1A335D]'>{val.description}</p>
                                                {val.content}
                                        </div>
                                    )
                                })
                            }
                        </form>

                        <div className='md:flex hidden justify-center'>{currentIndex + 1} | {FORM_SLIDES.length}</div>
                        <div className='md:flex hidden gap-6 justify-center py-6'>
                            {
                                currentIndex != 0 ?
                                <button 
                                    className='text-[#FF8149] py-2 px-4 rounded-3xl border border-[#FF8149] hover:text-white hover:bg-[#FF8149] hover:border-white duration-700'
                                    onClick={showPrev}
                                >
                                    Back
                                </button>
                                : ''
                            }
                            {
                                currentIndex != FORM_SLIDES.length - 1 ?
                                <button 
                                    className='text-[#FF8149] py-2 px-4 rounded-3xl border border-[#FF8149] hover:text-white hover:bg-[#FF8149] hover:border-white duration-700'
                                    onClick={showNext}
                                >
                                    Next
                                </button>
                                :
                                <Link href={'/my-profile'}>
                                    <button
                                        className='text-[#326B88] py-2 px-4 border-[#326B88] border rounded-3xl hover:bg-[#326B88] hover:text-white duration-700 cursor-pointer'
                                    >
                                        Finish
                                    </button>
                                </Link>

                            }
                        </div>
                    </div>
                    <div className='hidden flex-col my-4 gap-4'>
                        <Image src={'/assets/images/publicity/ads-1.png'} alt='' width={200} height={150} />
                        <Image src={'/assets/images/publicity/ads-2.png'} alt='' width={200} height={150} />
                        <Image src={'/assets/images/publicity/ads-3.png'} alt='' width={200} height={150} />
                        <Image src={'/assets/images/publicity/ads-4.png'} alt='' width={200} height={150} />
                        <Image src={'/assets/images/publicity/ads-5.png'} alt='' width={200} height={150} />
                        <Image src={'/assets/images/publicity/ads-6.png'} alt='' width={200} height={150} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileForm;