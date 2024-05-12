'use client';
import * as Yup from 'yup';
// form
import { SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import FormProvider, { RHFTextField } from '@/components/hook-form';
import { useImperativeHandle, useRef } from 'react';
import PrimaryButton from '@/components/ui/primarybutton/primarybutton';
import { RHFCheckbox } from '@/components/hook-form/rhf-checkbox';
import styles from './newsletter-form.module.scss';
import Link from 'next/link';
interface FormActions {
  submitForm: () => void;
}
interface FormValues {
  email: string;
}

export default function NewsLetterForm() {
  const formRef = useRef<FormActions>(null);
  useImperativeHandle(formRef, () => ({
    submitForm() {
      handleSubmit(onSubmit)();
    },
  }));

  const NewsletterSchema = Yup.object({
    email: Yup.string().required('Required!'),
    terms: Yup.boolean().oneOf([true], 'Required!'),
    provider: Yup.boolean().oneOf([true, false]),
  }).required();

  const methods = useForm({
    resolver: yupResolver(NewsletterSchema),
    defaultValues: {
      email: '',
      terms: false,
      provider: false,
    },
  });
  const {
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit: SubmitHandler<FormValues> = async () => {
    // console.log(data);
  };
  const handleCheckboxChange = (
    name: 'email' | 'terms' | 'provider',
    checked: boolean,
  ) => {
    setValue(name, checked);
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.titleWrapper}>
        <h2>Subscribe to our Newsletter</h2>
        <p className="body-text">
          At vero eos et accusamus et iusto odio dignissimos ducimus.
        </p>
      </div>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <RHFTextField
          name="email"
          type="email"
          label="> E-mail"
          className={styles.textInput}
        />
        <RHFCheckbox
          name="provider"
          onChange={(checked) => handleCheckboxChange('provider', checked)}
          label={'I am provider'}
          className={styles.checkboxWrapper}
        />
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
            label="Subscribe"
            isDisabled={isSubmitting}
            onClick={() => {
              formRef.current?.submitForm();
            }}
          />
        </div>
        {/*<DevTool control={methods.control} />*/}
      </FormProvider>
    </div>
  );
}
