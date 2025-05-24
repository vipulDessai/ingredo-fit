// navigate to unauthorized
export function UnauthorizedPage() {
  return (
    <section className="routing-error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>You are not authorised</i>
      </p>
    </section>
  );
}
