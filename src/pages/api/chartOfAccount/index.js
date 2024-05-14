import dbconnect from '@/backend/dbconnect'
import {ChartOfAccount} from '@/backend/mainModels'



export default async function handler(req,res){
    await dbconnect()
    switch(req.method){
        case "POST":
            try {
                var data = await ChartOfAccount.create(req.body)
                res.json({
                   message:data
                })
           } catch (error) {
               
           }
        
        case "GET":
            try {
                var data = await ChartOfAccount.find()
                res.json({
                   message:data
                })
           } catch (error) {
               
           }
        
    }
}