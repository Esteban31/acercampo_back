import {conexion} from "../bd/mysql.js"


export async function login(req, res){    

      let email = req.body.email
      let password = req.body.password


      try {
            const [result] = await conexion.query("SELECT id, password FROM user WHERE email=? LIMIT 1",[email])
            if (result[0].password == password) {
                  return res.status(200).send({ process: true })      
            }else{
                  return res.status(200).send({ process: false })      
            }


      } catch (error) {
            return res.status(200).send({ message: error.message, process:false })
      }


}