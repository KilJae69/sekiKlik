'use client';
import styles from './change-password-form.module.scss';
import { useImperativeHandle, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import FormProvider, { RHFTextField } from '@/components/hook-form';
import FormRow from '@/components/hook-form/form-row';
import IconButton from '@/components/ui/iconbutton/iconbutton';

interface FormActions {
  submitForm: () => void;
}
interface BaseFormValues {
  password: string;
  new_password: string;
  password_confirm: string;
}

type FormValues = BaseFormValues;

export default function ChangePasswordProfileForm() {
  const [showPassword, setShowPassword] = useState(false);
  const formRef = useRef<FormActions>(null);
  useImperativeHandle(formRef, () => ({
    submitForm() {
      handleSubmit(onSubmit)();
    },
  }));
  const schema = Yup.object({
    password: Yup.string().required('Required!'),
    new_password: Yup.string()
      .min(8, 'Minimum 8 characters!')
      .required('Required!'),
    password_confirm: Yup.string()
      .oneOf([Yup.ref('new_password')], 'Passwords must match')
      .required('Confirm password is required'),
  }).required();

  const methods = useForm<any>({
    resolver: yupResolver(schema),
    defaultValues: {
      password: '',
      new_password: '',
      password_confirm: '',
    },
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
  };

  return (
    <div className={styles.changePasswordFormWrapper}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className={`${styles.innerWrapper}`}>
          <FormRow additionalClassName={styles.formRow}>
            <RHFTextField name="password" type="password" label="Password" />
            <RHFTextField
              name="new_password"
              type={showPassword ? 'text' : 'password'}
              label="New Password"
              icon={showPassword ? 'eye' : 'eye-disabled'}
              onIconClick={() => setShowPassword(!showPassword)}
            />
            <RHFTextField
              name="password_confirm"
              type={showPassword ? 'text' : 'password'}
              label="Repeat Password"
            />
          </FormRow>
        </div>

        <div className={styles.buttonWrapper}>
          <IconButton
            label="Save Changes"
            isDisabled={isSubmitting}
            icon={'/icons/ico_form_check.svg'}
            onClick={() => {
              formRef.current?.submitForm();
            }}
          />
        </div>
      </FormProvider>
    </div>
  );
}
