'use client';
import styles from './edit-profile-form.module.scss';
import { useCallback, useImperativeHandle, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import FormProvider, { RHFTextField } from '@/components/hook-form';
import FormRow from '@/components/hook-form/form-row';
import { RHFCheckbox } from '@/components/hook-form/rhf-checkbox';
import { RHFUploadAvatar } from '@/components/hook-form/rhf-upload-avatar';
import { countries } from '@/config/countries';
import RHFAutocomplete from '@/components/hook-form/rhf-autocomplete';
import { RHFRadio } from '@/components/hook-form/rhf-radio';
import SalarySlider from '@/components/common/sliders/salary-slider';
import SkillsSlider from '@/components/common/sliders/skills-slider';
import RHFTextArea from '@/components/hook-form/rhf-textarea';
import IconButton from '@/components/ui/iconbutton/iconbutton';

interface FormActions {
  submitForm: () => void;
}
interface BaseFormValues {
  first_name: string;
  last_name: string;
  country: string;
  profession: string;
  education: string;
  preference: string;
  avatarUrl?: File | null;
  personal: string;
}

type FormValues = BaseFormValues;

export default function EditProfileForm() {
  const formRef = useRef<FormActions>(null);
  useImperativeHandle(formRef, () => ({
    submitForm() {
      handleSubmit(onSubmit)();
    },
  }));
  const schema = Yup.object({
    first_name: Yup.string().required('Required!'),
    last_name: Yup.string().required('Required!'),
    country: Yup.string().required('Required!'),
    profession: Yup.string().required('Required!'),
    preference: Yup.string().required('Required!'),
    education: Yup.string().required('Required!'),
    avatarUrl: Yup.mixed().nullable().notRequired(),
    personal: Yup.string().required('Required!'),
  }).required();

  const methods = useForm<any>({
    resolver: yupResolver(schema),
    defaultValues: {
      first_name: '',
      last_name: '',
      country: '',
      profession: '',
      education: '',
      avatarUrl: null,
      preference: 'office',
      personal: '',
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

  const handleDrop = useCallback(
    (acceptedFiles: any) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue('avatarUrl', newFile, { shouldValidate: true });
      }
    },
    [setValue],
  );
  const handleCheckboxChange = (name: any, checked: boolean) => {
    setValue(name, checked);
  };
  //TODO: Popravi ovo da bude cisce, eventualno probati koristi hook forms setValues umjesto state
  const [salaryValues, setSalaryValues] = useState<[number, number]>([
    500, 5000,
  ]);
  const [electrician, setElectrician] = useState(0);
  const [manager, setManager] = useState(0);
  const handleElectricianChange = (val: number) => {
    setElectrician(val);
  };
  const handleManagerChange = (val: number) => {
    setManager(val);
  };
  const handleSalaryChange = (val: number[] | number): void => {
    if (Array.isArray(val) && val.length === 2) {
      setSalaryValues(val as [number, number]);
    }
  };
  return (
    <div className={styles.editProfileFormWrapper}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className={`${styles.innerWrapper} ${styles.firstInnerWrapper}`}>
          <RHFUploadAvatar
            name="avatarUrl"
            maxSize={3145728}
            onDrop={handleDrop}
            additonalClass={styles.avatarUpload}
          />
          <FormRow additionalClassName={styles.formRow}>
            <RHFTextField name="first_name" type="text" label="First name" />
            <RHFTextField name="last_name" type="text" label="Last name" />
          </FormRow>
          <FormRow>
            <RHFAutocomplete
              name="country"
              label="Country"
              suggestions={countries}
            />
            <RHFTextField name="profession" type="text" label="Profession" />
          </FormRow>
          <FormRow additionalClassName={styles.formRow}>
            <RHFTextField name="education" type="text" label="Education" />
          </FormRow>
        </div>
        <div className={styles.innerWrapper}>
          <h3 className={styles.sectionTitle}>Occupation</h3>
          <div className={styles.columnRow}>
            <div className={styles.left}>
              <h4>I would like to work at:</h4>
              <div className={styles.inputGroupWrapper}>
                <RHFCheckbox
                  name="office"
                  onChange={(checked) =>
                    handleCheckboxChange('office', checked)
                  }
                  label="Office"
                  className={styles.checkboxWrapper}
                />

                <RHFCheckbox
                  name="Construction"
                  onChange={(checked) =>
                    handleCheckboxChange('construction', checked)
                  }
                  label="Construction"
                  className={styles.checkboxWrapper}
                />

                <RHFCheckbox
                  name="Delivery"
                  onChange={(checked) =>
                    handleCheckboxChange('delivery', checked)
                  }
                  label="Delivery"
                  className={styles.checkboxWrapper}
                />

                <RHFCheckbox
                  name="Outdoors"
                  onChange={(checked) =>
                    handleCheckboxChange('outdoors', checked)
                  }
                  label="Outdoors"
                  className={styles.checkboxWrapper}
                />
              </div>
            </div>
            <div className={styles.right}>
              <h4>If I had to chose then it would be this:</h4>
              <div className={styles.inputGroupWrapper}>
                <RHFRadio
                  name="preference"
                  value="office"
                  label="Office"
                  className={styles.radioWrapper}
                />

                <RHFRadio
                  name="preference"
                  value="construction"
                  label="Construction"
                  className={styles.radioWrapper}
                />

                <RHFRadio
                  name="preference"
                  value="delivery"
                  label="Delivery"
                  className={styles.radioWrapper}
                />

                <RHFRadio
                  name="preference"
                  value="outdoors"
                  label="Outdoors"
                  className={styles.radioWrapper}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.innerWrapper}>
          <h3 className={styles.sectionTitle}>Salary</h3>
          <div className={styles.columnRow}>
            <div className={styles.left}>
              <h4>Expected monthly salary</h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus.</p>
              <div className={styles.inputGroupWrapper}>
                <SalarySlider
                  salaryValues={salaryValues}
                  handleSalaryChange={handleSalaryChange}
                />
              </div>
            </div>

            <div className={styles.right}>
              <h4>Skills</h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus.</p>
              <div className={styles.inputGroupWrapper}>
                <SkillsSlider
                  label="Electrician"
                  value={electrician}
                  onChange={handleElectricianChange}
                  min={0}
                  max={10}
                />

                <SkillsSlider
                  label="Manager"
                  value={manager}
                  onChange={handleManagerChange}
                  min={0}
                  max={10}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.innerWrapper}>
          <h3 className={styles.sectionTitle}>personal wishes</h3>
          <RHFTextArea
            name="personal"
            label="Personal wishes"
            className={styles.personalWishes}
          />
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
