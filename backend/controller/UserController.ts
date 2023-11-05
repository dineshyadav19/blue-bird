import prisma from "../DB/db.config";
import { Request, Response } from "express";

export const createUser = async (req: Request, res: Response) => {

  const { name, email, password } = req.body

  const findUser = await prisma.user.findUnique({
    where: {
      email
    }
  })

  if (findUser) {
    return res.json({ status: 400, message: 'Email already exist, please use another email' })
  }

  const newUser = await prisma.user.create({
    data: {
      name, email, password
    }
  })

  return res.json({ status: 200, data: newUser, message: 'User successfull created' })
}


export const updateUser = async (req: Request, res: Response) => {
  const userId = req.params.id
  const { name, email, password } = req.body;

  const newUser = await prisma.user.update({
    where: {
      id: Number(userId)
    },
    data: {
      name,
      email,
      password
    }
  })

  return res.json({
    status: 200, message: 'Details Successfully Updated', data: newUser
  })
}

export const deleteUser = async (req: Request, res: Response) => {
  const userId = req.params.id

  await prisma.user.delete({
    where: {
      id: Number(userId)
    }
  })

  return res.json({
    status: 200, message: 'User Successfully Deleted',
  })
}

export const getUser = async (req: Request, res: Response) => {
  const userId = req.params.id

  const userDetails = await prisma.user.findFirst({
    where: {
      id: Number(userId)
    }
  })

  return res.json({
    status: 200, message: 'User Successfully Fetched', data: userDetails
  })
}