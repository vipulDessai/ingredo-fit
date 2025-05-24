import { useState, FC, ReactNode } from "react";
import { useNavigate, useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { ROOT_STORE_TYPE } from "../store";
import { useInit } from "../hooks/useInit";

interface REQUIRE_AUTH_TYPE {
  children: ReactNode;
}

export const RequireAuth: FC<REQUIRE_AUTH_TYPE> = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const authUserData = useSelector((state: ROOT_STORE_TYPE) => state.api);
  const [isLoading, setIsLoading] = useState(true);

  // TODO: check if the error is coz of unauthentication
  // and if so then redirect, this can be used on action such as button click etc
  const navigate = useNavigate();

  useInit(async () => {});

  if (isLoading) {
    return <section>Authencating...</section>;
  } else {
    return children;
  }
};
