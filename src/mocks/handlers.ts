// src/mocks/handlers.js
import { MockedRequest, RestHandler, rest, type DefaultBodyType } from 'msw'
import { login_response } from './data/login'
import { chartData } from './data/chart'
import { asyncRoutes } from './data/menus'

export const handlers: RestHandler<MockedRequest<DefaultBodyType>>[] = [
  rest.post('/login', (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem('is-authenticated', 'true')

    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json(login_response)
    )
  }),

  rest.get('/message', (req, res, ctx) => {
    return res(
      ctx.json({ message: 'you have created one api and mount it into page. congratulations.' })
    )
  }),

  rest.get('/charts', (req, res, ctx) => {
    return res(ctx.json(chartData))
  }),

  rest.get('/menus', (req, res, ctx) => {
    return res(ctx.json(asyncRoutes))
  }),

  rest.get('/user', (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem('is-authenticated')

    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized'
        })
      )
    }
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin'
      })
    )
  })
]
