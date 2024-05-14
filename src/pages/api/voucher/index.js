import dbconnect from '@/backend/dbconnect'
import {Voucher} from '@/backend/mainModels'



export default async function handler(req,res){
    await dbconnect()
    switch(req.method){
        case "POST":
            try {
                var data = await Voucher.create({...req.body,createdAt:req.body.createdAt || new Date()})
                res.json({
                   message:data
                })
           } catch (error) {
               console.log(error)
           }
        
        case "GET":
            try {
                var data = await Voucher.find().populate("ledger")
                res.json({
                   message:data
                })
           } catch (error) {
               console.log(error)
           }
        
    }
}