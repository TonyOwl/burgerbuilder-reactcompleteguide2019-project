import { useState, useEffect } from "react";

export default httpClient => {
  const { response, request } = httpClient.interceptors;

  const [error, setError] = useState(null);

  const reqInterceptor = request.use(req => {
    setError(null);
    return req;
  });

  const resInterceptor = response.use(
    res => res,
    err => setError(err)
  );

  useEffect(() => {
    return () => {
      request.eject(reqInterceptor);
      response.eject(resInterceptor);
    };
  }, [request, response, reqInterceptor, resInterceptor]);

  const errorConfirmedHandler = () => setError(null);

  return [error, errorConfirmedHandler];
};
