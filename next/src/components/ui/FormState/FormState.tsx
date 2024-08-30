import Button from '../Button';
import styles from './FormState.module.scss';
import type { FormStateTypes } from './FormState.types';

export default function FormState({
  errorState,
  successState,
  isSuccess,
  setStatus,
  isLoading,
  hierarchy = 'h3',
}: FormStateTypes) {
  const Heading = hierarchy;
  return (
    (isSuccess !== undefined || isLoading) && (
      <div className={styles.state}>
        {isLoading ? (
          <span className={styles.loader}></span>
        ) : (
          <>
            {!isSuccess ? <SuccessIcon /> : <ErrorIcon />}
            <Heading className={styles.heading}>{!isSuccess ? successState.heading : errorState.heading}</Heading>
            <p>{!isSuccess ? successState.paragraph : errorState.paragraph}</p>
            {isSuccess !== false && (
              <>
                <Button
                  type='button'
                  icon={<ArrowIcon />}
                  onClick={() => setStatus({ sending: false, success: undefined })}
                  shade='gray'
                >
                  Spróbuj ponownie
                </Button>
              </>
            )}
          </>
        )}
      </div>
    )
  );
}

const SuccessIcon = () => (
  <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <g>
      <path
        d='M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z'
        fill='#38A35C'
      />
    </g>
  </svg>
);
const ErrorIcon = () => (
  <svg width={25} height={25} viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <g>
      <path
        d='M7.65289 1.73723C7.84043 1.54969 8.09478 1.44434 8.36 1.44434H16.64C16.9052 1.44434 17.1596 1.54969 17.3471 1.73723L23.2071 7.59723C23.3946 7.78477 23.5 8.03912 23.5 8.30434V16.5843C23.5 16.8496 23.3946 17.1039 23.2071 17.2914L17.3471 23.1514C17.1596 23.339 16.9052 23.4443 16.64 23.4443H8.36C8.09478 23.4443 7.84043 23.339 7.65289 23.1514L1.79289 17.2914C1.60536 17.1039 1.5 16.8496 1.5 16.5843V8.30434C1.5 8.03912 1.60536 7.78477 1.79289 7.59723L7.65289 1.73723ZM8.77421 3.44434L3.5 8.71855V16.1701L8.77421 21.4443H16.2258L21.5 16.1701V8.71855L16.2258 3.44434H8.77421Z'
        fill='#A71E1E'
      />
      <path
        d='M16.2071 8.73723C16.5976 9.12775 16.5976 9.76092 16.2071 10.1514L10.2071 16.1514C9.81658 16.542 9.18342 16.542 8.79289 16.1514C8.40237 15.7609 8.40237 15.1278 8.79289 14.7372L14.7929 8.73723C15.1834 8.3467 15.8166 8.3467 16.2071 8.73723Z'
        fill='#A71E1E'
      />
      <path
        d='M8.79289 8.73723C9.18342 8.3467 9.81658 8.3467 10.2071 8.73723L16.2071 14.7372C16.5976 15.1278 16.5976 15.7609 16.2071 16.1514C15.8166 16.542 15.1834 16.542 14.7929 16.1514L8.79289 10.1514C8.40237 9.76092 8.40237 9.12775 8.79289 8.73723Z'
        fill='#A71E1E'
      />
    </g>
  </svg>
);

const ArrowIcon = () => (
  <svg width={17} height={17} viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <g>
      <path
        d='M8.5 2.44417C5.93486 2.44417 3.83333 4.5457 3.83333 7.11084C3.83333 7.47903 3.53486 7.77751 3.16667 7.77751C2.79848 7.77751 2.5 7.47903 2.5 7.11084C2.5 3.80932 5.19848 1.11084 8.5 1.11084C11.8015 1.11084 14.5 3.80932 14.5 7.11084C14.5 10.4124 11.8015 13.1108 8.5 13.1108H3.16667C2.79848 13.1108 2.5 12.8124 2.5 12.4442C2.5 12.076 2.79848 11.7775 3.16667 11.7775H8.5C11.0651 11.7775 13.1667 9.67598 13.1667 7.11084C13.1667 4.5457 11.0651 2.44417 8.5 2.44417Z'
        fill='currentColor'
      />
      <path
        d='M6.30474 9.3061C6.56509 9.56645 6.56509 9.98856 6.30474 10.2489L4.10948 12.4442L6.30474 14.6394C6.56509 14.8998 6.56509 15.3219 6.30474 15.5822C6.04439 15.8426 5.62228 15.8426 5.36193 15.5822L2.69526 12.9156C2.43491 12.6552 2.43491 12.2331 2.69526 11.9728L5.36193 9.3061C5.62228 9.04575 6.04439 9.04575 6.30474 9.3061Z'
        fill='currentColor'
      />
    </g>
  </svg>
);
