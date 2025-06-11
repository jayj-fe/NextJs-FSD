'use client';

type LoginErrorProps = {
  message: string;
};

export const LoginError = ({ message }: LoginErrorProps) => {
  return (
    <div style={{ color: 'red', marginTop: '12px', textAlign: 'center' }}>
      {message}
    </div>
  );
};
