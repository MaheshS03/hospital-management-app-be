const initialData = require('../data/patientData')
const patientModel = require('../models/patientModel')

const getAllPatientDetails = async(request, response) =>
    {
        try
        {
            const patients = await patientModel.find()
            if(patients.length === 0)
            {
                const patientsList = await patientModel.insertMany(initialData)
            }
            return response.status(201).json(patients)
        }
        catch(error)
        {
            response.status(500).send({message:error.message})
        }
}

const addNewPatient = async(request, response) =>
    {
        const patientToBeAdded = request.body

        try
        {
            const existingPatient = await patientModel.findOne({patientID : patientToBeAdded.patientID})
            if(existingPatient)
                {
                    return response.status(409).send({message : `A patient with ID ${patientToBeAdded.patientID} already exists!`})
                }
            const insertPatient = await patientModel.create(patientToBeAdded)
            response.status(201).json(insertPatient)
        }
        catch(error)
        {
            response.status(500).send({message : error.message})

        }
    }

const updatePatients = async(request, response) => {
        const patientToBeUpdated = request.body
    
        try
        {
            const updatedPatient = await patientModel.updateMany({patientID : patientToBeUpdated.patientID}, patientToBeUpdated)
            response.status(200).json(updatedPatient)
        }
        catch(error)
        {
            response.status(500).send({message : error.message})
        }
    }

const deletePatients = async(request, response) => {
        const patientToBeDeleted = request.body
    
        try
        {
            const deletedPatient = await patientModel.deleteOne({patientID : patientToBeDeleted.patientID})
            response.status(200).json(deletedPatient)
        }
        catch(error)
        {
            response.status(500).send({message : error.message})
        }
    }

module.exports = {getAllPatientDetails,addNewPatient,updatePatients,deletePatients}