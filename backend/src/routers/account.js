import express from "express";
import Account from "../models/account.js"
const router = new express.Router()

router.post("/SignUp", async (req, res) => {
    const user = new Account(req.body);
    try {
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({ user, token })
    } catch (error) {
        res.status(400).send(error);
    }
})

router.post('/signIn', async (req, res) => {
    try {

        const user = await Account.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.status(400).send({ user, token })


    } catch (error) {
        res.status(400).send()
    }
})


export default router
