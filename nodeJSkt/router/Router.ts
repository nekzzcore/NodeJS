import express from 'express'
import { userRouter } from './userRouter'
import { productRouter } from './productRouter'

export const router = express.Router()

router.use('/user', userRouter)
router.use('/product', productRouter)