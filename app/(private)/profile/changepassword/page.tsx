import PrimaryIconTitle from '@/components/ui/primary-icon-title/primary-icon-title';
import ChangePasswordProfileForm from '@/components/profile/edit-profile/change-password-form';

export default function AccountChangePasswordPage() {
  return (
    <>
      <PrimaryIconTitle
        title="Change Password"
        icon={{
          url: '/icons/ico_password.svg',
          alt: 'Edit Profile',
        }}
      />
      <ChangePasswordProfileForm />
    </>
  );
}
