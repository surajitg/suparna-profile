import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>

      <style media="screen">
        {`
      body {
        background: #dedede;
    }
    .page-wrap {
        min-height: 100vh;
    }
      `}
      </style>
      <body>
        <div className="page-wrap d-flex flex-row align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 text-center">
                <span className="display-1 d-block">404</span>
                <div className="mb-4 lead">The page you are looking for was not found.</div>
                <a href="https://www.totoprayogo.com/#" className="btn btn-link">Back to Home</a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>

  );
}