'use client';
import styles from './login-form.module.scss';
import { useImperativeHandle, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import FormProvider, { RHFTextField } from '@/components/hook-form';
import PrimaryButton from '@/components/ui/primarybutton/primarybutton';
import Link from 'next/link';

interface FormActions {
  submitForm: () => void;
}
interface BaseFormValues {
  email: string;
  password: string;
}

type FormValues = BaseFormValues;
export default function LoginForm() {
  const formRef = useRef<FormActions>(null);
  useImperativeHandle(formRef, () => ({
    submitForm() {
      handleSubmit(onSubmit)();
    },
  }));
  const schema = Yup.object({
    email: Yup.string().email('Not a valid email!').required('Required!'),
    password: Yup.string()
      .min(8, 'Minimum 8 characters!')
      .required('Required!'),
  }).required();

  const methods = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
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
    <div className={styles.loginFormWrapper}>
      <div className={styles.innerWrapper}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <RHFTextField name="email" type="email" label="> E-mail" />
          <RHFTextField name="password" type="password" label="Password" />

          <div className={styles.buttonWrapper}>
            <PrimaryButton
              label="Login"
              isDisabled={isSubmitting}
              onClick={() => {
                formRef.current?.submitForm();
              }}
            />
          </div>
        </FormProvider>
      </div>
      <div className={styles.bottomLinks}>
        <Link href="/forgotpassword">Forgot Your Password?</Link>
        <p>
          Dont have an account? <Link href="/register">Register Here</Link>
        </p>
      </div>
    </div>
  );
}
