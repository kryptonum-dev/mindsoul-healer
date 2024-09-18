'use client';

import { createSubscriber } from '../../../actions';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { REGEX } from '@/global/constants';
import { FormStatusTypes } from '@/global/types';
import Button from '@/components/ui/Button';
import Checkbox from '@/components/ui/Checkbox';
import FormState from '@/components/ui/FormState';
import Input from '@/components/ui/Input';
import TextLink from '@/components/ui/TextLink';
import VideoBox from '@/components/ui/VideoBox';
import Img from '@/components/ui/image';
import styles from './ModuleList.module.scss';
import { ModuleFormTypes } from './ModuleList.types';

export default function Form({ buttonText, heading, privacyPolicy, index, thumbnail, video }: ModuleFormTypes) {
  const formStateData = {
    errorState: {
      heading: 'Nie udało się dodać maila',
      paragraph:
        'Podczas przesyłania informacji pojawił się problem z serwerem. Jeśli problem się powtórzy napisz na adres',
    },
    successState: {
      heading: 'Dziękuję za dodanie adresu e-mail',
      paragraph: 'Wkrótce na twój adres e-mail zostanie wysłana wiadomość z pierwszą darmową lekcją',
    },
  };

  const [status, setStatus] = useState<FormStatusTypes>({ sending: false, success: undefined });
  const tabIndex = status.success === undefined ? 0 : -1;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onTouched' });

  const onSubmit = async (data: FieldValues) => {
    setStatus({ sending: true, success: undefined });
    const status = await createSubscriber({ email: data.email, legal: data.legal });
    setStatus({ sending: false, success: status.success });
    reset();
  };

  return (
    <li className={styles.newsletter}>
      <header>
        {heading}
        <VideoBox title='Zwiastun bezpłatnej lekcji' videoId={video} options={{ muted: true, controls: false }}>
          <Img sizes='' data={thumbnail} />
        </VideoBox>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          tabIndex={tabIndex}
          disabled={status.sending}
          type='email'
          label='E-mail'
          register={register('email', {
            required: { value: true, message: 'Adres e-mail jest wymagany' },
            pattern: {
              value: REGEX.email,
              message: 'Nieprawidłowy format',
            },
          })}
          errors={errors}
        />
        <Checkbox
          tabIndex={tabIndex}
          disabled={status.sending}
          label={
            <>
              Akceptuję
              <TextLink href={privacyPolicy} tabIndex={tabIndex} target='_blank' rel='noreferrer'>
                politykę prywatności
              </TextLink>
            </>
          }
          register={register('legal', {
            required: { value: true, message: 'Zgoda jest wymagana' },
          })}
          errors={errors}
        />
        <Button shade='dark' tabIndex={tabIndex} type='submit'>
          {buttonText}
        </Button>
      </form>
      <FormState
        {...formStateData}
        isLoading={status.sending}
        isSuccess={status.success}
        setStatus={setStatus}
        hierarchy={index === 0 ? 'h4' : 'h5'}
      />
    </li>
  );
}
