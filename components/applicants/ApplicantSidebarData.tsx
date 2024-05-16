import Image from 'next/image';
import UserImage from '../common/UserImage';
import IconButton from '../ui/iconbutton/iconbutton';
import styles from './applicant-sidebar-data.module.scss';
import SidebarDataSubtitle from './SidebarDataSubtitle';

import ApplicantSidebarInfo from './ApplicantSidebarInfo';
const ApplicantSidebarData = () => {
  return (
    <div className={styles.wrapper}>
      <Image
        src="/icons/ico_close.svg"
        width={25}
        height={25}
        alt="close icon"
      />
      <div className={styles.innerContent}>
        <div className={styles.headerContent}>
          <UserImage
            src="/images/rosy.jpg"
            additionalClasses={styles.userImage}
          />
          <IconButton
            icon="/icons/ico_user_small.svg"
            label="Download CV"
            additionalClasses={styles.cvBtn}
          />
        </div>

        <div className={styles.categoryInfoWrapper}>
          <SidebarDataSubtitle label="Personal Information" />
          <div className={styles.gridWrapper}>
            <ApplicantSidebarInfo label="First name" info="Johny" />
            <ApplicantSidebarInfo label="Last name" info="Jobastico" />
            <ApplicantSidebarInfo label="Country" info="Croatia" />
            <ApplicantSidebarInfo
              label="Proffesion"
              info="Jobklicker, 4 years"
            />
            <ApplicantSidebarInfo label="Speak English?" info="Yes" />
            <ApplicantSidebarInfo label="Married?" info="Yes" />
            <ApplicantSidebarInfo label="Salary" info="5,000 - 6,000" />
          </div>
        </div>

        <div className={styles.categoryInfoWrapper}>
          <SidebarDataSubtitle label="Occupation" />
          <div className={styles.gridWrapper}>
            <ApplicantSidebarInfo
              label="I would like to work at:"
              info="Office"
            />
            <ApplicantSidebarInfo label="One choice" info="Delivery" />
          </div>
        </div>

        <div className={styles.categoryInfoWrapper}>
          <SidebarDataSubtitle label="Skills" />
          <div className={styles.gridWrapper}>
            <ApplicantSidebarInfo label="Electricity" info="7/10" />
            <ApplicantSidebarInfo label="Manager skills" info="3/10" />
          </div>
        </div>

        <div className={styles.categoryInfoWrapper}>
          <SidebarDataSubtitle label="Notes" />
          <ApplicantSidebarInfo info="At vero eos et accusamus et iusto odio dignissimos ducimus. Vero eos et accusamus et iusto odio dignissimos. Eos et accusamus et iusto odio dignissimos ducimus. Eet accusamus et iusto odio dignissimos ducimus. Vero eos et accusamus et iusto odio dignissimo" />
        </div>
      </div>

      <div className={styles.cta}>
        <div className={styles.btnGroup}>
          <IconButton icon="/icons/ico_person.svg" label="Accept" />
          <IconButton icon="/icons/ico_person.svg" label="Decline" />
          <IconButton icon="/icons/ico_flag_small.svg" label="Report" />
        </div>
        <IconButton
          icon="/icons/ico_paper-plane.svg"
          label="Send invitation"
          additionalClasses={styles.sendBtn}
        />
      </div>
    </div>
  );
};

export default ApplicantSidebarData;
