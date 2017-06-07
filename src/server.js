import path from 'path'

import koa from 'koa'
import logger from 'koa-bunyan-logger'
import cors from 'koa-cors'

import router from './routes/router'

/**
 * Main Koa Instance
 */
const app = koa()


/**
 * Apply middlewares
 */

app.use( logger() )
app.use( logger.requestIdContext() )
app.use( logger.requestLogger() )

app.use( cors() )

app.use( require( './routes/util/notfound' ) )

app.use( router.routes() )

// Export composable app
export default app
