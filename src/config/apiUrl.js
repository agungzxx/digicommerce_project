export const API_URL =
  process.env.NODE_ENV === "development"
    ? `${process.env.NEXT_PUBLIC_API_DEV}/api/v1`
    : `${process.env.NEXT_PUBLIC_API_PROD}/api/v1`;
