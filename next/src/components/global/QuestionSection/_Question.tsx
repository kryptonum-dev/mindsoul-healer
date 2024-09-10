'use client';

import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { REGEX } from '@/global/constants';
import { FormStatusTypes } from '@/global/types';
import Button from '@/components/ui/Button';
import Checkbox from '@/components/ui/Checkbox';
import FormState from '@/components/ui/FormState';
import Input from '@/components/ui/Input';
import TextLink from '@/components/ui/TextLink';
import styles from './QuestionSection.module.scss';
import { QuestionFormTypes } from './QuestionSection.types';

export default function Question({ privacyPolicy, ArrowIcon, index }: QuestionFormTypes) {
  const formStateData = {
    errorState: {
      heading: 'Wiadomość nie została wysłana',
      paragraph:
        'Prawdopodobnie jest to jakiś problem z serwerem. Spróbuj ponownie teraz albo poczekaj i spróbuj za 5 minut.',
    },
    successState: {
      heading: 'Wiadomość wysłana pomyślnie',
      paragraph: 'Do 12 godzin spodziewaj się odpowiedzi',
    },
  };

  const [status, setStatus] = useState<FormStatusTypes>({ sending: false, success: undefined });
  const [questionSubmited, setQuestionSubmited] = useState<boolean>(false);

  const tabIndex = status.success === undefined && !status.sending ? 0 : -1;
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onTouched' });

  const onSubmit = async (data: FieldValues) => {
    setQuestionSubmited(false);
    setStatus({ sending: true, success: undefined });
    await new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
    const isSuccess = true;
    setStatus({ sending: false, success: isSuccess });
    reset();
  };

  const messageValue = watch('message');

  useEffect(() => {
    if (questionSubmited) {
      const inputElement = document.getElementById('question-email');

      if (inputElement) {
        (inputElement as HTMLInputElement).focus(); // Focus the input
      }
    }
  }, [questionSubmited]);

  return (
    <div className={styles.question}>
      <p className={styles.text}>
        {questionSubmited ? 'Podaj nam maila, na którego otrzymasz odpowiedź' : 'Masz inne pytanie?'}
      </p>
      <form onSubmit={handleSubmit(onSubmit)} data-questionsubmited={questionSubmited}>
        <div className={styles.questionText}>
          <Input
            tabIndex={tabIndex}
            disabled={status.sending}
            textarea
            label='Pytanie'
            register={register('message', {
              required: { value: true, message: 'Wiadomośc jest wymagana' },
              minLength: { value: 10, message: 'Wiadomość musi zawierać minimum 10 znaków' },
            })}
            maxLength={600}
            errors={errors}
          />
          <Button
            disabled={!messageValue || messageValue.length < 10 || !!errors['message']?.message}
            tabIndex={tabIndex}
            shade='gray'
            icon={ArrowIcon}
            type='button'
            onClick={() => setQuestionSubmited(true)}
          >
            Zadaj pytanie
          </Button>
        </div>
        <div className={styles.person}>
          <Input
            tabIndex={tabIndex}
            disabled={status.sending}
            type='email'
            label='E-mail'
            id='question-email'
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
          <Button
            disabled={!!errors['email']?.message || !!errors['legal']?.message}
            shade='gray'
            icon={ArrowIcon}
            tabIndex={tabIndex}
            type='submit'
          >
            Wysyłam wiadomość
          </Button>
        </div>
      </form>{' '}
      <FormState
        {...formStateData}
        isLoading={status.sending}
        isSuccess={status.success}
        setStatus={setStatus}
        hierarchy={index === 0 ? 'h3' : 'h4'}
      />
    </div>
  );
}
