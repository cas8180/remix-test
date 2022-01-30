import { Link, Links, LiveReload, Outlet, Meta } from "remix";
import globalStylesUrl from "~/styles/global.css";

export const links = () => [{ rel: "stylesheet", href: globalStylesUrl }];

export const meta = () => {
  return {
    description: "My remix blog",
    keywords: "some key,asdadas,",
  };
};

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({ children, title = "My remix blog" }) {
  return (
    <html lang="en">
      <head>
        <Links />
        <Meta />
        <title>{title}</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }) {
  return (
    <>
      <nav className="navbar navbar-default navbar">
        <Link to="/" className="logo">
          Remix
        </Link>
        <ul className="nav navbar">
          <li>
            <Link to="/posts" className="logo">
              Posts
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container">{children}</div>
    </>
  );
}

export function ErrorBoundary({ error }) {
  console.log(error);
  return (
    <Document>
      <Layout>
        <h1>Error</h1>
        <p>{error.message}</p>
      </Layout>
    </Document>
  );
}
