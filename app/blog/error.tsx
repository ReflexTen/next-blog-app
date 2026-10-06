"use client";

const ErrorWrapper = ({ error }: { error: Error }) => {
  return <div>Ooops!!! {error.message}</div>;
};

export default ErrorWrapper;
