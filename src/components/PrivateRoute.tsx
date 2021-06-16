import {
  Route,
  Redirect,
  RouteProps,
} from "react-router-dom"

import { isLoggedIn } from '../services/user'

const PrivateRoute: React.FC<RouteProps> = (props) => {
  const { children, ...rest } = props

  return (
    <Route
      render={() =>
        isLoggedIn()
          ? children
          : <Redirect to='/403' />
      }
      {...rest}
    />
  )
}

export default PrivateRoute
