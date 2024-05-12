'use client';
import styles from './register-form.module.scss';
import { useImperativeHandle, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import FormProvider, { RHFTextField } from '@/components/hook-form';
import FormRow from '@/components/hook-form/form-row';
import { RHFCheckbox } from '@/components/hook-form/rhf-checkbox';
import Link from 'next/link';
import PrimaryButton from '@/components/ui/primarybutton/primarybutton';

interface FormActions {
  submitForm: () => void;
}
interface BaseFormValues {
  email: string;
  password: string;
  password_confirm: string;
  country: string;
  terms: boolean;
}

interface JobSeekerFormValues extends BaseFormValues {
  first_name: string;
  last_name: string;
}

interface JobProviderFormValues extends BaseFormValues {
  company_name: string;
  vat_id: string;
}

type FormValues = JobSeekerFormValues | JobProviderFormValues;
export default function RegisterForm() {
  const [activeTab, setActiveTab] = useState('jobSeeker');
  const [showPassword, setShowPassword] = useState(false);

  const handleClientChange = (type: string) => {
    setActiveTab(type);
    if (type === 'jobSeeker') {
      setValue('company_name', '');
      setValue('vat_id', '');
    } else {
      setValue('first_name', '');
      setValue('last_name', '');
    }
  };

  const formRef = useRef<FormActions>(null);
  useImperativeHandle(formRef, () => ({
    submitForm() {
      handleSubmit(onSubmit)();
    },
  }));
  const schema = Yup.lazy(
    () =>
      Yup.object().shape({
        email: Yup.string().email('Not a valid email!').required('Required!'),
        password: Yup.string()
          .min(8, 'Minimum 8 characters!')
          .required('Required!'),
        password_confirm: Yup.string()
          .oneOf([Yup.ref('password')], 'Passwords must match')
          .required('Confirm password is required'),
        first_name:
          activeTab === 'jobSeeker'
            ? Yup.string().required('Required!')
            : Yup.string().nullable(),
        last_name:
          activeTab === 'jobSeeker'
            ? Yup.string().required('Required!')
            : Yup.string().nullable(),
        company_name:
          activeTab !== 'jobSeeker'
            ? Yup.string().required('Required!')
            : Yup.string().nullable(),
        vat_id:
          activeTab !== 'jobSeeker'
            ? Yup.string().required('Required!')
            : Yup.string().nullable(),
        country: Yup.string().required('Required!'),
        terms: Yup.boolean().oneOf([true], 'Required!'),
      }) as Yup.ObjectSchema<FormValues>,
  );

  const methods = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      password_confirm: '',
      first_name: '',
      last_name: '',
      company_name: '',
      vat_id: '',
      country: '',
      terms: false,
    },
  });
  const {
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
  };
  const handleCheckboxChange = (
    name:
      | 'email'
      | 'password'
      | 'password_confirm'
      | 'first_name'
      | 'last_name'
      | 'company_name'
      | 'vat_id'
      | 'country'
      | 'terms',
    checked: boolean,
  ) => {
    setValue(name, checked);
  };
  return (
    <div className={styles.registerFormWrapper}>
      <div className={styles.dynamicButtons}>
        <button
          type="button"
          className={activeTab === 'jobSeeker' ? styles.activeTab : ''}
          onClick={() => handleClientChange('jobSeeker')}
        >
          Job Seeker
        </button>
        <button
          type="button"
          className={activeTab === 'jobProvider' ? styles.activeTab : ''}
          onClick={() => handleClientChange('jobProvider')}
        >
          Job Provider
        </button>
        <div
          id="tabIndicator"
          className={`${activeTab === 'jobProvider' ? styles.right : ''} ${styles.tabIndicator}`}
        ></div>
      </div>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <RHFTextField name="email" type="email" label="> E-mail" />
        <FormRow>
          <RHFTextField
            name="password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            icon={showPassword ? 'eye' : 'eye-disabled'}
            onIconClick={() => setShowPassword(!showPassword)}
          />
          <RHFTextField
            name="password_confirm"
            type={showPassword ? 'text' : 'password'}
            label="Repeat Password"
          />
        </FormRow>
        {activeTab === 'jobSeeker' ? (
          <FormRow>
            <RHFTextField name="first_name" type="text" label="First name" />
            <RHFTextField name="last_name" type="text" label="Last name" />
          </FormRow>
        ) : (
          <FormRow>
            <RHFTextField
              name="company_name"
              type="text"
              label="Company name"
            />
            <RHFTextField name="vat_id" type="text" label="VAT ID" />
          </FormRow>
        )}

        <RHFTextField name="country" type="text" label="Country" />
        <RHFCheckbox
          name="terms"
          onChange={(checked) => handleCheckboxChange('terms', checked)}
          label={
            <>
              I accept the
              {<Link href="/terms"> GDPR Terms & Conditions </Link>}
              and have no problem with problems or whatsoever with this or that
              by the way.
            </>
          }
          className={styles.checkboxWrapper}
        />

        <div className={styles.buttonWrapper}>
          <PrimaryButton
            label="Register"
            isDisabled={isSubmitting}
            onClick={() => {
              formRef.current?.submitForm();
            }}
          />
        </div>
      </FormProvider>
    </div>
  );
}
