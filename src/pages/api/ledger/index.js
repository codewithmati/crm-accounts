import dbconnect from '@/backend/dbconnect'
import { Voucher } from '@/backend/mainModels'
import mongoose from 'mongoose'
const { startOfDay, endOfDay } = require('date-fns');



export default async function handler(req, res) {
    await dbconnect()
    switch (req.method) {
        case "POST":
            try {
                var data = await Voucher.create({ ...req.body, createdAt: req.body.createdAt || new Date() })
                res.json({
                    message: data
                })
            } catch (error) {
                console.log(error)
            }

        case "GET":

            var match = {}

            if (req.query.fDate) {
                match.createdAt = { ...match.createdAt, $gte: startOfDay(req.query.fDate) }
            }
            if (req.query.tDate) {
                match.createdAt = { ...match.createdAt, $lte: endOfDay(req.query.tDate) }
            }

            if (req.query.id) {
                match.ledger = new mongoose.Types.ObjectId(req.query.id)
            }


            try {
                var data = await Voucher.find(match).populate("ledger","name openDr openCr")
                res.json({
                    message: data
                })
            } catch (error) {
                console.log(error)
            }

    }
}