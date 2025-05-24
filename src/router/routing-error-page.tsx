import { useRouteError } from "react-router";

export function RoutingErrorPage() {
  const error = useRouteError();

  return (
    <section className="routing-error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {(() => {
            if (typeof error === "object" && error !== null) {
              if (
                "statusText" in error &&
                typeof (error as any).statusText === "string"
              ) {
                return (error as any).statusText;
              }
              if (
                "message" in error &&
                typeof (error as any).message === "string"
              ) {
                return (error as any).message;
              }
            }
            return String(error);
          })()}
        </i>
      </p>
    </section>
  );
}
