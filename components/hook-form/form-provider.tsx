import { FC, ReactNode, FormEventHandler } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { FormProvider as Form } from 'react-hook-form';

interface FormProviderProps {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
  methods: UseFormReturn<any>;
}

const FormProvider: FC<FormProviderProps> = ({
  children,
  onSubmit,
  methods,
}) => {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
};

export default FormProvider;
