const patientModel = require('../models/patientModel')

const validatePatient = async(request, response) => {
    const givenPatientID = request.body.patientID

    try
    {
        const validPatientID = await patientModel.findOne({patientID : givenPatientID})
        if(validPatientID)
        {
            return response.status(200).json(validPatientID)
        }
        return response.status(400).send({message: `Invalid patientID Number!!`})
    }
    catch(error)
    {
        response.status(500).send({message : error.message})
    }
}

module.exports = {validatePatient}