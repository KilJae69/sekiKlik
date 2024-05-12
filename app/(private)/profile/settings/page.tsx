import PrimaryIconTitle from '@/components/ui/primary-icon-title/primary-icon-title';
import EditProfileForm from '@/components/profile/edit-profile/edit-profile-form';

export default function AccountSettingsPage() {
  return (
    <>
      <PrimaryIconTitle
        title="Edit Profile"
        icon={{
          url: '/icons/ico_profile.svg',
          alt: 'Edit Profile',
        }}
      />
      <EditProfileForm />
    </>
  );
}
