import { LiveReload , Outlet} from "@remix-run/react"
export default function App() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Remix Todos App</title>
      </head>
      <body>
        <Outlet/>
        {process.env.NODE_ENV === 'development' ? <LiveReload/> : null}
      </body>
    </html>
  )
}
