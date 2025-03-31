import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <div className="dark:bg-zinc-900 dark:text-white">
        <NavBar />
      </div>
      <div className="p-6">
        <h1 className="text-4xl">Oops</h1>
        <p className="text-xl">
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An unexpected error occurred."}
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
