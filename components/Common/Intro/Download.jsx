import Link from 'next/link';
import {RESUME_DRIVE_LINK} from './../../../constants/constants'
const Download = ({ icon }) => {
  return (
    <>
      <Link href={RESUME_DRIVE_LINK} target='_blank' className='flex flex-row text-LightGray items-center gap-x-4 pb-14 pt-4'>
        <span className='text-Snow'>Download Resume</span>
        <span>{icon}</span>
      </Link>
    </>
  );
};

export default Download;
